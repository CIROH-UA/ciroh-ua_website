const express = require('express');
const fetch = require('node-fetch'); // You'll need to install node-fetch: npm install node-fetch@2
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
const githubRepo = process.env.GITHUB_REPO || 'CIROH-UA/ciroh-ua_website';
const githubOAuthScope = process.env.GITHUB_OAUTH_SCOPE || 'public_repo';
const githubAuthScheme = process.env.GITHUB_AUTH_SCHEME || 'token'; // 'token' (classic PAT/OAuth) or 'Bearer' (fine-grained PAT/GitHub App)
const allowClientToken = process.env.ALLOW_CLIENT_TOKEN === 'true'; // DEV ONLY: never enable in production
const assignIssueToAuthor = process.env.ASSIGN_ISSUE_TO_AUTHOR === 'true';

// If running behind a reverse proxy (production), this enables secure cookies with x-forwarded-proto
app.set('trust proxy', 1);

// TODO: In production, set proper CORS origins
app.use(cors({
  origin: frontendUrl,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

function getCookieBaseOptions() {
  const isProd = process.env.NODE_ENV === 'production';
  return {
    secure: isProd,
    sameSite: 'lax',
    path: '/',
  };
}

// API route for initiating GitHub OAuth login
app.get('/api/github-login', (req, res) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return res.status(500).json({ error: 'GitHub Client ID not configured' });
  }

  // Build callback URL that points back to this server
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers.host;
  const redirectUri = `${protocol}://${host}/api/github-callback`;

  // prompt=consent helps when changing scopes during development
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${encodeURIComponent(githubOAuthScope)}&redirect_uri=${encodeURIComponent(redirectUri)}&prompt=consent`;
  res.redirect(url);
});

// API route for handling GitHub OAuth callback
app.get('/api/github-callback', async (req, res) => {
  const code = req.query.code;
  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return res.status(500).json({ error: 'GitHub credentials not configured' });
  }

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `client_id=${clientId}&client_secret=${clientSecret}&code=${code}`,
    });

    const data = await response.json();

    if (data.access_token) {
      const isProd = process.env.NODE_ENV === 'production';
      // Production-safe defaults:
      // - HttpOnly token cookie (prevents JS access)
      // - Secure cookie in production (requires HTTPS)
      // - SameSite=Lax is fine for localhost (ports don't change site)
      // NOTE: Setting ALLOW_CLIENT_TOKEN=true will make the token readable by JS (DEV ONLY).
      const cookieSecure = isProd;
      const accessTokenCookieOptions = {
        httpOnly: !allowClientToken,
        secure: cookieSecure,
        ...getCookieBaseOptions(),
        maxAge: 3600 * 1000,
      };
      res.cookie('access_token', data.access_token, accessTokenCookieOptions);
      res.cookie('authenticated', 'true', {
        httpOnly: false,
        secure: cookieSecure,
        ...getCookieBaseOptions(),
        maxAge: 3600 * 1000,
      });
      // Redirect to frontend admin page
      return res.redirect(`${frontendUrl}/admin`);
    }

    return res.status(400).json({ error: 'Failed to obtain access token', details: data });
  } catch (error) {
    console.error('Error in /api/github-callback:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

async function githubGet(path, token) {
  const response = await fetch(`https://api.github.com${path}`, {
    method: 'GET',
    headers: {
      Authorization: `${githubAuthScheme} ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'ciroh-docuhub',
    },
  });

  let data;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  return {
    ok: response.ok,
    status: response.status,
    oauthScopes: response.headers.get('x-oauth-scopes') || '',
    acceptedOauthScopes: response.headers.get('x-accepted-oauth-scopes') || '',
    data,
  };
}

// API route for creating a GitHub issue with product request
app.post('/api/create-product-issue', async (req, res) => {
  // Requirement: create the issue as the logged-in user.
  const tokenFromCookie = req.cookies && req.cookies.access_token;
  const authHeader = req.get('Authorization') || req.get('authorization');
  const tokenFromHeader = authHeader ? authHeader.replace(/^Bearer\s+/i, '') : null;
  const token = tokenFromCookie || tokenFromHeader;

  if (!token) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(400).json({ error: 'Title and body are required' });
  }

  // Preflight checks to surface the real root cause of 403s
  const me = await githubGet('/user', token);
  if (!me.ok) {
    console.error('GitHub /user failed:', me.status, me.data);
    return res.status(me.status || 401).json({
      error: 'GitHub authentication failed',
      details: me.data,
      github: {
        status: me.status,
        oauthScopes: me.oauthScopes,
        acceptedOauthScopes: me.acceptedOauthScopes,
      },
      hint:
        me.status === 403
          ? 'Token is forbidden for /user. If the account is in an org, check org OAuth restrictions/SSO and ensure the OAuth/GitHub App is approved; then re-login.'
          : 'Re-login to GitHub and try again.',
    });
  }

  const repoInfo = await githubGet(`/repos/${githubRepo}`, token);
  if (!repoInfo.ok) {
    console.error('GitHub repo access failed:', githubRepo, repoInfo.status, repoInfo.data);
    return res.status(repoInfo.status || 403).json({
      error: 'GitHub repo access failed',
      details: repoInfo.data,
      github: {
        status: repoInfo.status,
        oauthScopes: repoInfo.oauthScopes,
        acceptedOauthScopes: repoInfo.acceptedOauthScopes,
        repo: githubRepo,
      },
      hint:
        repoInfo.status === 404
          ? 'Repo not found for this user/token. If the repo is private, set GITHUB_OAUTH_SCOPE=repo and re-login. If the repo is in an org, ensure the app is approved for that org.'
          : 'Ensure the logged-in user has access to the target repo and that the app is approved.',
    });
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${githubRepo}/issues`, {
      method: 'POST',
      headers: {
        Authorization: `${githubAuthScheme} ${token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'ciroh-docuhub',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
        ...(assignIssueToAuthor ? { assignees: [me.data?.login].filter(Boolean) } : {}),
      }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    }

    const errorData = await response.json().catch(() => ({ error: 'Non-JSON response from GitHub' }));
    const oauthScopes = response.headers.get('x-oauth-scopes');
    const acceptedOauthScopes = response.headers.get('x-accepted-oauth-scopes');

    const hint =
      response.status === 403 && errorData && errorData.message === 'Resource not accessible by integration'
        ? 'Token lacks permission to create issues in this repo. If the repo is private, set GITHUB_OAUTH_SCOPE=repo and re-login. If the repo is in an org, check org OAuth restrictions/SSO. If this is a GitHub App, ensure it is installed on the repo and has Issues: Read/Write.'
        : undefined;

    console.error('GitHub API error when creating issue:', {
      status: response.status,
      oauthScopes,
      acceptedOauthScopes,
      errorData,
      repo: githubRepo,
      user: me.data?.login,
      hint,
    });

    return res.status(response.status || 500).json({
      error: 'Failed to create issue',
      details: errorData,
      hint,
      github: {
        status: response.status,
        oauthScopes,
        acceptedOauthScopes,
        repo: githubRepo,
      },
    });
  } catch (error) {
    console.error('Error in /api/create-product-issue:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
  console.log(`Frontend URL set to ${frontendUrl}`);
});

// Returns the currently logged-in GitHub user (based on the OAuth token)
app.get('/api/me', async (req, res) => {
  const tokenFromCookie = req.cookies && req.cookies.access_token;
  const authHeader = req.get('Authorization') || req.get('authorization');
  const tokenFromHeader = authHeader ? authHeader.replace(/^Bearer\s+/i, '') : null;
  const token = tokenFromCookie || tokenFromHeader;

  if (!token) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  const me = await githubGet('/user', token);
  if (!me.ok) {
    return res.status(me.status || 401).json({
      error: 'GitHub authentication failed',
      details: me.data,
      github: {
        status: me.status,
        oauthScopes: me.oauthScopes,
        acceptedOauthScopes: me.acceptedOauthScopes,
      },
    });
  }

  return res.status(200).json({
    login: me.data?.login,
    name: me.data?.name,
    avatar_url: me.data?.avatar_url,
    html_url: me.data?.html_url,
  });
});

// Logs the user out by clearing cookies
app.post('/api/logout', (req, res) => {
  const base = getCookieBaseOptions();
  const isProd = process.env.NODE_ENV === 'production';

  // Must match cookie attributes used when setting cookies
  res.clearCookie('access_token', { ...base, secure: isProd });
  res.clearCookie('authenticated', { ...base, secure: isProd });
  return res.status(200).json({ success: true });
});