#!/bin/sh

CURRENT_SCRIPT_PATH="scripts/deploy"
rm -rf node_modules/.cache out
npm i
npm run build
npx next export
mkdir out/.well-known
touch out/.nojekyll
node "$CURRENT_SCRIPT_PATH/cname.js"
git config user.name "kamaal111" && git config user.email "kamaal.f1@gmail.com"
npx gh-pages -b master -d out