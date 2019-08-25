import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/components/Header.css';

export default () => (
  <div className="header">
    <Link to="/" id="header-name">
      Kamaal Farah
    </Link>
    <div className="header-right">
      <Link to="/projects" id="header-projects">
        Projects
      </Link>
      <Link to="/" id="header-contact">
        Contact
      </Link>
    </div>
  </div>
);
