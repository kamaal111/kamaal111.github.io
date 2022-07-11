import * as React from 'react';
import Head from 'next/head';

type Props = {
  addSyntaxHighlighting?: boolean;
};

function HeadComponent({ addSyntaxHighlighting = false }: Props) {
  return (
    <Head>
      <title>Kamaal Farah</title>
    </Head>
  );
}

export default HeadComponent;
