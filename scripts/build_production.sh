#!/bin/sh

rm -rf public

hugo -D

mkdir public/.well-known

echo "kamaal.io" >> public/CNAME
node scripts/addAASAToStaticSite.js
