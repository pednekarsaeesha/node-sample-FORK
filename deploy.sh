#! /bin/sh
git pull origin main
npm i --s
npx kill-port 3000
node index.js