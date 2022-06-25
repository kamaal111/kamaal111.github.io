#!/bin/sh

rm -rf public

hugo --minify

mkdir public/.well-known
touch public/.nojekyll

node scripts/addAASAToStaticSite.js
