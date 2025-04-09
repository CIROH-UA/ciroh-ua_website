import React from 'react';
import './card.css'
import Link from '@docusaurus/Link'

export default function Highlight({children}) {
  return (
     <article class="col col--6 margin-bottom--lg">
          <Link class="card_1 padding--lg_1 cardContainer_card" to="/docs/services/On-Premises/Pantarhei/intro">
               <h2 class="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module">{children}</h2>
          </Link>
     </article>
  );
}