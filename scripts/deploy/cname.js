import fs from 'fs';

import config from '../config.js';

const main = async () => {
  try {
    await fs.promises.writeFile('out/CNAME', config.domainName);
  } catch (error) {
    console.error('error', error);
    throw error;
  }
};

main();
