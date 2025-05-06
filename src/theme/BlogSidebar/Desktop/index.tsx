// Ejected from Docusaurus 3.7 via Swizzle.
// 05/06/2025: Edited to inject sidebar descriptions from config.

import React, {memo} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {
  useVisibleBlogSidebarItems,
  BlogSidebarItemList,
} from '@docusaurus/plugin-content-blog/client';
import BlogSidebarContent from '@theme/BlogSidebar/Content';
import type {Props as BlogSidebarContentProps} from '@theme/BlogSidebar/Content';
import type {Props} from '@theme/BlogSidebar/Desktop';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'; // Added 05/06/2025

import styles from './styles.module.css';

const ListComponent: BlogSidebarContentProps['ListComponent'] = ({items}) => {
  return (
    <BlogSidebarItemList
      items={items}
      ulClassName={clsx(styles.sidebarItemList, 'clean-list')}
      liClassName={styles.sidebarItem}
      linkClassName={styles.sidebarItemLink}
      linkActiveClassName={styles.sidebarItemLinkActive}
    />
  );
};

// Added 05/06/2025
function BlogInjectionDesktop({sidebar}: Props) {
  // Retrieve sidebar injection
  const {siteConfig} = useDocusaurusContext();
  let blogSidebarInjection: any = null;
  if (typeof siteConfig.customFields == 'object') {
    let customFields: any = siteConfig.customFields as any;
    if (Array.isArray(customFields.blogSidebarInjection)) {
      blogSidebarInjection = customFields.blogSidebarInjection as any[];
    }
  }
  if (blogSidebarInjection == null) return (<></>);

  // Search for usable injection contents, return if appropriate
  let output = (<></>);
  blogSidebarInjection.forEach( (entry: any) => {
    if (entry.sidebarTitle === sidebar.title && typeof entry.html === 'string') {
      output = (
        <div 
          // (Referenced from Docusaurus footer component.)
          // Developer provided the HTML, so assume it's safe.
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: entry.html}}
        />
      );
    }
  });

  return output;
}

function BlogSidebarDesktop({sidebar}: Props) {
  const items = useVisibleBlogSidebarItems(sidebar.items);
  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, 'thin-scrollbar')}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog recent posts navigation',
          description: 'The ARIA label for recent posts in the blog sidebar',
        })}>
        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          {sidebar.title}
        </div>
        <BlogInjectionDesktop
          sidebar={sidebar}
        /> {/* Added 05/06/2025 */}
        <BlogSidebarContent
          items={items}
          ListComponent={ListComponent}
          yearGroupHeadingClassName={styles.yearGroupHeading}
        />
      </nav>
    </aside>
  );
}

export default memo(BlogSidebarDesktop);
