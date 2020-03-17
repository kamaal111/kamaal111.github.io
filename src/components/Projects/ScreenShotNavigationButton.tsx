import React from 'react';

import '../../styles/css/components/Projects.css';

const ScreenShotNavigationButton = ({
  text,
  shown,
  onClick,
}: {
  text: string;
  shown: boolean;
  onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}) => {
  return (
    <div className="screen-shot-navigation">
      {shown && (
        <button className="screen-shot-navigation-button" onClick={onClick}>
          <p className="screen-shot-navigation-button-text">{text}</p>
        </button>
      )}
    </div>
  );
};

export default ScreenShotNavigationButton;
