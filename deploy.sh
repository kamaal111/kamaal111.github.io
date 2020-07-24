rm -rf node_modules/.cache 
npm run build
npx next export
mkdir out/.well-known
touch out/.nojekyll
touch out/CNAME
echo $'kamaal.io' >> out/CNAME
cp -R src/public/.well-known/apple-app-site-association out/apple-app-site-association
npx gh-pages -b master -d out