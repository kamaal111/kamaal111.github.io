import React from 'react';

import { copyWrite } from '../config';

function Footer() {
  return (
    <footer>
      <div id="copy-write">
        <p className="copy-write-text">{copyWrite}</p>
      </div>
    </footer>
  );
}

export default Footer;
