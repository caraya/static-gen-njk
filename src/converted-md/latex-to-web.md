<h1>Using Latex to build web content</h1>
<p>Latex is an old-school language for document typesetting. It was created by Donald Knuth to typeset his book The Art of Computer Science. You still see LaTex in scientific articles and papers</p>
<p>If you're only familiar with HTML, Latex syntax will look strange. Rather than tags and attributes  we have a preamble, package declarations and intructions.</p>
<p>A basic LaTex article, set to print in portrait mode with a body text size of 12 points looks like this:</p>
<pre><code class="language-tex">\usepackage{amssymb}
\usepackage{epstopdf}
% Broken into two lines for readability. In production
% the command would go in one line
\DeclareGraphicsRule{.tif}{png}{.png}
{`convert #1 `dirname #1`/`basename #1 .tif`.png}

\title{Brief Article}
\author{The Author}
%\date{}
% Activate to display a given date or no date

\begin{documen
\maketitle
\section{}
\subsection{}
\end{document}
</code></pre>
<p><code>documentclass</code> indicates what type of document we want to creaate the parameters  (font size in this case) is in square brackets <code>[]</code></p>
<p><code>\usepackage{}</code> loads modules for use into the document</p>
<p>Commands that start with a backslash, like <code>\geometry{}</code> and <code>\DeclareGraphhicsRule{}</code> are instructions that will generate output of some kind for the document.</p>
<h2>Converting Latex to HTML</h2>
<p>I like LaTex but I'm still a fan of the web and I want to make sure that whatever I create in LaTex is also available on the web, assuming the publisher allows me to :)</p>
<p>There are two ways to create HTML content from LaTex files. The first one is <code>tex4ht</code> or <code>htlatex</code> and the second one is <code>make4ht</code>, an abstraction on top of tex4ht that simplifies adding options to the different pieces of the configuration.</p>
  <p>The rest of the article uses the tex file from <a href="https://gist.github.com/caraya/69a45d08d03214d78779a7d0a60da083">this gist</a> as the source for the commands.</p>
<div class="message info">
</div>
<h3>tex4ht</h3>
<p>tex4ht converts LaTex sources into one or more HTML documents with a very (and I mean very) basic style sheet that you can customize and expand as needed.</p>
<p>The most basic command will create a single page for all the content along with the corresponding image</p>
<pre><code class="language-bash">htlatex article.tex
</code></pre>
<p>For shorter articlles the single-file approach may be ok (with customized styles) but for larger files or articles with larger sections it may prove harder to read online.</p>
<p>We can break the arcile down into multiple files based on the headings on the document.</p>
<p>The example below will generate mutliple files and it will also generate navigation links within the pages of the document.</p>
<p>The styles, as with the previous document can definitely be enchanced.</p>
<pre><code class="language-bash">htlatex article.tex &quot;html,index=2,3,next&quot;
</code></pre>
<p>For those interested, you can also convert your LaTex to Docbook 5.0. While you can also convert it to TEI, it fails to convert the file successfully and I'm not certain why as the document converts succesfully to Docbook.</p>
<pre><code class="language-bash"># Conversion to Docbook
htlatex article.tex &quot;xhtml,docbook&quot; &quot; -cunihtf&quot; &quot;-cdocbk&quot;
# Conversion to TEI
htlatex article.tex &quot;xhtml,tei&quot; &quot; -cunihtf&quot; &quot;-cdocbk&quot;
</code></pre>
<h3>make4ht</h3>
<p>As we've discussed <code>tex4ht</code> system supports several output formats with multiple steps and multiple parameters possible for each step and format combination.</p>
<p>I just want to make sure this is visible as it'll save a lot of time if you know it exists and where you can find its documentation.</p>
<p>The most basic version of the htlatex command will convert the TeX file into HTML using UTF-8 as the encoding:</p>
<pre><code class="language-bash">make4ht -uf html5 filename.tex
</code></pre>
<p>When you just add new text to your TeX document, without cross-references, or new additions to the table of contents, you can use <code>draft</code> mode which will invoke LaTeX only once. It can save quite a lot of the compilation time:</p>
<pre><code class="language-bash">make4ht -um draft -f html5 filename.tex
</code></pre>
<p>As with many things in the TeX universe there are a lot of configuratuion options. I'm deliberately not covering them both to keep the post from balloning in size and to avoid confusion; I'll assume that you know where to find the documentation if you need it.</p>
<h2>Items to research and conclusion</h2>
<p>Using LaTeX as the source for documents presents some clear advantages and some interesting challenges. TeX and LaTeX were designed from the start to work as print typesetting languages and the quality of the printed result is clearly better than what we can get from HTML alone.</p>
<p>Particularly with <code>make4ht</code> there are many questions left to answer. Sone of the questions that merit additional research:</p>
<ul>
<li>Would the output of the tool using the <code>staticsite</code> extension be good enough for static sites other than Jekyll?</li>
<li>Is the output in <code>Tei</code> and <code>Docbook</code> good enough to feed to their corresponding processing toolchains? If not what additional changes do we need to make?</li>
<li>Is it worth learning Lua just to automate one type of task for one tool?</li>
</ul>
<h2>Links and resources</h2>
<ul>
<li><a href="https://www.tug.org/tex4ht/">tex4ht</a></li>
<li><a href="https://www.tug.org/TUGboat/tb25-1/gurari.pdf">Tex4ht: HTML Production</a></li>
<li><a href="https://github.com/michal-h21/make4ht/blob/master/README.md">make4ht</a></li>
<li><a href="https://github.com/michal-h21/tex4ebook/blob/master/README.md">tex4ebook</a></li>
</ul>