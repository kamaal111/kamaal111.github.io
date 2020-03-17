import React, { useState, Fragment, useEffect } from 'react';

import Availability from './Availability';

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

  const ShowScreenShots = ({ screenShots, link, id }: { screenShots: string[]; link: string; id: number }) => {
    if (projectShown === null || projectShown !== id || currentImage === null) return null;
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '48px', display: 'flex', alignItems: 'center' }}>
          {currentImage > 0 && (
            <button
              onClick={event => {
                event.preventDefault();
                setCurrentImage(currentImage - 1);
              }}
              style={{
                backgroundColor: 'black',
                border: 'none',
                background: 'none',
              }}>
              <p style={{ color: 'white' }}>back</p>
            </button>
          )}
        </div>

        <img
          src={screenShots[currentImage]}
          style={{ height: 320, width: 160, padding: 16 }}
          alt="screen shot of iron buddy"
          onClick={event => {
            event.preventDefault();
            console.log(link);
          }}
        />

        <div style={{ width: '48px', display: 'flex', alignItems: 'center' }}>
          {currentImage < screenShots.length - 1 && (
            <button
              onClick={event => {
                event.preventDefault();
                setCurrentImage(currentImage + 1);
              }}
              style={{
                backgroundColor: 'black',
                border: 'none',
                background: 'none',
              }}>
              <p style={{ color: 'white' }}>forward</p>
            </button>
          )}
        </div>
      </div>
    );
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
            {availability &&
              availability.map(({ link, screenShots }) => (
                <ShowScreenShots key={link} link={link} screenShots={screenShots} id={id} />
              ))}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Projects;
