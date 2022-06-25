#!/bin/sh

rm -rf public

hugo -D

touch public/.nojekyll

mkdir public/.well-known
node scripts/addAASAToStaticSite.js
