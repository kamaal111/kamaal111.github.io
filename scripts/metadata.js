/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { performance } from 'perf_hooks';

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDirectoryName = 'content';
const contentPath = path.join(
  __dirname,
  '/..',
  'src',
  'pages',
  contentDirectoryName,
);

async function main() {
  const startTime = performance.now();

  const result = await listPathContent(contentPath, {}, 10);

  const jsonResult = JSON.stringify(result, null, 2);

  const checksum = crypto.createHash('sha1');
  checksum.update(jsonResult);
  const hash = checksum.digest('hex');

  const existingHashesPath = '.kamaal/hashes.json';
  const existingHashes = await fs.promises.readFile(existingHashesPath);
  const existingHashesJSON = JSON.parse(existingHashes);
  if (hash === existingHashesJSON.metadata) {
    console.log('No changes made');

    const endTime = performance.now();
    console.log(`Finished in ${(endTime - startTime).toFixed(4)} milliseconds`);
    return;
  }

  await Promise.all(
    [
      { data: jsonResult, filePath: '.kamaal/routing.json' },
      {
        data: JSON.stringify(
          { ...existingHashesJSON, metadata: hash },
          null,
          2,
        ),
        filePath: existingHashesPath,
      },
    ].map(({ data, filePath }) => {
      return fs.promises.writeFile(filePath, data);
    }),
  );

  console.log('Successfully wrote new metadata');

  const endTime = performance.now();
  console.log(`Finished in ${(endTime - startTime).toFixed(4)} milliseconds`);
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

    const directoryKey = fileOrDirectoryPath.split(contentPath).at(-1).slice(1);

    if (fileOrDirectoryStat.isDirectory()) {
      const newDirectoryContent = await listPathContent(
        fileOrDirectoryPath,
        { ...newFiles, [directoryKey]: [] },
        newMaxDepth,
      );

      newFiles = { ...newFiles, ...newDirectoryContent };
    } else {
      const configuration = await extractConfiguration(fileOrDirectoryPath);

      const parent = directoryKey.split('/').slice(null, -1).join('/');
      const nameWithoutExtension = fileOrDirectoryName
        .split('.')
        .slice(null, -1)
        .join('.');
      newFiles[parent].push({
        routesPath: `/${path.join(parent, nameWithoutExtension)}`,
        page: `/${path.join(
          contentDirectoryName,
          parent,
          nameWithoutExtension,
        )}`,
        name: fileOrDirectoryName,
        title: configuration.title,
        draft: configuration.draft,
      });
    }
  }

  return newFiles;
}

async function extractConfiguration(filePath) {
  const fileContent = await fs.promises.readFile(filePath);
  const fileContentLines = fileContent.toString().split('\n');

  const configurationStart = fileContentLines.findIndex(
    (line) => line === '---',
  );
  if (configurationStart === -1) return {};

  const configurationEnd = fileContentLines.findIndex(
    (line, index) => line === '---' && index !== configurationStart,
  );
  if (configurationEnd === -1) return {};

  const configuration = fileContentLines
    .slice(configurationStart + 1, configurationEnd)
    .reduce((acc, line) => {
      const splittedLine = line.split(':');
      let value = splittedLine.slice(1).join(':').trimStart();
      if (startsAndEndsWith(value, "'") || startsAndEndsWith(value, '"')) {
        value = value.slice(1, -1);
      } else if (['true', 'false'].includes(value)) {
        value = Boolean(value);
      }

      return {
        ...acc,
        [splittedLine[0]]: value,
      };
    }, {});

  return configuration;
}

function startsAndEndsWith(string, pattern) {
  return string.startsWith(pattern) && string.endsWith(pattern);
}

main();
