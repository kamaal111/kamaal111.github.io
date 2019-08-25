import React from 'react';

import Header from '../components/Header';
import About from '../components/About';

export default () => {
  // const testRef = useRef(null);
  // const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
  // const executeScroll = () => scrollToRef(testRef);

  return (
    <>
      <Header />
      <About />
    </>
  );
};
