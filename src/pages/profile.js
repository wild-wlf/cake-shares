import React from 'react';
import Head from 'next/head';
import Profile from '@/components/atoms/Profile';

const index = () => {
  return (
    <>
      <Head>
        <title>CAKESHARES | PROFILE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Profile />
    </>
  );
};

export default index;
