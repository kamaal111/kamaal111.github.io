const { promises: fs } = require('fs');

const build = require('../../build.json');

const main = async () => {
  try {
    await fs.writeFile(
      'build.json',
      JSON.stringify({ lastUpdate: Date(), build: build.build + 1 }, null, 2),
    );
  } catch (error) {
    console.error('error', error);
    throw error;
  }
};

main();
