import * as React from 'react';

import Footer from './Footer';
import Head from './Head';
import Header from './Header';

type Props = {
  children: JSX.Element | JSX.Element[];
};

function Page({ children }: Props) {
  return (
    <>
      <Head />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Page;
