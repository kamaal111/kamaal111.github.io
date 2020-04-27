import React from 'react';

export default function TechUsedItem({ techUsed }) {
  return (
    <div>
      <strong>Tech used:</strong>
      {techUsed.map(({ tech, reason }) => (
        <p key={tech}>{`${tech} - ${reason}`}</p>
      ))}
    </div>
  );
}
