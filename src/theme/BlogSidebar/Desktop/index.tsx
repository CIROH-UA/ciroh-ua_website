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

function doBlogBlurbDesktop(title) {
  if (title != "DocuHub Blog") return <></>;
  return (
    <>
      <div style={{marginBottom:"1rem"}}>
        Exclusive content for researchers utilizing CIROH Cyberinfrastructure resources.
        Share your insights, discoveries, and experiences with the hydrologic science community.
      </div>
      <div>
        This blog platform is dedicated to highlighting the innovative work of researchers who
        have leveraged CIROH's computational tools and resources to advance water science.
        Your stories help demonstrate the value of our shared infrastructure and inspire new
        applications across the field.
      </div>
    </>
  );
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
        { doBlogBlurbDesktop(sidebar.title) }
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
