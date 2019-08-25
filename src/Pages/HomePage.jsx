import React from 'react';
// import PropTypes from 'prop-types';

import Header from '../components/Header';

const HomePage = () => {
  // const testRef = useRef(null);
  // const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
  // const executeScroll = () => scrollToRef(testRef);

  return (
    <>
      <Header />
      {/* <div ref={testRef}>I wanna be seen</div>
      <button type="button" onClick={executeScroll}>
        {' '}
        Click to scroll{' '}
      </button> */}
      <br style={{ lineHeight: '1000px' }} />
      <p>text</p>
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
