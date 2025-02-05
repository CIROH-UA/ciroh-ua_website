import React, {useState} from "react";

const NewsComponent = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <hr />
      <ul className="pills pills--block">
        <li
          className={`pills__item pills__item--active`}
          onClick={toggleExpand}
        >
          {data.date}
        </li>
      </ul>

      {isExpanded &&
        data.items.map((item, index) => (
          <div key={index} style={{ paddingBottom: "25px" }}>
            <span className={`badge badge--${getBadgeClass(item.type)}`}>
              {item.type}
            </span>{" "}
            <strong> {item.title}</strong>
            <br />
            {renderDescription(item.description, item.link)}
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
      return "primary"; // Provide a default class if type doesn't match the cases above
  }
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
