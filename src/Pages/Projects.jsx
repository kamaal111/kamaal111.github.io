import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Repositories from '../components/Repositories';
import Header from '../components/Header';

import { getRepos } from '../actions';

const Projects = ({ getRepos: getReposAction, repos }) => {
  useEffect(() => {
    getReposAction('kamaal111');
  }, [getReposAction]);

  return (
    <>
      <Header />
      {repos.allRepos === null ? <></> : <Repositories repos={repos.allRepos} />}
    </>
  );
};

const AllReposPropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

const ReposPropTypes = {
  allRepos: PropTypes.arrayOf(PropTypes.shape(AllReposPropTypes).isRequired),
};

Projects.propTypes = {
  repos: PropTypes.shape(ReposPropTypes).isRequired,
  getRepos: PropTypes.func.isRequired,
};

const mapStateToProps = ({ repos }) => ({ repos });

export default connect(
  mapStateToProps,
  { getRepos },
)(Projects);
