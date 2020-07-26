#!/bin/sh

CURRENT_SCRIPT_PATH="scripts/deploy"
rm -rf node_modules/.cache out
node "$CURRENT_SCRIPT_PATH/build.js"

npm run build
npx next export
mkdir out/.well-known
touch out/.nojekyll
npx gh-pages -b master -d out