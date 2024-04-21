import 'font-awesome/css/font-awesome.min.css';
import '../../styles/globals.scss';
import '../../styles/typography.scss';
import '../../styles/dracula.css';

import React from 'react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
