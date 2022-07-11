import * as React from 'react';

import Footer from '../Footer';
import Head from '../Head';
import Header from '../Header';

type Props = {
  children?: JSX.Element | JSX.Element[];
  title?: string;
  addSyntaxHighlighting?: boolean;
};

function Page({ children, title, addSyntaxHighlighting }: Props) {
  return (
    <>
      <Head addSyntaxHighlighting={addSyntaxHighlighting} />
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
