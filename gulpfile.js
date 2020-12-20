/* eslint no-unused-vars: 0, max-len: 0, no-trailing-spaces: 0  */
'use strict';
// Require Gulp first
const gulp = require('gulp');
//  packageJson = require('./package.json'),
const del = require('del');
const extReplace = require('gulp-ext-replace');

// CSS stuff
const sass = require('node-sass');
// postcss
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// JS Stuff
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
// Imagemin and Plugins
const imagemin = require('gulp-imagemin');
// const mozjpeg = require('imagemin-mozjpeg');
const webp = require('imagemin-webp');

// Static Web Server stuff
const browserSync = require('browser-sync');
// const reload = browserSync.reload;
const historyApiFallback = require('connect-history-api-fallback');

// Nunjucks and Markdown
const nunjucks = require('nunjucks');
const markdown = require('nunjucks-markdown');
const marked = require('marked');
const gulpnunjucks = require('gulp-nunjucks');
const grayMatter = require('gulp-gray-matter');

// Nunjucks consts for file location
const dist = 'docs';
const src = 'src';
const templates = src + '/templates';
const content = src + '/pages';

// Where to pull files from?
const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(templates));

// Markdown options
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true,
});

markdown.register(env, marked);

gulp.task('renderContent', function() {
  return gulp.src(content + '/**/*.md')
      .pipe(grayMatter())
      .pipe(gulpnunjucks.compile('', {env: env}))
      .pipe(extReplace('.html'))
      .pipe(gulp.dest('docs'));
});


// SCSS conversion and CSS processing
/**
 * @name sass
 * @description SASS conversion task to produce development css with expanded syntax.
 *
 * We run this task agains Ruby SASS, not lib SASS. As such it requires the SASS Gem to be installed
 *
 * @see {@link http://sass-lang.com|SASS}
 * @see {@link http://sass-compatibility.github.io/|SASS Feature Compatibility}
 */
gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.scss')
      .pipe(sass({
        sourcemap: true,
        style, expanded,
      })
          .on('error', sass.logError))
      .pipe(gulp.dest('./css'));
});

/**
 * @name processCSS
 *
 * @description Run autoprefixer on the CSS files under src/css
 *
 * Moved from gulp-autoprefixer to postcss. It may open other options in the future
 * like cssnano to compress the files
 *
 * @see {@link https://github.com/postcss/autoprefixer|autoprefixer}
 */
gulp.task('processCSS', function() {
  // What processors/plugins to use with PostCSS
  const PROCESSORS = [
    autoprefixer(),
  ];
  return gulp.src('src/css/**/*.css')
      .pipe(sourcemaps.init())
      .pipe(postcss(PROCESSORS))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('docs/css'));
});

/**
 * @name babel
 * @description Transpiles ES6 to ES5 using Babel. As Node and browsers support more of the spec natively this will move to supporting ES2016 and later transpilation
 *
 * It requires the `@babel/core`, and `@babel/preset-env`
 *
 * @see {@link http://babeljs.io/|Babel}
 * @see {@link http://babeljs.io/docs/learn-es2015/|Learn ES2015}
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/|ECMAScript 2015 specification}
 */
gulp.task('babel', function() {
  return gulp.src('src/es6/**/*.js')
      .pipe($.sourcemaps.init())
      .pipe($.babel({
        presets: ['@babel/preset-env'],
      }))
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest('src/js/'));
});

/**
 * @name imagemin
 * @description Reduces image file sizes. Doubly important if we'll choose to play with responsive images.
 *
 * Imagemin will compress jpg (using mozilla's mozjpeg), SVG (using SVGO) GIF, WebP and PNG images but WILL NOT create multiple versions for use with responsive images
 *
 * @see {@link processImages}
 */
gulp.task('imagemin', function() {
  return gulp.src('src/images/**/*')
      .pipe(imagemin([
        imagemin.gifsicle({
          interlaced: true,
        }),
        imagemin.optipng({
          optimizationLevel: 5,
        }),
        imagemin.svgo({
          plugins: [{removeViewBox: true},
            {cleanupIDs: false},
          ],
        }),
        webp({
          quality: 80,
        }),
      ]))
      .pipe(gulp.dest('docs/images'));
});

/**
 * @name clean
 * @description deletes specified files
 */
gulp.task('clean', function() {
  return del([
    'docs/',
    'src/converted-md/*.{html, md}',
  ]);
});

gulp.task('copy', function() {
  return gulp.src([
    'src/scripts/**/*.js',
  ])
      .pipe(gulp.dest('docs/scripts'));
});

gulp.task('serve', function() {
  browserSync({
    port: 2509,
    notify: false,
    snippetOptions: {
      rule: {
        match: '<span id="browser-sync-binding"></span>',
        fn: (snippet) => {
          return snippet;
        },
      },
    },
    server: {
      baseDir: ['.tmp', 'docs'],
      middleware: [historyApiFallback()],
    },
  });
});

/**
 * @name default
 * @description uses clean, processCSS, build-template, imagemin and copy to build the HTML content from Markdown source
 */
gulp.task('default', gulp.series('clean', 'processCSS', 'renderContent', 'imagemin', 'copy'));
