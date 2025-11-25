import React from "react";
import NewsComponent from "./newscomponent";
import jsonData from "../../data/nextgen-news.json"; // Import the JSON data
import styles from './NewsComponent.module.css';

const News = () => {
  // Extract dates, sort them in descending order (latest first)
  const dates = Object.keys(jsonData).sort((a, b) => new Date(b) - new Date(a));

  return (
    <div className={styles.newsWrapper}>
      {dates.map((date, index) => (
        <div key={index} className={styles.newsSection}>
          <NewsComponent
            data={{ date, items: jsonData[date] }}
            isLatest={index === 0} // Expand only the latest news
          />
        </div>
      ))}
    </div>
  );
};

export default News;
