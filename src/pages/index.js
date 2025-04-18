import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
    <div className="container">
      <div className="hero-content">
        <div className="hero-flex-container">
          <div className="hero-text">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <span style={{ fontSize: 20 }}>
              Welcome to <b>CIROH's DocuHub </b> – a carefully curated central repository
              providing in-depth technical insights into <b>CIROH's projects, services, and documentation. </b>
              This invaluable resource is designed to empower team members, collaborators, 
              and community stakeholders with the knowledge needed to enhance their understanding and contributions. 
              Explore DocuHub to deepen your understanding and actively engage in our collaborative learning culture.
            </span>
          </div>
          {/* <div className="hero-image">
            <img src="img/logos/docuhub.png" alt="Logo" style={{ maxWidth: '15%' }} />
          </div> */}
        </div>
      </div>
    </div>
  </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
