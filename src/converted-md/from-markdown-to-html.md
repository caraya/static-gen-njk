<h1>Different Options for generating HTML from Markdown</h1>
<p><a href="https://en.wikipedia.org/wiki/Markdown">Markdown</a> is my favorite way to write.  It is lightweight, regquiring a few characters to convey the meaning of the text, it's supported in both many places, including Github and Wordpress (via Jetpack) so I don't need to change the way I write to publish in different places and it only needs a text editor to create (for me, so does HTML but that's another story). In this article we'll look at different ways to take Markdown input and convert it to HTML for web view.</p>
<h2>Markdown to HTML in a build process</h2>
<p>This process is part of the build for my writing process and covers both HTML and PDF generation from the same Markdown source.</p>
<p>I've created an HTML template to place the Markdown-produced HTML Inside of. It does three things:</p>
<ol>
<li>Defines the CSS that the document will load</li>
<li>Defines the document metadata: charset, viewport and title</li>
<li>Defines the container and the placeholder for the generated HTML</li>
<li>Defines the scripts we want the page to run at the bottom of the document. We could also place them on the head and use <code>defer</code> but we don't really need to</li>
</ol>
<pre><code class="language-html">&lt;html lang=&quot;en&quot; dir=&quot;ltr&quot; class=&quot;no-js lazy&quot;&gt;

&lt;head&gt;
  &lt;!-- 1 --&gt;
  &lt;link rel=&quot;stylesheet&quot; href=&quot;css/normalize.css&quot;&gt;
  &lt;link rel=&quot;stylesheet&quot; href=&quot;css/main.css&quot;&gt;
  &lt;link rel=&quot;stylesheet&quot; href=&quot;css/image-load.css&quot;&gt;
  &lt;link rel=&quot;stylesheet&quot; href=&quot;css/video-load.css&quot;&gt;
  &lt;link rel=&quot;stylesheet&quot; href=&quot;css/prism.css&quot;&gt;
  &lt;!-- 2 --&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
  &lt;title&gt;&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;!-- 3 --&gt;
&lt;article class=&quot;container&quot;&gt;
  &lt;%= contents %&gt;
&lt;/article&gt;
&lt;!-- 4 --&gt;
&lt;script src=&quot;scripts/lazy-load.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;scripts/vendor/clipboard.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;scripts/vendor/prism.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;scripts/vendor/fontfaceobserver.standalone.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;scripts/load-fonts.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;scripts/lazy-load-video.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>Before we run the build file we need to make sure that all the dependcies for <a href="https://gulpjs.com/">Gulp</a> are installed and updated. I'm lazy and haven't updated the code to work with Gulp 4.0 so I'm sticking to 3.9 for this example.</p>
<pre><code class="language-bash">npm install gulp@3.9.1 gulp-newer gulp-remarkable \
gulp-wrap gulp-exec remarkable
</code></pre>
<p>The first step is to load the plugins as we would in any other Gulp file or Node project</p>
<pre><code class="language-js">const gulp = require('gulp'); // Gulp
const newer = require('gulp-newer'); // Newer
const markdown = require('gulp-remarkable'); // Markdown plugin
const wrap = require('gulp-wrap'); // Wrap
const exec = require('gulp-exec'); // Exec
</code></pre>
<p>Then we define the first task, <code>markdown</code>, to generate HTML from our Markdown sources.</p>
<p>We take all the Markdown files and, if they are newer than files in the target directory, we run them through the <a href="https://github.com/jonschlinkert/remarkable">Remarkable</a> Gulp Plugin.</p>
<pre><code class="language-js">gulp.task('markdown', () =&gt; {
  return gulp.src('src/md-content/*.md')
    .pipe(newer('src/html-content/'))
    .pipe(markdown({
      preset: 'commonmark',
      typographer: true,
      remarkableOptions: {
        typographer: true,
        linkify: true,
        breaks: false,
      },
    }))
    .pipe(gulp.dest('src/html-content/'));
});
</code></pre>
<p>Remarkable doesn't generate full or well-formed docs, it just converts the Markdown into HTML and, since we don't have a well-formed HTML document in Markdown (not what it was designed for), we only get the body of the document.</p>
<p>To make it into a well-formed HTML document we need to put the Markdown inside an HTML document. We use the <code>gulp-wrap</code> plugin to do so. The result is that for each Markdown file we converted to HTML we now have a well-formed HTML document with links to stylesheets and scripts ready to be put in production.</p>
<pre><code class="language-js">gulp.task('build-template', ['markdown'], () =&gt; {
  gulp.src('./src/html-content/*.html')
    .pipe(wrap({src: './src/templates/template.html'}))
    .pipe(gulp.dest('./src/'));
});
</code></pre>
<h2>PDF? Why Not?</h2>
<p>We can use a similar technique to generate PDF files from our content. We'll leverage the same framework than we did for generating HTML with a different template and using third party tools.</p>
<p><em>We need to be careful not to insert HTML markup into the Markdown we want to use to generate PDF as the PDF generators tend to not be very happy with videos and, to my not very happy face, fail completely rather than ignoring the markup they don't understand.</em></p>
<p>The template is smaller as it doesn't require the same number of scripts and stylesheets.</p>
<p>Two things to note:</p>
<ul>
<li>We're using a different syntax highlighter (Highlight.js instead of Prism)</li>
<li>We chose not to add the stylesheet here</li>
</ul>
<pre><code class="language-html">&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
  &lt;link rel=&quot;stylesheet&quot; href=&quot;../paged-media/highlight/styles/solarized-light.css&quot;&gt;
  &lt;script src=&quot;../paged-media/highlight/highlight.pack.js&quot;&gt;&lt;/script&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,minimum-scale=1,maximum-scale=1&quot;&gt;
  &lt;title&gt;&lt;/title&gt;
&lt;/head&gt;

&lt;body data-type=&quot;article&quot;&gt;
&lt;div class=&quot;container&quot;&gt;
    &lt;%= contents %&gt;
&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>The first step is to create the HTML files using the appropriate template after we generate the HTML from the Markdown content.</p>
<pre><code class="language-js">gulp.task('build-pm-template', () =&gt; {
  gulp.src('./src/html-content/*.html')
    .pipe(wrap({src: './src/templates/template-pm.html'}))
    .pipe(gulp.dest('./src/pm-content'));
});
</code></pre>
<p>The next step is where the differences lie.  Instead of just generating the HTML and being done with it, we have to push the HTML through a CSS paged media processor.</p>
<p>I've used <a href="https://www.princexml.com/">PrinceXML</a> to generate PDF from multiple sources with different inputs (XML, HTML and XSL-FO) so we're sticking with it for this project.</p>
<p>I use a second stylesheet that has all the font definitions and styles for the document. I've made <a href="https://gist.github.com/caraya/8d12c8bbfb07681b4d5b56dfeecc88bc">article-styles.css</a> available as Github GIST</p>
<p>The final bit is how we run PrinceXML in the build process. I know that <code>gulp-exec</code> is not well liked in the Gulp community but none of the alternatives I've found don't do quite what I needed to, so <code>gulp-exec</code> it is.</p>
<p>The idea is that, for each file in the source directory, we run prince with the command given.</p>
<pre><code class="language-js">gulp.task('build-pdf', ['build-pm-template'], () =&gt; {
  return gulp.src('./src/pm-content/*.html')
    .pipe(newer('src/pdf/'))
    .pipe(exec('prince --verbose --input=html --javascript --style ./src/css/article-styles.css &lt;%= file.path %&gt; '))
    .pipe(exec.reporter());
});
</code></pre>
<p>So we've gone from Markdown to HTML and Markdown to PDF. A next step may be how we can populate Handlebar or Dust templates from our Markdown sources.</p>