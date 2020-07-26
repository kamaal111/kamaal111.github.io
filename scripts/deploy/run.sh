#!/bin/sh

CURRENT_SCRIPT_PATH="scripts/deploy"
rm -rf node_modules/.cache
node "$CURRENT_SCRIPT_PATH/build.js"
npm run build
npx next export
mkdir out/.well-known
touch out/.nojekyll
node "$CURRENT_SCRIPT_PATH/cname.js"
node "$CURRENT_SCRIPT_PATH/appleAppSiteAssociation.js"
# cp -R src/public/apple-app-site-association out/apple-app-site-association
npx gh-pages -b master -d out