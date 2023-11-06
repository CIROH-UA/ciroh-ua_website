import React from 'react';

const NewsComponent = ({ data }) => {
  return (
    <div>
      <ul className="pills">
        <li className="pills__item pills__item--active">{data.date}</li>
      </ul>

      {data.items.map((item, index) => (
        <div key={index}>
          <span className={`badge badge--${getBadgeClass(item.type)}`}>{item.type}</span> <strong> {item.title}</strong>
                  <br/>{item.description}
          <br /><br />
        </div>
      ))}
    </div>
  );
};

// Function to determine the badge class based on item.type
function getBadgeClass(type) {
  switch (type) {
    case 'bug':
      return 'danger';
    case 'note':
      return 'info';
    case 'feature':
      return 'success';
    case 'news':
      return 'info';
    default:
      return 'primary'; // Provide a default class if type doesn't match the cases above
  }
}
export default NewsComponent;
