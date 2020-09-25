import React from 'react';

import About from './About';
import HomeHeader from './HomeHeader';
import Footer from '../Footer';
import Projects from './projects/Projects';

export default function HomeContent() {
  return (
    <div className="container">
      <HomeHeader />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
