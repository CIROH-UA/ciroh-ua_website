import React, { useState, useEffect } from "react";
import styles from "./blogcomponent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from 'react-markdown';

const BlogList = () => {
  const [page, setPage] = useState(1);
  const [blogData, setBlogData] = useState([]);

  const getData = () => {
    fetch("/blog.json") // This will fetch json data from static/blog.json file.
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setBlogData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const itemsPerPage = 6;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedBlog = blogData.slice(startIndex, endIndex);

  // ************* Blog Card starts here ********
  const BlogComponent = ({ header, details, date, authors, referencesUrl }) => {
    return (
      <div
        className={`infima-card`}
        style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)", border: "0px" }}
      >
        <div className={`infima-card-body ${styles.cardBody}`}>
          <h2 className="infima-heading">{header}</h2>
          <ReactMarkdown className="infima-paragraph">{details}</ReactMarkdown>
          <div className={`infima-metadata ${styles.metadata}`}>
            <span className={styles.metadataContent}>
              <FontAwesomeIcon icon="fa-solid fa-calendar-days" /> {date} &nbsp;
              <FontAwesomeIcon icon="fa-solid fa-users" /> {authors}
            </span>
            {referencesUrl !== undefined && referencesUrl !== "" && (
              <div className={`infima-paragraph}`}>
                <a
                  href={referencesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more...
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // ************* Blog Card ends here ********

  return (
    <div className={`infima-card ${styles.blogList}`}>
      <div className={`infima-card-body ${styles.cardBody}`}>
        {displayedBlog.map((blog, index) => (
          <BlogComponent
            key={index}
            header={blog.header}
            details={blog.details}
            date={blog.date}
            authors={blog.authors}
            referencesUrl={blog.referencesUrl}
          />
        ))}
      </div>

      {blogData.length > itemsPerPage && (
        <div className={`infima-card-footer ${styles.pagination}`}>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className={`infima-button ${styles.paginationButton}`}
          >
            <FontAwesomeIcon icon="fa-solid fa-left-long" />
          </button>
          <span className={styles.pageNumber}> Page {page} </span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={endIndex >= blogData.length}
            className={`infima-button ${styles.paginationButton}`}
          >
            <FontAwesomeIcon icon="fa-solid fa-right-long" />
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
