import React, { useState, Fragment, useEffect } from 'react';

import Availability from './Availability';

import { projects } from '../../config';

import '../../styles/css/components/Projects.css';

const Projects = () => {
  const [projectShown, setProjectShown] = useState<number | null>(null);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowProjects(true);
    }, 3000);
  }, []);

  const projectOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
    event.preventDefault();
    if (projectShown !== id) {
      setProjectShown(id);
    } else {
      setProjectShown(null);
    }
  };
  if (!showProjects) return null;
  return (
    <div id="projects">
      {projects.map(({ id, name, description, availability }) => {
        return (
          <Fragment key={id}>
            <button className={`project-${id}`} onClick={event => projectOnClick(event, id)}>
              <h2 className="project-name">{name}</h2>
              <p className="project-paragraph">{description}</p>
              <Availability availability={availability} />
            </button>
            {projectShown !== null && projectShown === id && <p className="project-preview">{name}</p>}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Projects;
