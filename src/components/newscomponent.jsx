import React, { useState } from "react";
import themes from "./themes.module.css";

const NewsComponent = ({ data, isLatest }) => {
  const [isExpanded, setIsExpanded] = useState(isLatest); // Expand only the latest

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <hr />
      <ul className="pills pills--block">
        <li
          className="pills__item pills__item--active"
          onClick={toggleExpand}
        >
          {isExpanded ? "Click to collapse" : data.date + 's'}
        </li>
      </ul>


      {isExpanded && 
        <div style={{'display':'flex','flexDirection':'row','justifyContent':'center','alignItems':'center'}}>
          <img class={themes.darkImage} alt="CIROH logo" src="img/cirohlogo-white.png" style={{'alignSelf':'center','height':'145px','width':'145px','margin':'2rem'}}></img>
          <img class={themes.lightImage} alt="CIROH logo" src="img/cirohlogo-transparent.png" style={{'alignSelf':'center','height':'145px','width':'145px','margin':'2rem'}}></img>
          <div style={{'display':'flex','flexDirection':'column','justifyContent':'center','alignItems':'center'}}>
            <div style={{'display':'flex','flexDirection':'row','margin':'0','padding':'0'}}>
              <img class={themes.darkImage} alt="Wave graphic" src="img/news-sideline-dark.png" style={{'alignSelf':'center','height':'2rem'}}></img>
              <img class={themes.lightImage} alt="Wave graphic" src="img/news-sideline-light.png" style={{'alignSelf':'center','height':'2rem'}}></img>
              <div style={{'width':'2rem'}} />
              <p style={{'fontSize':'2rem','margin':'0'}}>News</p>
              <div style={{'width':'2rem'}} />
              <img class={themes.darkImage} alt="Wave graphic" src="img/news-sideline-dark.png" style={{'alignSelf':'center','height':'2rem'}}></img>
              <img class={themes.lightImage} alt="Wave graphic" src="img/news-sideline-light.png" style={{'alignSelf':'center','height':'2rem'}}></img>
            </div>
            <p style={{'fontSize':'3rem','margin':'0','textAlign':'center'}}><b>{data.date}s</b></p>
            <img class={themes.darkImage} alt="Wave graphic" src="img/news-underlines-dark.png" style={{'alignSelf':'center','height':'3.5rem'}}></img>
            <img class={themes.lightImage} alt="Wave graphic" src="img/news-underlines-light.png" style={{'alignSelf':'center','height':'3.5rem'}}></img>
          </div>
        </div>
      }

      {isExpanded &&
        data.items.map((item, index) => (
          <div key={index} style={{ paddingBottom: "25px" }}>
            <span className={`badge badge--${getBadgeClass(item.type)}`}>
              {item.type}
            </span>{" "}
            <strong>{item.title}</strong>
            <br />
            {renderDescription(item.description)}
            {item.link && (
              <div>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Read more...
                </a>
              </div>
            )}
          </div>
        ))}
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
    default:
      return "primary"; // Default class
  }
}

const NewsHeader = ({ date }) => {
  return (
    <img class="imagecontainer_zh05 lightImage_bt2F" alt="cirohImage" src="img/cirohlogo-transparent.png" style={{'height':'145px','width':'145px','margin-top':'15px'}}></img>
  );
}

// Function to render the description with links
function renderDescription(description) {
  const parts = description.split(" ");
  return (
    <>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {index > 0 && " "}
          {isWebLink(part) ? (
            <a href={part} target="_blank" rel="noopener noreferrer">
              {part}
            </a>
          ) : (
            <span>{part}</span>
          )}
        </React.Fragment>
      ))}
    </>
  );
}

// Function to check if a part is a web link
function isWebLink(part) {
  return part.startsWith("http://") || part.startsWith("https://");
}

export default NewsComponent;
