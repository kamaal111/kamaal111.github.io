import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../styles/css/Header.css';

const Header = () => (
  <div className="header">
    <Link to="/" id="header-name">
      Kamaal Farah
    </Link>
    <div className="header-right">
      <Link to="/" id="header-projects">
        Projects
      </Link>
      <Link to="/" id="header-contact">
        Contact
      </Link>
    </div>
  </div>
);

Header.propTypes = {};

export default Header;
