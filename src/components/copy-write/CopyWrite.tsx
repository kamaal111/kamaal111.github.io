import React from 'react';

import { copyWrite } from '../../config';

const CopyWrite: React.FC<{}> = () => {
  return (
    <div id="copy-write">
      <p className="copy-write-text">{copyWrite}</p>
    </div>
  );
};

export default CopyWrite;
