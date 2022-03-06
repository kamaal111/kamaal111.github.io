import React from 'react';
import type { AppProps } from 'next/app';

import '../styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
