import React from 'react';
import PropTypes from 'prop-types';

const Repositories = ({ repos }) => (
  <table className="repositories">
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Language</th>
        <th>Created At</th>
        <th>Size (kb)</th>
        <th>Stars</th>
      </tr>
    </thead>
    <tbody>
      {repos.map(
        ({
          id,
          name,
          html_url: htmlUrl,
          description,
          language,
          created_at: createdAt,
          size,
          stargazers_count: startgazersCount,
        }) => (
          <tr key={id}>
            <td>
              <a href={htmlUrl}>{name}</a>
            </td>
            <td>{description}</td>
            <td>{language}</td>
            <td>{createdAt}</td>
            <td>{size}</td>
            <td>{startgazersCount}</td>
          </tr>
        ),
      )}
    </tbody>
  </table>
);

Repositories.defaultProps = {
  repos: null,
};

const AllReposPropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

Repositories.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape(AllReposPropTypes).isRequired),
};

export default Repositories;
