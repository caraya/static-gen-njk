  <div class="container">
<pre><code>&lt;div class=&quot;columns&quot;&gt;
  &lt;div class=&quot;column is-10-mobile is-offset-1-mobile is-8 is-offset-2 has-text-centered blog-entry-head&quot;&gt;
    &lt;h2 class=&quot;title&quot;&gt;The holy wars: tabs vs spaces et al.&lt;/h1&gt;
      &lt;h4 class=&quot;subtitle&quot;&gt;
        1
        &lt;sup&gt;st&lt;/sup&gt; Aug, 2018
      &lt;/h4&gt;

  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;columns&quot;&gt;
  &lt;div class=&quot;column is-10-mobile is-offset-1-mobile is-8 is-offset-2&quot;&gt;

    &lt;figure class=&quot;image blog-image&quot;&gt;
      &lt;img src=&quot;images/holy-war.jpg&quot; /&gt;
    &lt;/figure&gt;

    &lt;p class=&quot;text&quot;&gt;
      As the field of programming fluctuates between art and science, there are certain debates that have been raging on for generations.
      It's finally time to put these to bed.
    &lt;/p&gt;


    &lt;h4 class=&quot;subtitle is-4&quot;&gt;Tabs vs. Spaces&lt;/h4&gt;
    &lt;p class=&quot;text&quot;&gt;
      To tab or not to tab, that is the question. And what a question it is - there has been reams of literature and debate on
      this very fine aspect of software engineering because it affects just about any endeavour that requires any form
      of code being manually written and stored. In fact, a good many projects never even saw the light of day because
      their co-founders were stuck in an endless recursive loop of submitting merge requests that reformatted all their
      code from tabs to spaces and vice-versa.
    &lt;/p&gt;

    &lt;p class=&quot;text&quot;&gt;
      Let us dive into the debate headfirst and analyse each of the points presented from both sides:
    &lt;/p&gt;

    &lt;div class=&quot;box&quot;&gt;
      &lt;p&gt;
        &lt;strong&gt;Spacing&lt;/strong&gt;
      &lt;/p&gt;
      &lt;p&gt;
        A space takes up 1 column whereas a tab can take up any number of columns depending upon the environment configuration. This
        means that spaces lead to a more consistent display of code. The counter argument to this is usually that tabs
        are better as they allow developers with different preferences in indentation size to change how it looks without
        needing to change the code itself.
      &lt;/p&gt;
    &lt;/div&gt;

    &lt;div class=&quot;box&quot;&gt;
      &lt;p&gt;
        &lt;strong&gt;Size&lt;/strong&gt;
      &lt;/p&gt;
      &lt;p&gt;
        Using a single tab to specify 4 spaces of indentation is faster and results in a smaller file size. The counter argument
        to this is usually that modern day IDEs can just as easily convert all tabs to spaces on save and moreover, compiled
        or compressed code will already have all the fat trimmed out of it.
      &lt;/p&gt;
    &lt;/div&gt;

    &lt;p class=&quot;text&quot;&gt;
      Well, that's about it. At the end of the day, the whole debate boils down to individual preferences regarding how one likes
      to read code. Given that reading code is what most software development is all about really, it is quite understandable
      that people get so heated up about it. Many even resort to writing blog posts
      &lt;sup&gt;1, 2, 3&lt;/sup&gt; and eventually
      &lt;a href=&quot;http://uk.businessinsider.com/tabs-vs-spaces-from-silicon-valley-2016-5?r=US&amp;IR=T&quot;&gt;tv shows&lt;/a&gt;. It has even been recently surmised that
      &lt;a href=&quot;https://stackoverflow.blog/2017/06/15/developers-use-spaces-make-money-use-tabs/&quot;&gt;developers using spaces make more money than those who use tabs&lt;/a&gt;.
    &lt;/p&gt;

    &lt;p class=&quot;text&quot;&gt;
      As the data scientists themselves note, correlation is not causation and therefore no scientific conclusions can be drawn
      from the lack of the Tab character in source code. However despair not, dear Reader, for Software Dawg has the
      answer and you need not ask any more questions on Stackoverflow only to get downvoted into oblivion for having
      asked such an obvious duplicate.
    &lt;/p&gt;

    &lt;p class=&quot;text&quot;&gt;
      Software Dawg's recommendation is very straightforward: since the pursuit of more money only leads to more problems, in the
      spirit of living frugally and earning less, the axe falls on the side of the tab
      &lt;sup&gt;4&lt;/sup&gt;.
    &lt;/p&gt;

    &lt;article class=&quot;message blockquote&quot;&gt;
      &lt;div class=&quot;message-body&quot;&gt;
        &lt;div class=&quot;quote&quot;&gt;&amp;quot;Use tabs, not too many, mostly 2 spaced.&amp;quot;&lt;/div&gt;
        &lt;div class=&quot;cite&quot;&gt;- Software Dawg&lt;/div&gt;
      &lt;/div&gt;
    &lt;/article&gt;

    &lt;p class=&quot;text&quot;&gt;
      Save on source code size, complete flexibility in terms of viewing and in the ideal case your code is well under the
      80 character column limit. But then again, who really ssh's into production servers and fires up vim to modify
      the shopping cart backend so that it can accept more than one brand of toilet-paper? Those neckbeards...
    &lt;/p&gt;

    &lt;h4 class=&quot;subtitle is-4&quot;&gt;Semi-colons or no semi-colons&lt;/h4&gt;
    &lt;p class=&quot;text&quot;&gt;
      This is not much of a debate when using real programming languages. Most languages require the use of a semi-colon to clearly
      distinguish between statements and some like Python rely exclusively on whitespace for parsing and tokenization.
    &lt;/p&gt;

    &lt;p class=&quot;text&quot;&gt;
      Javascript thankfully never fell into this trap of requiring programmers to commit to writing consistent code.
      Unfortunately however, we programmers are quite a masochistic lot and therefore the need to argue about the usage
      of semi-colons or no semi-colons in Javascript is a no-brainer. Luckily for you, after years of wrangling with this dilemma software
      dawg has the answer:
    &lt;/p&gt;

    &lt;article class=&quot;message blockquote&quot;&gt;
      &lt;div class=&quot;message-body&quot;&gt;
        &lt;div class=&quot;quote&quot;&gt;&amp;quot;NO SEMI-COLONS PLZ.&amp;quot;&lt;/div&gt;
        &lt;div class=&quot;cite&quot;&gt;- Software Dawg&lt;/div&gt;
      &lt;/div&gt;
    &lt;/article&gt;

    &lt;p class=&quot;text&quot;&gt;
      The reasoning behind this is simple. The less characters you have in your source files, the less space they need. The reduced
      file size means lesser data sent over the pipe (which in Javascript's case is the majority form of delivery) and
      therefore a reduction in electricity costs which helps fighting global warming!
    &lt;/p&gt;
    &lt;p class=&quot;text&quot;&gt;
      In fact, you should also probably only use global variables and closures to reduce the total amount of code you need to write.
      Also, forget about tests - rock star programmers add features directly in production using a web IDE.
    &lt;/p&gt;

    &lt;h4 class=&quot;subtitle is-4&quot;&gt;CamelCase or snake_case&lt;/h4&gt;
    &lt;p class=&quot;text&quot;&gt;
      This is a very interesting debate steeped in history. The initial programming languages fostered a snake_case standard which
      survived well into the 21st century. However, the rise of scripting languages such as Javascript and people simply
      too lazy to search for the
      &lt;code&gt;_&lt;/code&gt; key, lead to meteoric rise in popularity of CamelCase.
    &lt;/p&gt;

    &lt;p class=&quot;text&quot;&gt;
      In fact, there were even times where a mix of the two was employed:
    &lt;/p&gt;

    &lt;pre&gt;
</code></pre>
<p>@Test
void test_addUserWithoutNameThrowsException() {
…
}
</pre></p>
<pre><code>    &lt;p class=&quot;text&quot;&gt;
      Fortunately for of us, none of those developers are working on any mission critical software at the moment.
    &lt;/p&gt;

    &lt;p class=&quot;text&quot;&gt;
      This debate is actually very easily settled because of the fact that there are no good screen readers that can
      &lt;a href=&quot;https://stackoverflow.com/questions/1740116/for-what-reason-do-we-have-the-lower-case-with-underscores-naming-convention/1740152#1740152&quot;&gt;reliably distinguish between cases&lt;/a&gt;. Therefore, in the name of accessiblity, snake_case wins this one hands
      down.
    &lt;/p&gt;

    &lt;h4 class=&quot;subtitle is-4&quot;&gt;Vim vs emacs&lt;/h4&gt;
    &lt;p class=&quot;text&quot;&gt;
      Well, well, well, this is a question that pops up every once in a while as people find themselves having to deal with linux
      servers and other real operating systems. &amp;quot;Which text editor should I invest time in learning? Emacs or Vim?&amp;quot;
      While this question has largely already been settled by the internet (hint: the answer is none, use pico if you
      must otherwise you shouldn't really be ssh'ing into anywhere really), we will include it here for completeness
      and also because we disagree with the opinion of a large majority of script kiddies.
    &lt;/p&gt;

    &lt;div class=&quot;content&quot;&gt;
      &lt;p&gt;
        There are 2 main differences between the two software programs:
      &lt;/p&gt;

      &lt;ol class=&quot;content&quot;&gt;
        &lt;li&gt;Emacs was initially released in 1976 and Vim came much later with its initial release in 1991.&lt;/li&gt;
        &lt;li&gt;Emacs is an operating system, whereas Vim is a text editor.&lt;/li&gt;
      &lt;/ol&gt;
    &lt;/div&gt;

    &lt;p class=&quot;text&quot;&gt;
      So based on the differences, it is clear that one should invest time in learning Vim. It will come in handy if you ever need
      to edit files.
    &lt;/p&gt;


    &lt;h4 class=&quot;subtitle is-4&quot;&gt;References&lt;/h4&gt;

    &lt;p class=&quot;text&quot;&gt;
      [1]
      &lt;a href=&quot;http://www.python.org/dev/peps/pep-0008/&quot;&gt;Guido van Rossum&lt;/a&gt;
      &lt;br /&gt; [2]
      &lt;a href=&quot;https://www.jwz.org/doc/tabs-vs-spaces.html&quot;&gt;Jamie Zawinski&lt;/a&gt;
      &lt;br /&gt; [3]
      &lt;a href=&quot;https://blog.codinghorror.com/death-to-the-space-infidels/&quot;&gt;Jeff Atwood&lt;/a&gt;
      &lt;br /&gt; [4] Full disclosure, Software Dawg loves the $$$, so he always uses spaces.
    &lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
  </div>
