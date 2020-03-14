import React from 'react';

import { projects } from '../../config';

import '../../styles/css/components/Projects.css';

const Projects = () => {
  return (
    <div id="projects">
      {projects.map(({ id, name, description, backgroundColor }) => {
        return (
          <div className="project" style={{ backgroundColor }} key={id}>
            <h1 className="project-name">{name}</h1>
            <p className="project-paragraph">{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
