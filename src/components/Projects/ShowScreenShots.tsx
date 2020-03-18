import React from 'react';

import ScreenShotNavigationButton from './ScreenShotNavigationButton';

import '../../styles/css/components/Projects.css';

const ShowScreenShots = ({
  screenShots,
  link,
  currentImage,
  setCurrentImage,
}: {
  screenShots: string[];
  link: string;
  currentImage: number;
  setCurrentImage: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <div className="shown-screen-shot">
      <ScreenShotNavigationButton
        shown={currentImage > 0}
        text={'back'}
        onClick={event => {
          event.preventDefault();
          setCurrentImage(currentImage - 1);
        }}
      />
      <img
        className="screen-shot"
        src={screenShots[currentImage]}
        alt="screen shot of current app"
        onClick={_event => window.open(link, '_blank')}
      />
      <ScreenShotNavigationButton
        shown={currentImage < screenShots.length - 1}
        text={'forward'}
        onClick={event => {
          event.preventDefault();
          setCurrentImage(currentImage + 1);
        }}
      />
    </div>
  );
};

export default ShowScreenShots;
