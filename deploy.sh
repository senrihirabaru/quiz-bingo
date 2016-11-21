#!/bin/sh

DST_DIR="/var/www/html/quiz-bingo/"

mkdir tmp
cp -rf src/* tmp/
cd tmp
sed -i -e "s/^.*console\.log.*$//" js/*.js
rm -rf $DST_DIR/*
cp -rf * $DST_DIR
chown -R apache:apache $DST_DIR
cd ..
rm -rf tmp