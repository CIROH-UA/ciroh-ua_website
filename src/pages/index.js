import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      {/* Add floating water drops - minimal addition */}
      <div className={styles.floatingElements}>
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className={styles.waterDrop} 
            style={{
              left: `${15 + i * 12}%`, 
              animationDelay: `${i * 1.5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-flex-container">
            <div className="hero-text">
              <div className={styles.flexitem1}>
                <img src="img/logos/ciroh-dark.png" alt="CIROH Logo" />
              </div>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <h2 className='hero__subtitle'>{siteConfig.tagline}</h2>
              <div className={styles.flexContainer}>
                <div className={styles.flexitem1}>
                  <p style={{ fontSize: 20 }}>
                  Welcome to <b>CIROH's DocuHub</b> – Your centralized gateway to expert insights on our Products, Services, and comprehensive documentation. This powerful resource empowers our community with the technical knowledge needed to enhance collaboration and drive impactful contributions.                   
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
  const { siteConfig } = useDocusaurusContext();
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