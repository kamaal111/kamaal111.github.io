const { promises: fs } = require('fs');

const { apps } = require('../config');

const main = async () => {
  try {
    const { appId: colorPickerAppId } = apps.ColorPicker;
    const colorPickerDetails = {
      appID: colorPickerAppId,
      paths: ['/hello/*'],
      // components: [{ '/': '/hello' }],
    };
    const appleAppSiteAssociation = {
      applinks: {
        details: [colorPickerDetails],
      },
    };
    const exportPath = 'out/apple-app-site-association';
    const exportJson = JSON.stringify(appleAppSiteAssociation, null, 2);
    await fs.writeFile(exportPath, exportJson);
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

main();
