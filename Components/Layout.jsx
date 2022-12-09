import React from 'react';
import Header from './Header';
import Head from 'next/head';

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SMN</title>
      </Head>
      <div className="w-full">
        <Header />
        {children}
      </div>
    </>
  );
}
