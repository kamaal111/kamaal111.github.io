const domainName = 'kamaal.io';
const teamIdentifier = 'DXUKH9VF73';

const colorSelectorIDName = 'ColorPicker';

const createAppId = (appIDName) => {
  const appIdDomainName = domainName.split('.').reverse().join('.');
  const components = [teamIdentifier, appIdDomainName, appIDName];
  return components.join('.');
};

const apps = {
  ColorPicker: {
    name: colorSelectorIDName,
    appId: createAppId(colorSelectorIDName),
  },
};

module.exports = {
  domainName,
  teamIdentifier,
  apps,
};
