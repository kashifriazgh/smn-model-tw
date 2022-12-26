import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import Layout from '../Components/Layout';
import Head from 'next/head';
import LeftSideBar from '../Components/LeftSideBar';
import RightSideBar from '../Components/RightSideBar';
import Main from '../Components/Main';

export default function index() {
  const { theme, setTheme } = useTheme();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Layout openMenu={openMenu} setOpenMenu={setOpenMenu}>
      <Head>
        <title>SMN</title>
        <script
          id="pixel-script-poptin"
          src="https://cdn.popt.in/pixel.js?id=961138ff3e969"
          async="true"
        ></script>
      </Head>
      <div className="flex flex-col md:flex-row">
        <div className="--left-sidebar max-h-screen overflow-auto w-full md:w-1/4  md:block">
          <LeftSideBar openMenu={openMenu} />
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
