import { GET_REPOS } from '../actions';

const initialState = { allRepos: null };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_REPOS:
      return {
        ...state,
        allRepos: payload.filter(({ name }) => !['bb-herogame', 'mish-mash', 'react-assignment'].includes(name)),
      };

    default:
      return state;
  }
};
