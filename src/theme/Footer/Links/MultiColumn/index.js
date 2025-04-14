import React from 'react';
import clsx from 'clsx';
import LinkItem from '@theme/Footer/LinkItem';
import LinkIconPanel from '@theme/Footer/LinkIconPanel';

function ColumnLinkItem({item}) {
  if (item.html) return (
    <li
      className={clsx('footer__item', item.className)}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: item.html}}
    />
  )
  else if (item.iconList) return (
    <li key={item.href ?? item.to} className="footer__item">
      <LinkIconPanel item={item} />
    </li>
  )
  return (
    <li key={item.href ?? item.to} className="footer__item">
      <LinkItem item={item} />
    </li>
  );
}
function Column({column}) {
  return (
    <div className={clsx('col footer__col', column.className)}>
      <div className="footer__title">{column.title}</div>
      <ul className="footer__items clean-list">
        {column.items.map((item, i) => (
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}
export default function FooterLinksMultiColumn({columns}) {
  return (
    <div className="row footer__links">
      {columns.map((column, i) => (
        <Column key={i} column={column} />
      ))}
    </div>
  );
}
