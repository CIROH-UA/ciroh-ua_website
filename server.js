const express = require('express');
const fetch = require('node-fetch'); // You'll need to install node-fetch: npm install node-fetch@2
require('dotenv').config();

const app = express();
const port = 3001;

app.use(express.json());

// API route for initiating GitHub OAuth login
app.get('/api/github-login', (req, res) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return res.status(500).json({ error: 'GitHub Client ID not configured' });
  }

  // Assuming HTTPS in production, but for dev, you might need to adjust
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers.host;
  const redirectUri = `${protocol}://${host}/api/github-callback`;

  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=public_repo&redirect_uri=${encodeURIComponent(redirectUri)}`;
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
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `client_id=${clientId}&client_secret=${clientSecret}&code=${code}`,
    });

    const data = await response.json();

    if (data.access_token) {
      // Set HttpOnly cookie for the access token
      res.setHeader('Set-Cookie', `access_token=${data.access_token}; HttpOnly; Secure; Path=/; Max-Age=3600`); // 1 hour
      // Set a non-HttpOnly cookie for client-side auth check
      res.setHeader('Set-Cookie', `authenticated=true; Path=/; Max-Age=3600`);
      res.redirect('/admin');
    } else {
      res.status(400).json({ error: 'Failed to obtain access token' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API route for creating a GitHub issue with product request
app.post('/api/create-product-issue', async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(400).json({ error: 'Title and body are required' });
  }

  try {
    const response = await fetch('https://api.github.com/repos/CIROH-UA/ciroh-ua_website/issues?template=product-request.md', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    });

    if (response.ok) {
      res.status(200).json({ success: true });
    } else {
      const errorData = await response.json();
      res.status(500).json({ error: 'Failed to create issue', details: errorData });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});