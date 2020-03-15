import React from 'react';

import '../../styles/css/components/Projects.css';

const Availability = ({ availability }: { availability: string[] }) => {
  return (
    <div className="availability">
      <p className="availability-text">availability:</p>
      <div className="platforms">
        {availability.map(platform => {
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

export default Availability;
