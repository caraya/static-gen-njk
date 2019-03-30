<h1>Using Javascript to manipulate the DOM</h1>
<h2>Inserting new elements: The simple version</h2>
<pre><code class="language-html">&lt;div id=&quot;container&quot;&gt;&lt;/div&gt;
</code></pre>
<pre><code class="language-js">const button = document.createElement(&quot;button&quot;);
const container = document.getElementById(&quot;container&quot;);

button.id = &quot;clicky&quot;;
button.innerHTML = &quot;Click Me&quot;;

container.appendChild(button);
</code></pre>
<ul>
<li>you can’t currently add an attribute to the element when it's created; you must use <code>setAttribute</code> or similar method elsewhere on the script</li>
<li>You may think about adding an <code>id</code> attribute to the element, but it’s unlikely that you need to do so. You already have a reference to the element when you create it.
<ul>
<li>Only reason why you may need an id or class is if you'll reference the element from a separate script</li>
</ul>
</li>
<li>Once you add the element to the page, it will follow all the rules you apply via CSS, either a stylesheet, or Javascript</li>
</ul>
<h2>Inserting new elements: insertAdjacentHTML</h2>
<pre><code class="language-html">&lt;aside id=&quot;sidecontent&quot;&gt;&lt;/aside&gt;
</code></pre>
<pre><code class="language-js">const sidecontent = document.getElementById(&quot;sidecontent&quot;);

sidecontent.insertAdjacentHTML(&quot;beforebegin&quot;, &quot;&lt;p&gt;Day after day&lt;/p&gt;&quot;);

sidecontent.insertAdjacentHTML(&quot;afterbegin&quot;, &quot;&lt;h1&gt;Add It Up&lt;/h1&gt;&quot;);

sidecontent.insertAdjacentHTML(&quot;beforeend&quot;, &quot;&lt;p&gt;But the day after today&lt;/p&gt;&quot;);

sidecontent.insertAdjacentHTML(&quot;afterend&quot;, &quot;&lt;p&gt;I will stop&lt;/p&gt;&quot;);
</code></pre>
