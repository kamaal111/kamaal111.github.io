rm -rf node_modules/.cache 
npm run build
npx next export
touch out/.nojekyll
touch out/CNAME
echo \"kamaal111.github.io\" >> out/CNAME
# git add out/
# git commit -m \"Deploy Next.js to gh-pages\"
# git subtree push --prefix out origin gh-pages
gh-pages -b master -d build