import React from 'react';
import styles from './CommunityImpact.module.css';
import BlogFilter from '../BlogFilter';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

const ImpactItem = ({ title, count, imageSrc,users }) => (
  <div className={clsx(styles.impactItem, 'card')}>
    <img src={imageSrc} alt={`${title} icon`} className={styles.impactIcon} />
    <h3 className={styles.impactTitle}>{title}</h3>
    <p className={styles.impactCount}>{count} ongoing projects</p>
    <p className={styles.impactCount}>{users} active users</p>
  </div>
);

export default function CommunityImpactComponent() {
  const impactData = [
    {
      title: "Amazon Web Services",
      count: 24,
      imageSrc: useBaseUrl("/img/logos/corp/aws-black.svg"),
      users: 69,
    },
    {
      title: "GCP and JupyterHub",
      count: 63,
      imageSrc: useBaseUrl("/img/logos/corp/google-cloud.jpg"),
      users: 183,
    },
    {
      title: "On-premise HPC",
      count: 57,
      imageSrc: useBaseUrl("/img/logos/pantarhei.jpg"),
      users: 78,
    },
    {
      title: "NSF ACCESS Allocations",
      count: 7,
      imageSrc: useBaseUrl("/img/logos/nsf-logo.png"),
      users: 75,
    }
  ];

  return (
    <div>
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
    <div className="container">
      <div className="hero-content">
        <div className="hero-flex-container">
          <div className="hero-text">
            <h1 className="hero__title">Community Impact</h1>
            <span style={{ fontSize: 20 }}>
            We are committed to providing infrastructure support to CIROH consortium partners and members to advance 
        their research. Our impact spans across various cloud platforms and resources. Here's an overview of our contributions:
      
            </span>
          </div>
          {/* <div className="hero-image">
            <img src="img/logos/docuhub.png" alt="Logo" style={{ maxWidth: '15%' }} />
          </div> */}
        </div>
      </div>
    </div>
  </header>
      <div className={styles.impactGrid}>
        {impactData.map((item, index) => (
          <ImpactItem 
            key={index}
            title={item.title}
            count={item.count}
            imageSrc={useBaseUrl(item.imageSrc)}
            users={item.users}
          />
        ))}
      </div>
      <hr className={styles.sectionDivider} />
      <p className={`container ${styles.paragraph}`}>To learn more about our projects and the impact we're making, check out our blogs for in-depth insights and updates!</p>
      <div className="container">
      <BlogFilter />
      </div>
    </div>
  );
}