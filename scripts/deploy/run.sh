#!/bin/sh

CURRENT_SCRIPT_PATH="scripts/deploy"
rm -rf node_modules/.cache out
yarn
yarn build
npx next export
mkdir out/.well-known
touch out/.nojekyll
node "$CURRENT_SCRIPT_PATH/cname.js"
node "$CURRENT_SCRIPT_PATH/appleAppSiteAssociation.js"
npx gh-pages -b gh-pages -d out