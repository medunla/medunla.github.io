#!/usr/bin/env sh
# abort on errors
set -e
# build
yarn run build
# navigate into the build output directory
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/medunla/medunla.github.io.git master:gh-pages
cd -