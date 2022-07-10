import * as React from 'react';
import Link from 'next/link';

import Page from '../../components/Page';

import routing from '../../../.kamaal/routing.json';

function Projects() {
  const sortedProjects = routing.projects
    .map((project) => ({
      ...project,
      date: new Date(project.date),
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <Page title="Projects">
      <>
        {sortedProjects.map(({ routesPath, title, date }) => (
          <Projects.Project
            key={routesPath}
            routesPath={routesPath}
            title={title}
            date={date}
          />
        ))}
      </>
    </Page>
  );
}

type ProjectProps = {
  date: Date;
  routesPath: string;
  title: string;
};

Projects.Project = function Project({ date, routesPath, title }: ProjectProps) {
  return (
    <div className="project">
      <span className="date">
        {date.toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </span>
      <div className="colored-links">
        <Link href={routesPath}>
          <h2>{title}</h2>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
