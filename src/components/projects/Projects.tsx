import React, { Fragment } from 'react';

import ProjectCard from './ProjectCard';

import { projects } from '../../config';

const Projects: React.FC<{}> = () => {
  return (
    <div id="projects">
      <h2>Apps I have published</h2>
      {projects.map(({ id, name, description, availability, techUsed }) => {
        return (
          <Fragment key={id}>
            <ProjectCard
              id={id}
              name={name}
              description={description}
              availability={availability}
              techUsed={techUsed}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Projects;
