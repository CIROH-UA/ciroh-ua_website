import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';

const AdminInner = () => {
  const isAuthenticated = document.cookie.includes('authenticated=true');

  React.useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to login
      window.location.href = 'http://localhost:3001/api/github-login';
      return <div>Redirecting to login...</div>;
    }
  }, [isAuthenticated]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Panel</h1>
      <p>Welcome to the admin panel. Here you can manage product requests.</p>
      <Link to="/admin/add-product">
        <button>Add Product</button>
      </Link>
    </div>
  );
};

export default function Admin() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => <AdminInner />}
    </BrowserOnly>
  );
}