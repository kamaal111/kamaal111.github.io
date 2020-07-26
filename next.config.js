// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const withCSS = require('@zeit/next-css');

const debug = process.env.NODE_ENV !== 'production';

module.exports = withCSS({
  exportPathMap: () => ({
    '/': { page: '/' },
    '/colorselector': { page: '/colorselector' },
    '/colorselector/edit': {
      page: '/colorselector/edit',
    },
  }),
  assetPrefix: !debug ? '/' : '',
});
