import React from 'react';
import Head from 'next/head';

import Footer from '../components/Footer';
import HomeBanner from '../components/Home/HomeBanner';
import HomeContent from '../components/Home/HomeContent';

function Home() {
  return (
    <>
      <Head>
        <title>Kamaal Farah</title>
      </Head>
      <div id="home-content">
        <HomeBanner />
        <HomeContent />
      </div>
      <Footer />
    </>
  );
}

export default Home;
