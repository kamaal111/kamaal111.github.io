import * as React from 'react';

import Page from '../../components/Page';
import AppLink from '../../components/AppLink';

import routing from '../../../.kamaal/routing.json';
import type { Project as ProjectType } from '../../types';

function Projects() {
  const sortedProjects = (routing.projects as ProjectType[])
    .filter(
      (project) => project.routesPath != null || project.externalLink != null,
    )
    .map((project) => ({
      ...project,
      hasExternalLink: project.externalLink != null,
      date: new Date(project.date),
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <Page title="Projects">
      <>
        {sortedProjects.map(
          ({ routesPath, externalLink, title, date, hasExternalLink }) => {
            const link = routesPath ?? externalLink!;

            return (
              <Projects.Project
                key={link}
                link={link}
                title={title}
                date={date}
                isExternalLink={hasExternalLink}
              />
            );
          },
        )}
      </>
    </Page>
  );
}

type ProjectProps = {
  date: Date;
  link: string;
  title: string;
  isExternalLink: boolean;
};

Projects.Project = function Project({
  date,
  link,
  title,
  isExternalLink,
}: ProjectProps) {
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
        <AppLink isExternalLink={isExternalLink} link={link}>
          <h2>{title}</h2>
        </AppLink>
      </div>
    </div>
  );
};

export default Projects;
