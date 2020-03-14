import React, { useEffect, useState } from 'react';
import { get as getRequest } from 'superagent';

import Repositories from '../components/Repositories';

import { github } from '../urls';

const Projects = () => {
  const [repos, setRepos] = useState({ allRepos: null });
  const [reposError, setReposError] = useState(null);

  const getRepos = async username => {
    try {
      const { body } = await getRequest(`${github}/users/${username}/repos`);
      setRepos({ allRepos: body });
    } catch (error) {
      setReposError(error);
    }
  };

  useEffect(() => {
    getRepos('kamaal111');
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(reposError);
  }, [reposError]);

  return <>{repos.allRepos && <Repositories repos={repos.allRepos} />}</>;
};

Projects.propTypes = {};

export default Projects;
