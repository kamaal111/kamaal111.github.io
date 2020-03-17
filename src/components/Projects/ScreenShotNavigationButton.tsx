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
    <div style={{ width: '48px', display: 'flex', alignItems: 'center' }}>
      {shown && (
        <button
          onClick={onClick}
          style={{
            backgroundColor: 'black',
            border: 'none',
            background: 'none',
          }}>
          <p style={{ color: 'white' }}>{text}</p>
        </button>
      )}
    </div>
  );
};

export default ScreenShotNavigationButton;
