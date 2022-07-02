#!/bin/sh

rm -rf public

hugo

touch public/.nojekyll

mkdir public/.well-known
node scripts/addAASAToStaticSite.js
