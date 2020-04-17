import React from 'react';

import { AvailabilityType } from '../../types';

const Availability: React.FC<AvailabilityProps> = ({ availability }) => {
  return (
    <div className="availability">
      <h4 className="availability-text">Availability: </h4>
      <span className="platforms">
        {availability.map(({ platform, link }, index) => {
          let punctuation = '.';
          if (index === availability.length - 2) punctuation = ' and ';
          else if (index < availability.length - 1) punctuation = ', ';
          return (
            <React.Fragment key={platform}>
              <a href={link}>
                <span className="platform">{platform}</span>
              </a>
              <span>{punctuation}</span>
            </React.Fragment>
          );
        })}
      </span>
    </div>
  );
};

interface AvailabilityProps {
  availability: AvailabilityType[];
}

export default Availability;
