{% extends "layouts/base.njk" %}
{% block content %}

  <section class="hero is-info is-medium is-bold">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Software Dawg</h1>
        <h2 class="subtitle">
          Musings of a rapper turned software engineer
        </h2>
      </div>
    </div>
  </section>

  <section class="articles">
    <div class="container">
      <div class="columns">
        <div class="column is-10-mobile is-offset-1-mobile is-8 is-offset-2">

          <a class="blog-link" href="2018-08-01-the-holy-wars-tabs-vs-spaces-et-al.html">
            <div class="card blog-card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left is-hidden-mobile">
                    <figure class="image is-96x96">
                      <img src="images/holy-war-square.jpg" alt="The holy wars">
                    </figure>
                  </div>
                  <div class="media-content">
                    <h2 class="is-size-4">The holy wars</h2>
                    <p>Tabs vs. spaces? Semi-colons or no semi-colons? CamelCase or snake_case? Vim vs emacs? There is only one true answer.</p>
                    <p class="blog-time is-hidden-tablet">1
                      <sup>st</sup> Aug, 2018</time>
                  </div>
                  <div class="media-right is-hidden-mobile">
                    <time class="blog-time" datetime="2018-08-01">1
                      <sup>st</sup> Aug, 2018</time>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  </section>
{% endblock %}
