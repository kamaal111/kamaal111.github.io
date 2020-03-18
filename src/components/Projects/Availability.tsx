import React from 'react';

import { AvailabilityType } from '../../types';

import '../../styles/css/components/Projects.css';

const Availability = ({ availability }: AvailabilityProps) => {
  return (
    <div className="availability">
      <p className="availability-text">availability:</p>
      <div className="platforms">
        {availability.map(({ platform, link }) => {
          return (
            <p className="platform" key={platform}>
              {platform}
            </p>
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
