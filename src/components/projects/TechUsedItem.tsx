import React from 'react';

import { TechUsed } from '../../types';

const TechUsedItem: React.FC<TechUsedItemProps> = ({ techUsed }) => {
  return (
    <div>
      <strong>Tech used:</strong>
      {techUsed.map(({ tech, reason }) => (
        <p key={tech}>
          {tech} - {reason}
        </p>
      ))}
    </div>
  );
};

interface TechUsedItemProps {
  techUsed: TechUsed[];
}

export default TechUsedItem;
