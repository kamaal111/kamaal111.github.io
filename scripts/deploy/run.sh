#!/bin/sh

CURRENT_SCRIPT_PATH="scripts/deploy"
rm -rf node_modules/.cache
npm run build
npx next export
mkdir out/.well-known
touch out/.nojekyll
node "$CURRENT_SCRIPT_PATH/cname.js"
node "$CURRENT_SCRIPT_PATH/appleAppSiteAssociation.js"
npx gh-pages -b master -d out