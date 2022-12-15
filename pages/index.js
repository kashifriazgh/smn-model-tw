import React from 'react';
import { useTheme } from 'next-themes';
import Layout from '../Components/Layout';
import Head from 'next/head';
import LeftSideBar from '../Components/LeftSideBar';
import RightSideBar from '../Components/RightSideBar';
import Main from '../Components/Main';

export default function index() {
  const { theme, setTheme } = useTheme();
  setTheme('dark');
  return (
    <Layout>
      <Head>
        <title>SMN</title>
      </Head>
      <div className="flex flex-col md:flex-row">
        <div className="--left-sidebar max-h-screen overflow-auto w-1/4 hidden md:block">
          <LeftSideBar />
        </div>
        <div className="--main-content w-full md:w-1/2 ">
          <Main />
        </div>
        <div className="--right-sidebar w-full md:w-1/4">
          <RightSideBar />
        </div>
      </div>
    </Layout>
  );
}
