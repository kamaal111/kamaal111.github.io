import React from 'react';
import Link from 'next/link';

import About from './About';
import Header from './Header';
import Footer from './Footer';
import Projects from './projects/Projects';

export default function HomeContent() {
  return (
    <div className="container">
      <Header />
      <main>
        {'Read '}
        <Link href="/hallo">
          <a>this page!</a>
        </Link>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
