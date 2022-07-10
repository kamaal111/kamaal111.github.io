import * as React from 'react';
import Link from 'next/link';

import Page from '../../components/Page';

import routing from '../../../.kamaal/routing.json';

function Projects() {
  return (
    <Page title="Projects">
      <>
        {routing.projects.map(({ routesPath, title, date }) => (
          <div className="project" key={routesPath}>
            <span className="date">{date}</span>

            <div className="colored-links">
              <Link href={routesPath}>
                <h2>{title}</h2>
              </Link>
            </div>
          </div>
        ))}
      </>
    </Page>
  );
}

export default Projects;
