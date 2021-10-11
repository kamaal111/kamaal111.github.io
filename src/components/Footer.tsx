import React from 'react';

import { copyWrite } from '../config';

function Footer() {
  return (
    <footer>
      <div style={{ marginLeft: 16, marginRight: 16 }}>
        <p>{copyWrite}</p>
      </div>
    </footer>
  );
}

export default Footer;
