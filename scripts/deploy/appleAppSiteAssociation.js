const { promises: fs } = require('fs');

const { apps } = require('../config');

const { appId: colorPickerAppId } = apps.ColorPicker;

const appleAppSiteAssociation = `{
  "applinks": {
    "details": [
      {
        "appIDs": [ "${colorPickerAppId}" ],
        "components": [
          {
            "/": "*"
          },
          {
            "/": "/colorselector/*",
            "?": { "edit": "?*" },
            "caseSensitive": false,
            "comment": "Should go to edit screen of Color Selector"
          }
        ]
      }
    ]
  },
  "webcredentials": {
    "apps": [ "${colorPickerAppId}" ]
  }
}`;

const exportAppleAppSiteAssociationFile = async () => {
  try {
    const exportPath = 'out/apple-app-site-association';
    await fs.writeFile(exportPath, appleAppSiteAssociation);
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

exportAppleAppSiteAssociationFile();
