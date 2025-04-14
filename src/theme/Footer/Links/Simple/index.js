import React from 'react';
import clsx from 'clsx';
import LinkItem from '@theme/Footer/LinkItem';
import LinkIconPanel from '@theme/Footer/LinkIconPanel';

function Separator() {
  return <span className="footer__link-separator">·</span>;
}
function SimpleLinkItem({item}) {
  if (item.html) return (
    <span
      className={clsx('footer__link-item', item.className)}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: item.html}}
    />
  )
  else if (item.iconList) return (
    <LinkIconPanel item={item} />
  )
  return (
    <LinkItem item={item} />
  );
}
export default function FooterLinksSimple({links}) {
  return (
    <div className="footer__links text--center">
      <div className="footer__links">
        {links.map((item, i) => (
          <React.Fragment key={i}>
            <SimpleLinkItem item={item} />
            {links.length !== i + 1 && <Separator />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
