import React from 'react';
import TOCItems from '@theme-original/TOCItems';
import type TOCItemsType from '@theme/TOCItems';
import type {WrapperProps} from '@docusaurus/types';
import { useLocation } from '@docusaurus/router';
import TableOfContents from '@site/src/components/InfrastructureAccess/TableOfContents';

type Props = WrapperProps<typeof TOCItemsType>;

export default function TOCItemsWrapper(props: Props): JSX.Element {
  const location = useLocation();
  
  // Only show custom TOC on the Infrastructure Access page
  if (location.pathname === '/docs/services/access' || location.pathname === '/docs/services/access/') {
    return <TableOfContents />;
  }
  
  return (
    <>
      <TOCItems {...props} />
    </>
  );
}