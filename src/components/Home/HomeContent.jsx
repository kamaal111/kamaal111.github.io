import React from 'react';
import Link from 'next/link';

import About from './About';
import Header from './Header';
import Footer from './Footer';
import Projects from './projects/Projects';

export default function HomeContent() {
  const path = `/colorselector/edit?red=${100}&green=${120}&blue=${30}&alpha=${1}&colorName=${'some color'}`;
  return (
    <div className="container">
      <Header />
      <main>
        {'Testing App Links 🤘 '}
        <Link href={path} as={`${process.env.BACKEND_URL}${path}`}>
          <a>this page!</a>
        </Link>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
