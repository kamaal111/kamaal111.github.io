import React, { useState, Fragment, useEffect } from 'react';

import ProjectCard from './ProjectCard';
import ShowScreenShots from './ShowScreenShots';

import { projects } from '../../config';

import '../../styles/css/components/Projects.css';

const Projects = () => {
  const [projectShown, setProjectShown] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState<number | null>(null);
  const [animateCard, setAnimateCard] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateCard(true);
    }, 3000);
  }, []);

  const projectOnClick = ({ event, id }: { event: React.MouseEvent<HTMLButtonElement, MouseEvent>; id: number }) => {
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
            <ProjectCard
              animateCard={animateCard}
              projectOnClick={projectOnClick}
              id={id}
              name={name}
              description={description}
              availability={availability}
            />
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
