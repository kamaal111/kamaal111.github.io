/* eslint-disable no-underscore-dangle */
/** @type {import('next').NextConfig} */

import path from 'path';
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

function exportPathMap(_defaultPathMap) {
  return {
    '/': { page: '/' },
    '/projects': { page: '/projects' },
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
