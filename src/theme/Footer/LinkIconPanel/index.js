import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';

// Adapted from Docusaurus's LinkItem class

function FooterLinkIcon({item}) {
  const {label, img, externalImg, to, href, prependBaseUrlToHref, className, ...props} = item;
  const iconUrl = externalImg ? img : useBaseUrl(img);
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});
  return (
    <Link
      className={clsx('footer__link-icon', className)}
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      <img
        alt={label}
        src={iconUrl}
        width='40px' height='auto' style={{"margin":"5px"}}
        {...(href
          ? {
              href: prependBaseUrlToHref ? normalizedHref : href,
            }
          : {
              to: toUrl,
            })}
        />
      </Link>
  );
}
export default function FooterLinkIconPanel({item}) {
  const {iconList, ...props} = item;
  return (
      <div className="footer__item text--center" style={{"display":"flex"}}>
          {iconList.map((item, i) => (
            <React.Fragment key={i}>
              <FooterLinkIcon item={item} />
            </React.Fragment>
          ))}
      </div>
    );
}