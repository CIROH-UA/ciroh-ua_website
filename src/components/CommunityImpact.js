import React from 'react';
import styles from './CommunityImpact.module.css';
import BlogFilter from './BlogFilter';
import clsx from 'clsx';
import Layout from '@theme/Layout';

const ImpactItem = ({ title, count, imageSrc,users }) => (
  <div className={styles.impactItem}>
    <img src={imageSrc} alt={`${title} icon`} className={styles.impactIcon} />
    <h3 className={styles.impactTitle}>{title}</h3>
    <p className={styles.impactCount}>{count}</p>
    <p className={styles.impactCount}>{users} active users</p>

  </div>
);

export default function CommunityImpact() {
  const impactData = [
    {
      title: "AWS Projects",
      count: 24,
      imageSrc: "/img/aws-logo.svg",
      users:60
    },
    {
      title: "GCP and JupyterHub Projects",
      count: 3,
      imageSrc: "/img/google-cloud.jpg",
      users: 171
    },
    {
      title: "On-premise HPC Projects",
      count: 20,
      imageSrc: "/img/pantarhei-logo.jpg",
      users: 50
    },
    {
      title: "NSF ACCESS Allocations Projects",
      count: 7,
      imageSrc: "/img/nsf-logo.png",
      users:27
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
            <img src="img/docuhub-logo.png" alt="Logo" style={{ maxWidth: '15%' }} />
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
            imageSrc={item.imageSrc}
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