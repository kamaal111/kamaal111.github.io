import React from 'react';

import Availability from './Availability';

import { AvailabilityType } from '../../types';

import '../../styles/css/components/Projects.css';

const ProjectCard = ({ animateCard, projectOnClick, id, name, description, availability }: ProjectCardProps) => {
  return (
    <button
      className={animateCard ? `project-${id}-slide-in` : `project-${id}`}
      onClick={event => projectOnClick({ event, id })}>
      <h2 className="project-name">{name}</h2>
      <p className="project-paragraph">{description}</p>
      {availability && <Availability availability={availability} />}
    </button>
  );
};

interface ProjectCardProps {
  animateCard: boolean;
  id: number;
  name: string;
  description: string;
  availability: AvailabilityType[] | null;
  projectOnClick({ event, id }: { event: React.MouseEvent<HTMLButtonElement, MouseEvent>; id: number }): void;
}

export default ProjectCard;
