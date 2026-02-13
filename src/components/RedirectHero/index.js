import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import CirohLogoImage from '@site/static/img/logos/ciroh-light.png';
import CirohLogoImageDark from '@site/static/img/logos/ciroh-dark.png';
import Header from './Header';

export default function RedirectHero() {
  const { colorMode } = useColorMode();
  const Cirohlogo = colorMode === 'dark' ? CirohLogoImageDark : CirohLogoImage;

  return (
      <Header
        title="CIROH Hub is here."
        image={Cirohlogo}
      />
  );
}