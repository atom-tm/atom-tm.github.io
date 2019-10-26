@echo off
yarn build &&  ^
cd dist && ^
git init && ^
git add -A && ^
git commit -m 'Deploy' && ^
git push -f git@github.com:atom-tm/atom-tm.github.io.git master && ^
cd ..
