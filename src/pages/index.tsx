import React from 'react';
import Head from 'next/head';

import Footer from '../components/Footer';
import HomeBanner from '../components/Home/HomeBanner';

function Home() {
  return (
    <>
      <Head>
        <title>Kamaal Farah</title>
      </Head>
      <HomeBanner />
      <Footer />
    </>
  );
}

export default Home;
