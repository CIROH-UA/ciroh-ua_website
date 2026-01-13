import React from 'react';
import Layout from '@theme-original/Layout';
import AuthFloatingLogout from '@site/src/components/AuthFloatingLogout';

export default function LayoutWrapper(props): JSX.Element {
  return (
    <>
      <Layout {...props} />
      <AuthFloatingLogout />
    </>
  );
}
