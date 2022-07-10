import React from 'react';

import config from '../config';

function Footer() {
  return (
    <footer>
      <div>
        <p>{makeCopyWriteString()}</p>
      </div>
    </footer>
  );
}

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function makeCopyWriteString() {
  let duration: string;
  if (currentYear === config.since) duration = String(config.since);
  else duration = `${config.since}-${currentYear}`;

  return `Ⓒ ${duration} ${config.fullName}`;
}

export default Footer;
