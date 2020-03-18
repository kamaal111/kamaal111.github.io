import React from 'react';

import About from '../components/about/About';
import Projects from '../components/projects/Projects';
import CopyWrite from '../components/copy-write/CopyWrite';

const HomePage = () => {
  return (
    <>
      <About />
      <Projects />
      <CopyWrite />
    </>
  );
};

export default HomePage;
