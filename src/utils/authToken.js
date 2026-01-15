const TOKEN_KEY = 'ciroh_admin_jwt';

export function getStoredJwt() {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setStoredJwt(token) {
  if (typeof window === 'undefined') return;
  if (!token) return;
  try {
    window.localStorage.setItem(TOKEN_KEY, token);
  } catch {
    // ignore
  }
}

export function clearStoredJwt() {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(TOKEN_KEY);
  } catch {
    // ignore
  }
}

export function consumeJwtFromUrl() {
  if (typeof window === 'undefined') return null;

  try {
    const url = new URL(window.location.href);
    const token = url.searchParams.get('token');

    if (!token) return null;

    setStoredJwt(token);
    url.searchParams.delete('token');

    // Keep the user on the same page, but remove the token from the address bar.
    window.history.replaceState({}, document.title, url.toString());

    return token;
  } catch {
    return null;
  }
}
