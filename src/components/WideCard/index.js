import React from 'react';
import './card.css'

export default function Highlight({children}) {
  return (
     <article class="col col--6 margin-bottom--lg">
          <a class="card_1 padding--lg_1 cardContainer_card" href="/docs/services/On-Premises/Pantarhei/intro">
               <h2 class="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module">{children}</h2>
          </a>
     </article>
  );
}