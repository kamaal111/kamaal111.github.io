import React from 'react';
import Head from 'next/head';

function HomeHeader() {
  return (
    <Head>
      <title>Kamaal Farah</title>
      <h1 className="about-name">
        {'Welcome '}
        <span aria-label="put up hand" role="img">
          🙋‍♂️
        </span>
      </h1>
      <p>
        What theme do I use?
        <br />
        {'I call it bare-bone '}
        <span aria-label="glitter" role="img">
          ✨
        </span>
      </p>
    </Head>
  );
}

export default HomeHeader;
