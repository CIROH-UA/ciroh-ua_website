import RedirectHandler from "@site/src/components/RedirectHero/RedirectHandler"

// This wasn't technically part of CIROH Hub, so redirect silently.
export default function NgiabModuleRedirect() {
  return (
    <RedirectHandler href="https://ngiab.ciroh.org/training-NGIAB-101" delay="0" />
  );
}