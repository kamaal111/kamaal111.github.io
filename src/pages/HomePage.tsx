import React from 'react';

import About from '../components/about/About';
import Projects from '../components/projects/Projects';
import CopyWrite from '../components/copy-write/CopyWrite';

const HomePage: React.FC<{}> = () => {
  return (
    <>
      <About />
      <Projects />
      <footer>
        <CopyWrite />
      </footer>
    </>
  );
};

export default HomePage;
