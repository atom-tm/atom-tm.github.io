#!/usr/bin/env sh
set -e
pushd $(dirname $0)/..
yarn build
cd dist
git init
git add -A
git commit -m 'Deploy to GitHub pages'
git push -f git@github.com:atom-tm/atom-tm.github.io.git master
popd
