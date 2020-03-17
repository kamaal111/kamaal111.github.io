import React, { useState, Fragment, useEffect } from 'react';

import Availability from './Availability';
import ShowScreenShots from './ShowScreenShots';

import { projects } from '../../config';

import '../../styles/css/components/Projects.css';

const Projects = () => {
  const [projectShown, setProjectShown] = useState<number | null>(null);
  const [showProjects, setShowProjects] = useState(false);
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setShowProjects(true);
    }, 3000);
  }, []);

  if (!showProjects) return null;

  const projectOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
    event.preventDefault();
    if (projectShown !== id) {
      setProjectShown(id);
      setCurrentImage(0);
    } else {
      setProjectShown(null);
      setCurrentImage(null);
    }
  };

  return (
    <div id="projects">
      {projects.map(({ id, name, description, availability }) => {
        return (
          <Fragment key={id}>
            <button className={`project-${id}`} onClick={event => projectOnClick(event, id)}>
              <h2 className="project-name">{name}</h2>
              <p className="project-paragraph">{description}</p>
              {availability && <Availability availability={availability} />}
            </button>
            {availability !== null &&
              projectShown !== null &&
              projectShown === id &&
              currentImage !== null &&
              availability.map(({ link, screenShots }) => (
                <ShowScreenShots
                  key={link}
                  link={link}
                  screenShots={screenShots}
                  currentImage={currentImage}
                  setCurrentImage={setCurrentImage}
                />
              ))}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Projects;
