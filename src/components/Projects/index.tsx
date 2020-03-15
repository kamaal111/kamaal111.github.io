import React from 'react';

import Availability from './Availability';

import { projects } from '../../config';

import '../../styles/css/components/Projects.css';

const Projects = () => {
  return (
    <div id="projects">
      {projects.map(({ id, name, description, backgroundColor, availability }) => {
        return (
          <div className="project" style={{ backgroundColor }} key={id}>
            <h2 className="project-name">{name}</h2>
            <p className="project-paragraph">{description}</p>
            <Availability availability={availability} />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
