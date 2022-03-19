const { promises: fs } = require('fs');

const { apps } = require('../config');

const { appId: colorPickerAppId } = apps.ColorPicker;

const appleAppSiteAssociation = {
  applinks: {
    details: [
      {
        appIDs: [colorPickerAppId],
        paths: ['/', '/colorselector*'],
        components: [
          {
            '/': '/',
            caseSensitive: false,
            exclude: true,
            comment: 'No link',
          },
          {
            '/': '/colorselector/edit?*',
            caseSensitive: false,
            exclude: false,
            comment: 'Should go to edit screen in Color Selector',
          },
          {
            '/': '/colorselector*',
            caseSensitive: false,
            exclude: false,
            comment: 'Should go to Color Selector',
          },
        ],
      },
    ],
  },
  webcredentials: {
    apps: [colorPickerAppId],
  },
  appclips: {
    apps: [`${colorPickerAppId}.Clip`],
  },
};

const exportAppleAppSiteAssociationFile = async () => {
  const exportPath = 'out/apple-app-site-association';
  await fs.writeFile(
    exportPath,
    JSON.stringify(appleAppSiteAssociation, undefined, 2),
  );
};

exportAppleAppSiteAssociationFile();
