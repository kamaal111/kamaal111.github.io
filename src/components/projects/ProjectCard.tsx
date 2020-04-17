import React from 'react';

import Availability from './Availability';

import { AvailabilityType, TechUsed } from '../../types';

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  description,
  availability,
  techUsed,
}) => {
  return (
    <>
      <div className={`project-${id}`}>
        <h3 className="project-name">{name}</h3>
        <i className="project-paragraph">{description}</i>
        <div>
          <h4>Tech used:</h4>
          {techUsed.map(({ tech, reason }) => (
            <React.Fragment key={tech}>
              <p>
                {tech} - {reason}
              </p>
            </React.Fragment>
          ))}
        </div>
        {availability && <Availability availability={availability} />}
      </div>
      <br />
    </>
  );
};

interface ProjectCardProps {
  id: number;
  name: string;
  description: string;
  techUsed: TechUsed[];
  availability: AvailabilityType[] | null;
}

export default ProjectCard;
