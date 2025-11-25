import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './NewsComponent.module.css';

const NewsComponent = ({ data, isLatest }) => {
  const [isExpanded, setIsExpanded] = useState(isLatest);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const logoSafeUrl = useBaseUrl("/img/logos/ciroh-bgsafe.png");
  const sidelineDarkUrl = useBaseUrl("/img/graphics/news/sideline-dark.png");
  const sidelineLightUrl = useBaseUrl("/img/graphics/news/sideline-light.png");
  const underlinesDarkUrl = useBaseUrl("/img/graphics/news/underlines-dark.png");
  const underlinesLightUrl = useBaseUrl("/img/graphics/news/underlines-light.png");

  return (
    <div className={styles.newsContainer}>
      <div 
        className={styles.headerSection}
        onClick={toggleExpand}
      >
        <div className={styles.logoSection}>
          <img className={`${styles.darkImage} ${styles.logo}`} alt="CIROH logo" src={logoSafeUrl} />
          <img className={`${styles.lightImage} ${styles.logo}`} alt="CIROH logo" src={logoSafeUrl} />
        </div>
        
        <div className={styles.titleSection}>
          <div className={styles.titleRow}>
            <img className={`${styles.darkImage} ${styles.waveIcon}`} alt="Wave graphic" src={sidelineDarkUrl} />
            <img className={`${styles.lightImage} ${styles.waveIcon}`} alt="Wave graphic" src={sidelineLightUrl} />
            <span className={styles.titleText}>News</span>
            <img className={`${styles.darkImage} ${styles.waveIcon}`} alt="Wave graphic" src={sidelineDarkUrl} />
            <img className={`${styles.lightImage} ${styles.waveIcon}`} alt="Wave graphic" src={sidelineLightUrl} />
          </div>
          <h2 className={styles.dateTitle}>{data.date}s</h2>
          <div className={styles.underlineSection}>
            <img className={`${styles.darkImage} ${styles.underline}`} alt="Wave graphic" src={underlinesDarkUrl} />
            <img className={`${styles.lightImage} ${styles.underline}`} alt="Wave graphic" src={underlinesLightUrl} />
          </div>
        </div>

        <div className={styles.expandIndicator}>
          <span className={`${styles.expandIcon} ${isExpanded ? styles.expanded : ''}`}>
            {isExpanded ? '−' : '+'}
          </span>
          <span className={styles.expandText}>
            {isExpanded ? 'Click to collapse' : 'Click to expand'}
          </span>
        </div>
      </div>

      {isExpanded && (
        <div className={styles.newsContent}>
          {data.items.map((item, index) => (
            <div key={index} className={styles.newsItem}>
              <div className={styles.itemHeader}>
                <span className={`${styles.badge} ${styles[`badge--${getBadgeClass(item.type)}`]}`}>
                  {item.type}
                </span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
              </div>
              
              <div className={styles.itemDescription}>
                {renderDescription(item.description)}
              </div>
              
              {item.link && (
                <div className={styles.itemLink}>
                  <Link 
                    to={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.readMoreLink}
                  >
                    <span>Read more</span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Function to determine the badge class based on item.type
function getBadgeClass(type) {
  switch (type) {
    case "bug":
      return "danger";
    case "note":
      return "info";
    case "feature":
      return "success";
    case "news":
      return "info";
    case "update":
      return "warning";
    case "NGIAB":
      return "success";
    case "NRDS":
      return "primary";
    case "blog":  
      return "info";
    default:
      return "primary";
  }
}

// Function to render the description with links
function renderDescription(description) {
  return (
    <ReactMarkdown
      children={description}
      components={{
        a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" className={styles.markdownLink} {...props} />
      }}
      urlTransform={safelyUseBaseUrl}
    />
  );
}

// Function to check if a part is a web link
function isWebLink(part) {
  return part.startsWith("http://") || part.startsWith("https://");
}

// Function to safely handle internal links
function safelyUseBaseUrl(link) {
  if (isWebLink(link)) return link;
  else return useBaseUrl(link);
}

export default NewsComponent;