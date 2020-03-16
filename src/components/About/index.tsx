import React, { useState, useEffect } from 'react';

import '../../styles/css/components/About.css';

const About = () => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 1500);
  }, []);

  return (
    <div id="about">
      <h1 className="about-name">Kamaal Farah</h1>
      {showTitle && <p className="about-paragraph">Swift/React Developer.</p>}
    </div>
  );
};

export default About;
