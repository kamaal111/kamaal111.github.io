const { promises: fs } = require('fs');

const { apps } = require('../config');

const { appId: colorPickerAppId } = apps.ColorPicker;
const colorPickerDetails = {
  appID: colorPickerAppId,
  // paths: ['/hallo'],
  components: [{ '/': '/hallo' }],
};
const details = [colorPickerDetails];
const applinks = { details };

const main = async () => {
  try {
    const appleAppSiteAssociation = { applinks };
    const exportPath = 'out/.well-known/apple-app-site-association';
    const exportJson = JSON.stringify(appleAppSiteAssociation, null, 2);
    await fs.writeFile(exportPath, exportJson);
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

main();
