import React from 'react';

import About from './About';
import Header from './Header';
import Footer from './Footer';
import Projects from './projects/Projects';

export default function HomeContent() {
  return (
    <div className="container">
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
