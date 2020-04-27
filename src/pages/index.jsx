import React from 'react';

import About from '../components/Home/About';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import Projects from '../components/Home/projects/Projects';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
      {/* <style jsx>{``}</style>
      <style jsx global>{``}</style> */}
    </div>
  );
}
