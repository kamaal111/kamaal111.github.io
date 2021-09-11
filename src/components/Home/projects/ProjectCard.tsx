import React from 'react';

import TechUsedItem from './TechUsedItem';
import Availability from './Availability';

import { Availability as AvailabilityType, TechUsed } from '../../../types';

function ProjectCard({
  id,
  name,
  description,
  availability,
  techUsed,
}: ProjectCardProps) {
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

type ProjectCardProps = {
  id: number;
  name: string;
  description: string;
  availability: AvailabilityType[];
  techUsed: TechUsed[];
};

export default ProjectCard;
