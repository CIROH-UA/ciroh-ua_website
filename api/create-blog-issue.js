// API route for creating a GitHub issue with blog request
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
    const labelName = 'blog';

    const response = await fetch('https://api.github.com/repos/CIROH-UA/ciroh-ua_website/issues', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body, labels: [labelName] }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return res.status(response.status || 500).json({ error: 'Failed to create issue', details: errorData });
    }

    const issue = await response.json().catch(() => null);

    let labelsApplied = false;
    if (issue?.number) {
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      };

      const labelCheck = await fetch(
        `https://api.github.com/repos/CIROH-UA/ciroh-ua_website/labels/${encodeURIComponent(labelName)}`,
        { method: 'GET', headers }
      );

      if (labelCheck.status === 404) {
        await fetch('https://api.github.com/repos/CIROH-UA/ciroh-ua_website/labels', {
          method: 'POST',
          headers,
          body: JSON.stringify({
            name: labelName,
            color: '0e8a16',
            description: 'Blog post requests',
          }),
        }).catch(() => null);
      }

      const setLabelsRes = await fetch(
        `https://api.github.com/repos/CIROH-UA/ciroh-ua_website/issues/${issue.number}/labels`,
        {
          method: 'PUT',
          headers,
          body: JSON.stringify({ labels: [labelName] }),
        }
      );

      if (setLabelsRes.ok) {
        const labels = await setLabelsRes.json().catch(() => null);
        labelsApplied = Array.isArray(labels)
          ? labels.some((l) => (l?.name || '').toLowerCase() === labelName)
          : true;
      }
    }

    return res.status(200).json({
      success: true,
      issue: issue?.number
        ? {
            number: issue.number,
            url: issue.html_url,
            repo: 'CIROH-UA/ciroh-ua_website',
          }
        : undefined,
      labelsApplied,
      labelRequested: 'blog',
    });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
