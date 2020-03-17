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
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <ScreenShotNavigationButton
        shown={currentImage > 0}
        text={'back'}
        onClick={event => {
          event.preventDefault();
          setCurrentImage(currentImage - 1);
        }}
      />
      <img
        src={screenShots[currentImage]}
        style={{ height: 320, width: 160, padding: 16 }}
        alt="screen shot of current app"
        onClick={event => {
          event.preventDefault();
          console.log(link);
        }}
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
