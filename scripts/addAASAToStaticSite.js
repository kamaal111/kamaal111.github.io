const fs = require("fs");

const DOMAIN_NAME = "kamaal.io";
const TEAM_IDENTIFIER = "DXUKH9VF73";

const COLOR_PICKER_ID = createAppId("ColorPicker");

const APPLE_APP_SITE_ASSOCIATION = {
  applinks: {
    details: [
      {
        appID: COLOR_PICKER_ID,
        components: [
          {
            "/": "/",
            caseSensitive: false,
            exclude: true,
            comment: "No link",
          },
          {
            "/": "/colorselector/*",
            caseSensitive: false,
            exclude: false,
            comment: "Should go to Color Selector",
          },
        ],
      },
    ],
  },
  webcredentials: {
    apps: [COLOR_PICKER_ID],
  },
  activitycontinuation: {
    apps: [COLOR_PICKER_ID],
  },
  appclips: {
    apps: [`${COLOR_PICKER_ID}.Clip`],
  },
};

function main() {
  exportAppleAppSiteAssociationFile();
}

async function exportAppleAppSiteAssociationFile() {
  const exportPath = "public/.well-known/apple-app-site-association";
  await fs.promises.writeFile(
    exportPath,
    JSON.stringify(APPLE_APP_SITE_ASSOCIATION, undefined, 2)
  );
}

function createAppId(appIDName) {
  const appIdDomainName = DOMAIN_NAME.split(".").reverse().join(".");
  const components = [TEAM_IDENTIFIER, appIdDomainName, appIDName];
  return components.join(".");
}

main();
