/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  exportPathMap: async (_defaultPathMap) => ({
    '/': { page: '/' },
    '/privacyterms': { page: '/privacyterms' },
    '/contact': { page: '/contact' },
  }),
  assetPrefix: '/',
  trailingSlash: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
