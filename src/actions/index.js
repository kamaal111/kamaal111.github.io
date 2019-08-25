import { get } from 'superagent';

import urls from '../urls';

const { github } = urls;

export const GET_REPOS = 'GET_REPOS';

export const REPO_ERROR = 'REPO_ERROR';

export const getRepos = username => async dispatch => {
  try {
    const { body } = await get(`${github}/users/${username}/repos`);

    dispatch({ type: REPO_ERROR, payload: null });
    return dispatch({ type: GET_REPOS, payload: body });
  } catch (error) {
    return dispatch({ type: REPO_ERROR, payload: error });
  }
};
