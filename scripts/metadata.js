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
const contentPath = path.join(__dirname, '/..', 'public', contentDirectoryName);

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
    newFiles = await updateFiles({
      searchPath,
      name: fileOrDirectoryName,
      files: newFiles,
      depth: newMaxDepth,
    });
  }

  return newFiles;
}

async function updateFiles({ searchPath, name, files, depth }) {
  const fileOrDirectoryPath = path.join(searchPath, name);
  const fileOrDirectoryStat = await fs.promises.lstat(fileOrDirectoryPath);

  const directoryKey = fileOrDirectoryPath.split(contentPath).at(-1).slice(1);

  if (fileOrDirectoryStat.isDirectory()) {
    const newDirectoryContent = await listPathContent(
      fileOrDirectoryPath,
      { ...files, [directoryKey]: [] },
      depth,
    );

    return { ...files, ...newDirectoryContent };
  }

  const parent = directoryKey.split('/').slice(null, -1).join('/');

  const file = await makeFile({
    name,
    parent,
    filePath: fileOrDirectoryPath,
  });

  return { ...files, [parent]: [...files[parent], file] };
}

async function makeFile({ name, parent, filePath }) {
  const { title, draft, date, externalLink, featuredImage } =
    await extractConfiguration(filePath);

  const baseFile = {
    name,
    title,
    draft,
    date,
    featuredImage,
  };

  if (externalLink == null) {
    const nameWithoutExtension = name.split('.').slice(null, -1).join('.');
    const routesPath = path.join(parent, nameWithoutExtension);

    return {
      ...baseFile,
      routesPath: `/${routesPath}`,
      page: `/${parent}`,
      query: nameWithoutExtension,
    };
  }

  return { ...baseFile, externalLink };
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
      } else if (value === 'false') {
        value = false;
      } else if (value === 'true') {
        value = true;
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
