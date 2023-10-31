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
        <h1 className="hero__title">{siteConfig.title}</h1>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/products/products-intro">
            Documentation            
          </Link>
          <Link style={{marginLeft: '20px'}}
            className="button button--info button--lg"
            to="/docs/services/">
            Cloud Services            
          </Link>
        </div> */}
        <span style={{ fontSize: 20 }}>
                  <b>CIROH</b>, a partnership between <b>NOAA</b> and{" "}
                  <b>the University of Alabama</b>, is a national consortium
                  committed to advance the forecasting of floods, droughts, and
                  water quality. CIROH scientists work to improve hydrologic
                  process understanding, operational hydrologic forecasting
                  techniques and workflows, community water modeling,
                  translation of forecasts to actionable products, and use of
                  water predictions in decision making.
                </span>
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
