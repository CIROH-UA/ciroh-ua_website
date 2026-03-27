import RedirectHero from "./RedirectHero";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useLocation } from 'react-router-dom';

// Mostly identical to RedirectHero. Automatically handles redirects to pages that retain largely identical paths in CIROH Hub.

const target = "https://hub.ciroh.org"

// Note: this function assumes valid path input, i.e. a path that is prefixed by the baseURL.
// This is a safe assumption in this context, but it may not be a safe assumption in all contexts,
// so be sure to add safety checks if reusing this logic.
function stripBaseURL(path, baseURL) {
    if (baseURL === "" || baseURL === "/") return path;
    const alteredPath = path.substring(baseURL.length-1);
    return alteredPath;
}

export default function AutoRedirectHero() {
  const path = useLocation().pathname;
  const baseURL = useBaseUrl('/');

  return (
    <RedirectHero href={target + stripBaseURL(path, baseURL)} />
  );
}