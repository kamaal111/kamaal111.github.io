import * as React from 'react';

import Page from '../../components/Page';

import routing from '../../../.kamaal/routing.json';

function Projects() {
  return (
    <Page>
      {routing.projects.map(({ routesPath, title }) => {
        return <h1 key={routesPath}>{title}</h1>;
      })}
    </Page>
  );
}

export default Projects;
