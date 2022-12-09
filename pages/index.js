import React from 'react';
import { useTheme } from 'next-themes';
import Layout from '../Components/Layout';
import Head from 'next/head';

export default function index() {
  return (
    <Layout>
      <Head>
        <title>SMN</title>
      </Head>
      <div className="flex flex-col md:flex-row">
        <div className="--left-sidebar w-1/5 bg-red-100 hidden md:block">
          Left sidebar
        </div>
        <div className="--main-content w-full md:w-1/2  bg-green-100 ">
          Main
        </div>
        <div className="--right-sidebar w-full md:w-1/3 bg-red-100">
          Right Sidebar
        </div>
      </div>
    </Layout>
  );
}
