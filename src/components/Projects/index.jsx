import React from 'react';

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
            <div className="availability">
              <p className="availability-text">availability:</p>
              <div className="platforms">
                {availability.map(platform => {
                  return (
                    <p className="platform" key={platform}>
                      {platform}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
