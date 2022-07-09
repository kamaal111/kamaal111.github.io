/* eslint-disable no-await-in-loop */
/* eslint-disable no-underscore-dangle */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentDirectoryName = 'content';
const contentPath = path.join(__dirname, '/..', contentDirectoryName);

async function main() {
  const result = await listPathContent(contentPath, {}, 10);
  console.log('result', result);
}

async function listPathContent(searchPath, files, maxDepth) {
  const newMaxDepth = maxDepth - 1;
  if (newMaxDepth === -1) return files;

  const directoryContent = await fs.promises.readdir(searchPath);

  let newFiles = files;
  for (let index = 0; index < directoryContent.length; index += 1) {
    const fileOrDirectoryName = directoryContent[index];
    const fileOrDirectoryPath = path.join(searchPath, fileOrDirectoryName);
    const fileOrDirectoryStat = await fs.promises.lstat(fileOrDirectoryPath);

    if (fileOrDirectoryStat.isDirectory()) {
      const directoryKey = fileOrDirectoryPath
        .split(contentPath)
        .at(-1)
        .slice(1);
      const newDirectoryContent = await listPathContent(
        fileOrDirectoryPath,
        { ...newFiles, [directoryKey]: [] },
        newMaxDepth,
      );

      newFiles = { ...newFiles, ...newDirectoryContent };
    } else {
      const parent = fileOrDirectoryPath
        .split(contentPath)
        .at(-1)
        .slice(1)
        .split('/')
        .slice(null, -1)
        .join('/');

      newFiles[parent].push({
        path: path.join(contentDirectoryName, parent),
        name: fileOrDirectoryName,
      });
    }
  }

  return newFiles;
}

main();
