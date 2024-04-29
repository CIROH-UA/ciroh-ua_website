import React from 'react';
import NewsComponent from './newscomponent';
import jsonData from '/static/nextgen-news.json'; // Import the JSON data

const News = () => {
  return (
    <div>
      {Object.keys(jsonData).map((date, index) => (
        <div key={index}>
          <NewsComponent data={{ date, items: jsonData[date] }} />
        </div>
      ))}
    </div>
  );
};

export default News;
