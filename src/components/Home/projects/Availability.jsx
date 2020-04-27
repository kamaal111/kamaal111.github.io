import React from 'react';

import { punctuation } from '../../../utils';

export default function Availability({ availability }) {
  return (
    <div className="availability">
      <strong className="availability-text">Availability: </strong>
      <br />
      <br />
      <div className="platforms">
        {availability.map(({ platform, link }, index) => (
          <React.Fragment key={platform}>
            <a href={link} rel="noopener noreferrer" target="_blank">
              {platform}
            </a>
            <span>
              {punctuation({
                index,
                arrayLength: availability.length,
              })}
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
