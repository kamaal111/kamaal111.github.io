#!/bin/sh

rm -rf public

hugo --minify

mkdir public/.well-known

node scripts/addAASAToStaticSite.js
