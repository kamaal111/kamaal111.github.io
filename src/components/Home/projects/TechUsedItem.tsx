import React from 'react';

import { TechUsed } from '../../../types';

function TechUsedItem({ techUsed }: TechUsedItemProps) {
  return (
    <div>
      <strong>Tech used:</strong>
      {techUsed.map(({ tech, reason }) => (
        <p key={tech}>{`${tech} - ${reason}`}</p>
      ))}
    </div>
  );
}

type TechUsedItemProps = {
  techUsed: TechUsed[];
};

export default TechUsedItem;
