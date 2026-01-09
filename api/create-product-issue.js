// API route for creating a GitHub issue with product request
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
}