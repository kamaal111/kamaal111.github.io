import React from 'react';

import { AvailabilityType } from '../../types';
import { punctuation } from '../../utils';

const Availability: React.FC<AvailabilityProps> = ({ availability }) => {
  return (
    <div className="availability">
      <strong className="availability-text">Availability: </strong>
      <br />
      <br />
      <div className="platforms">
        {availability.map(({ platform, link }, index) => {
          return (
            <React.Fragment key={platform}>
              <a href={link} target="_blank">{platform}</a>
              <span>
                {punctuation({ index, arrayLength: availability.length })}
              </span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

interface AvailabilityProps {
  availability: AvailabilityType[];
}

export default Availability;
