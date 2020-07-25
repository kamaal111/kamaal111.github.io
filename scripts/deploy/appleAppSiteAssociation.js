const { promises: fs } = require('fs');

const { apps } = require('../config');

const main = async () => {
  try {
    const colorPickerAppId = apps.ColorPicker.appId;
    const appleAppSiteAssociation = {
      applinks: {
        apps: [],
        details: [
          {
            appIDs: [colorPickerAppId],
            paths: ['*'],
          },
        ],
      },
    };
    await fs.writeFile(
      'out/.well-known/apple-app-site-association',
      JSON.stringify(appleAppSiteAssociation, null, 2),
    );
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

main();
