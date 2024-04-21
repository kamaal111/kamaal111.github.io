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
  const extraRoutes = await fs.promises.readFile('.kamaal/routing.json');
  const parsedExtraRoutes = Object.values(JSON.parse(extraRoutes))
    .flat(1)
    .reduce((acc, { routesPath, page, draft }) => {
      const isDraft = process.env.NODE_ENV !== 'development' && draft;
      if (routesPath == null || isDraft) return acc;
      return { ...acc, [routesPath]: { page } };
    }, {});

  const routes = {
    '/': { page: '/' },
    '/privacyterms': { page: '/privacyterms' },
    '/contact': { page: '/contact' },
    ...parsedExtraRoutes,
  };

  console.log('routes', routes);
  return routes;
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
