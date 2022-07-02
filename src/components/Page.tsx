import * as React from 'react';

import Footer from './Footer';
import Head from './Head';
import Header from './Header';

type Props = {
  header?: string;
  children: JSX.Element | JSX.Element[];
};

function Page({ header, children }: Props) {
  return (
    <>
      <Head />
      <Header headerText={header} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Page;
