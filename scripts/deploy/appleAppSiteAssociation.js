const { promises: fs } = require('fs');

const { apps } = require('../config');

const { appId: colorPickerAppId } = apps.ColorPicker;

const colorPickerDetails = {
  appIDs: [colorPickerAppId],
  paths: [
    '*',
    // '/hallo'
  ],
  // components: [{ '/': ['*', '/hallo'] }],
};

const createAppleAppSiteAssociationJson = () => {
  const details = [colorPickerDetails];
  const applinks = { apps: [], details };
  const appleAppSiteAssociation = { applinks };
  const exportJson = JSON.stringify(appleAppSiteAssociation, null, 2);
  return exportJson;
};

const exportAppleAppSiteAssociationFile = async () => {
  try {
    const exportPath = 'out/.well-known/apple-app-site-association';
    const exportJson = createAppleAppSiteAssociationJson();
    await fs.writeFile(exportPath, exportJson);
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

exportAppleAppSiteAssociationFile();
