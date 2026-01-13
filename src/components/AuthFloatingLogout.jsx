import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';

function getApiBaseUrl() {
  if (typeof window === 'undefined') return 'http://localhost:3001';
  return `http://${window.location.hostname}:3001`;
}

export default function AuthFloatingLogout() {
  const isBrowser = useIsBrowser();
  const [user, setUser] = React.useState(null);
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    if (!isBrowser) return;
    let cancelled = false;

    const run = async () => {
      try {
        const res = await fetch(`${getApiBaseUrl()}/api/me`, {
          method: 'GET',
          credentials: 'include',
        });
        if (!res.ok) {
          if (!cancelled) setUser(null);
          return;
        }
        const data = await res.json();
        if (!cancelled) setUser(data);
      } catch {
        if (!cancelled) setUser(null);
      } finally {
        if (!cancelled) setChecked(true);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [isBrowser]);

  if (!isBrowser) return null;
  if (!checked) return null;
  if (!user?.login) return null;

  const logout = async () => {
    try {
      await fetch(`${getApiBaseUrl()}/api/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } finally {
      window.location.href = '/';
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        right: 16,
        top: 'calc(var(--ifm-navbar-height) + 16px)',
        zIndex: 1000,
      }}
    >
      <button
        type="button"
        onClick={logout}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 12px',
          borderRadius: 12,
          border: '1px solid rgba(255,255,255,0.15)',
          background: 'rgba(15,23,42,0.85)',
          color: 'white',
          cursor: 'pointer',
        }}
        aria-label="Logout"
      >
        <span style={{ fontWeight: 700, fontSize: 13 }}>Logout</span>
        {user?.avatar_url ? (
          <img
            src={user.avatar_url}
            alt={user?.name || user?.login}
            style={{ width: 22, height: 22, borderRadius: 8, objectFit: 'cover' }}
          />
        ) : null}
      </button>
    </div>
  );
}
