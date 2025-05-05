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
            <div className={styles.flexContainer}>
            <div className={styles.flexitem1}>
              <img src="img/logos/ciroh-dark.png" alt="CIROH Logo" />
            </div>
            <div className={styles.flexitem1}>
              <p style={{fontSize: 20}}>
                Welcome to <b>CIROH's DocuHub</b> – a carefully curated central repository
                providing in-depth technical insights into <b>CIROH's projects, services, and documentation.</b>
                This invaluable resource is designed to empower team members, collaborators, 
                and community stakeholders with the knowledge needed to enhance their understanding and contributions.
              </p>
            </div>
          </div>
          </div>
         
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
