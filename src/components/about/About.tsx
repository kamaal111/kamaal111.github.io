import React from 'react';

import { projects } from '../../config';
import { getUniquePlatforms } from '../../utils';

const About: React.FC<{}> = () => {
  const uniquePlatformsText = getUniquePlatforms();

  return (
    <div id="about">
      <h1 className="about-name">
        {'Welcome '}
        <span aria-label="put up hand" role="img">
          🙋‍♂️
        </span>
      </h1>
      <p>
        What theme do I use?
        <br />I call it bare-bone
        <span aria-label="glitter" role="img">
          ✨
        </span>
      </p>

      <h2 className="about-paragraph">Who am I?</h2>
      <p>
        {
          'I am Kamaal, a React Native developer on the jobby job at Tranzer, NL '
        }
        <span aria-label="dutch flag" role="img">
          🇳🇱
        </span>
        {' and love to play video games'}
        <span aria-label="game" role="img">
          👾
        </span>
        {' to relax.'}
      </p>

      <h2 className="about-paragraph">Things I do</h2>
      <p>{`I mostly write code for a living and enjoy building applications in my free time whenever I can. I have currently published ${projects.length} apps for ${uniquePlatformsText}`}</p>
    </div>
  );
};

export default About;
