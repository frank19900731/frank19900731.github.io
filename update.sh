#!/bin/bash

rake generate
./lunr-parse.sh
rake deploy
git add .
git commit -m "update files"
git push origin source
git push gitlab source
cd _deploy
git push gitlab master
