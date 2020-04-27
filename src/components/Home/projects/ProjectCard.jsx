import React from 'react';

import TechUsedItem from './TechUsedItem';
import Availability from './Availability';

export default function ProjectCard({
  id,
  name,
  description,
  availability,
  techUsed,
}) {
  return (
    <>
      <div className={`project-${id}`}>
        <h3 className="project-name">{name}</h3>
        <i className="project-paragraph">{description}</i>
        <br />
        <br />
        <TechUsedItem techUsed={techUsed} />
        {availability && <Availability availability={availability} />}
      </div>
      <br />
    </>
  );
}
