import * as React from 'react';

import Footer from '../Footer';
import Head from '../Head';
import Header from '../Header';

interface Props {
  children?: JSX.Element | JSX.Element[];
  title?: string;
}

function Page({ children, title }: Props): JSX.Element {
  return (
    <>
      <Head />
      <Header />
      <main>
        {title != null ? <h1 className="title">{title}</h1> : null}
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Page;
