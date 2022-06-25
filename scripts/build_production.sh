#!/bin/sh

rm -rf public

hugo --minify

touch public/.nojekyll

mkdir public/.well-known
node scripts/addAASAToStaticSite.js
