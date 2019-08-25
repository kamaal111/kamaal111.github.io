import { REPO_ERROR } from '../actions';

const initialState = {
  repos: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REPO_ERROR:
      return { ...state, repos: payload };

    default:
      return state;
  }
};
