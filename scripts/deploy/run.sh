#!/bin/sh

CURRENT_SCRIPT_PATH="scripts/deploy"

time {
    rm -rf node_modules/.cache .next out
    yarn
    node "scripts/metadata.js"
    yarn build
    npx next export
    mkdir out/.well-known
    touch out/.nojekyll
    touch out/_next/.nojekyll
    touch out/_next/static/css/.nojekyll
    node "$CURRENT_SCRIPT_PATH/cname.js"
    node "$CURRENT_SCRIPT_PATH/appleAppSiteAssociation.js"
    npx gh-pages -b gh-pages -d out -t true
}
