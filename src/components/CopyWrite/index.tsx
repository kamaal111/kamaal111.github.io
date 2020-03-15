import React from 'react';

import { copyWrite } from '../../config';

import '../../styles/css/components/CopyWrite.css';

const CopyWrite = () => {
  return (
    <div id="copy-write">
      <p className="copy-write-text">{copyWrite}</p>
    </div>
  );
};

export default CopyWrite;
