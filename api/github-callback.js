// API route for handling GitHub OAuth callback
export default async function handler(req, res) {
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
}