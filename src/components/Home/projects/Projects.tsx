import React from 'react';

import ProjectCard from './ProjectCard';

import { projects } from '../../../config';

function Projects() {
  return (
    <div id="projects">
      <h2>Apps I have published</h2>
      {projects.map(({ id, name, description, availability, techUsed }) => (
        <React.Fragment key={id}>
          <ProjectCard
            id={id}
            name={name}
            description={description}
            availability={availability}
            techUsed={techUsed}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Projects;
