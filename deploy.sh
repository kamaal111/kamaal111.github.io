rm -rf node_modules/.cache 
npm run build
npx next export
touch out/.nojekyll
touch out/CNAME
echo kamaal111.github.io >> out/CNAME
npx gh-pages -b master -d out