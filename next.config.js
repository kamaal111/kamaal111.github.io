/* eslint-disable no-underscore-dangle */
/** @type {import('next').NextConfig} */

import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeHighlight from 'rehype-highlight';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  exportPathMap,
  assetPrefix: '/',
  trailingSlash: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  webpack,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

async function exportPathMap(_defaultPathMap) {
  const routing = await fs.promises.readFile('.kamaal/routing.json');
  Object.values(Object.parse(routing))
    .flat(1)
    .reduce((acc, value) => {
      return { ...acc, [value.path]: { page: value.path } };
    }, {});
  return {
    '/': { page: '/' },
    '/privacyterms': { page: '/privacyterms' },
    '/contact': { page: '/contact' },
  };
}

function webpack(config, options) {
  config.module.rules.push({
    test: /\.mdx?$/,
    use: [
      options.defaultLoaders.babel,
      {
        loader: '@mdx-js/loader',
        options: {
          providerImportSource: '@mdx-js/react',
          remarkPlugins: [remarkFrontmatter],
          rehypePlugins: [rehypeHighlight],
        },
      },
    ],
  });

  return config;
}

export default nextConfig;
