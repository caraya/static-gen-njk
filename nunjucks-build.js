const gulp = require('gulp');
const nunjucks = require('nunjucks');
const markdown = require('nunjucks-markdown');
const marked = require('marked');
// const rename = require('gulp-rename');
const gulpnunjucks = require('gulp-nunjucks');


const dist = 'docs';
const src = 'src';
const templates = src + '/partials';


const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(templates));

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

gulp.task('pages', function() {
  return gulp.src([templates + '/*.html', templates + '/**/*.html'])
      // Renders template with nunjucks and marked
      .pipe(gulpnunjucks.compile('', {env: env}))
      // Uncomment the following if your source pages
      // are something other than *.html.
      // .pipe(rename(function (path) { path.extname=".html" }))
      .pipe(gulp.dest(dist));
});
