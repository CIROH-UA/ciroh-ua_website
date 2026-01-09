import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const AddProductInner = () => {
  const [form, setForm] = useState({
    productName: '',
    shortDescription: '',
    category: '',
    tags: '',
    iconUrl: '',
    githubUrl: '',
    docsUrl: '',
    hydroshareUrl: '',
    zoteroUrl: '',
    primaryContact: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate required fields
    if (!form.productName || !form.shortDescription || !form.category || !form.githubUrl || !form.docsUrl) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    const title = `Product Request: ${form.productName}`;
    const body = buildBody(form);

    try {
      const res = await fetch('http://localhost:3001/api/create-product-issue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to submit product request.');
      }
    } catch (err) {
      setError('An error occurred while submitting.');
    }

    setLoading(false);
  };

  const buildBody = (f) => {
    return `## Product Information

**Product Name:** ${f.productName}

**Short Description:** ${f.shortDescription}

**Select Category:** ${f.category}

**Product Tags:** ${f.tags || 'N/A'}

**Icon URL:** ${f.iconUrl || 'N/A'}

---

### Links (At least one required)

**GitHub Repository URL:** ${f.githubUrl}

**Documentation URL:** ${f.docsUrl}

**HydroShare Resource URL:** ${f.hydroshareUrl || 'N/A'}

**Zotero Collection URL:** ${f.zoteroUrl || 'N/A'}

---

### Additional Information

**Primary Contact:** ${f.primaryContact || 'N/A'}
`;
  };

  if (submitted) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>**Thank you for contributing to the CIROH Products catalog!** 🌊</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Add Product Request</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Product Name (Required):</label>
          <input
            type="text"
            name="productName"
            value={form.productName}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Short Description (Required):</label>
          <textarea
            name="shortDescription"
            value={form.shortDescription}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', minHeight: '80px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Select Category (Required):</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="">Select Category</option>
            <option value="Modeling Framework">Modeling Framework</option>
            <option value="Water Modeling">Water Modeling</option>
            <option value="Geospatial Tools">Geospatial Tools</option>
            <option value="Data Management">Data Management</option>
            <option value="Analysis Tools">Analysis Tools</option>
            <option value="Snow Science">Snow Science</option>
            <option value="AI/ML">AI/ML</option>
            <option value="Visualization">Visualization</option>
            <option value="Flood Management">Flood Management</option>
            <option value="Data Resources">Data Resources</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Product Tags (Optional, comma-separated):</label>
          <input
            type="text"
            name="tags"
            value={form.tags}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Icon URL (Optional):</label>
          <input
            type="url"
            name="iconUrl"
            value={form.iconUrl}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>GitHub Repository URL (Required):</label>
          <input
            type="url"
            name="githubUrl"
            value={form.githubUrl}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Documentation URL (Required):</label>
          <input
            type="url"
            name="docsUrl"
            value={form.docsUrl}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>HydroShare Resource URL (Optional):</label>
          <input
            type="url"
            name="hydroshareUrl"
            value={form.hydroshareUrl}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Zotero Collection URL (Optional):</label>
          <input
            type="url"
            name="zoteroUrl"
            value={form.zoteroUrl}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Primary Contact (Optional):</label>
          <input
            type="text"
            name="primaryContact"
            value={form.primaryContact}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

        <button type="submit" disabled={loading} style={{ padding: '10px 20px' }}>
          {loading ? 'Submitting...' : 'Submit Product Request'}
        </button>
      </form>
    </div>
  );
};

const AddProduct = () => (
  <BrowserOnly fallback={<div>Loading...</div>}>
    {() => <AddProductInner />}
  </BrowserOnly>
);

export default AddProduct;