#!/usr/bin/env bash

## NOTE:
# I'd rather install packages in blocks rather than in one big mass
# because of NPM's atomic nature. If it fails I want to get something
# installed rather than everything fail.
# This also makes it easier for me to troubleshoot where the problem is

echo -e "Starting NPM installations\n"

npm i -D gulp
npm i -D browser-sync connect-history-api-fallback
npm i -D gulp-sass gulp-postcss autoprefixer
npm i -D gulp-imagemin imagemin-webp imagemin-guetzli
npm i -D gulp-babel @babel/core @babel/preset-env gulp-sourcemaps
npm i -D eslint eslint-config-google
npm i -D del run-sequence gulp-ext-replace
npm i -D nunjucks-markdown marked gulp-rename nunjucks gulp-nunjucks
