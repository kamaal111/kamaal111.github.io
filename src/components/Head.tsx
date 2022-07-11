import * as React from 'react';
import Head from 'next/head';

import useMediaQuery from '../hooks/useMediaQuery';

type Props = {
  addSyntaxHighlighting?: boolean;
};

const darkMode = (
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
  />
);

function HeadComponent({ addSyntaxHighlighting = false }: Props) {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  console.log('isDarkMode', isDarkMode);

  return (
    <Head>
      <title>Kamaal Farah</title>
      {addSyntaxHighlighting ? darkMode : null}
    </Head>
  );
}

export default HeadComponent;
