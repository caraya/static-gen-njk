---
title: My page
description: Isn't it great?
---

{% extends "layouts/base.njk" %}

{% block content %}
<section class="hero is-default is-bold">

    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-vcentered">
          <div class="column is-10-mobile is-offset-1-mobile is-three-fifths is-offset-one-fifth">

            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://picsum.photos/800/600/?random" alt="Description">
                </figure>
              </div>
              <div class="card-content">
                <h1 class="title is-2">
                  Software Dawg
                </h1>
                <p class="text">
                  Hi, I am a software engineer based out of L.A, California.
                </p>
                <p class="text">
                    In my previous life I used to be a rapper and you can find some of my music
                    online
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">here</a>.
                </p>
                <p class="text">
                  I work for an amazing startup and our mission is to revolutionize the music industry. We are using deep learning algorihms
                  and blockchain tech on a microservices-based stack to produce music that sounds just like the generic rap
                  music that you hear on the radio.
                </p>
                <p class="text">
                  I mostly blog about how cool it is to be working 100 hours/week on the latest Javascript tech stack. You should totally
                  <a href="https://gitlab.com/wheresvic/software-dawg/issues/1">subscribe</a> to my newsletter which I put out once every month or so. No spam, only more articles on how
                  to loop over a javascript array in 2018, I promise.
                </p>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
{% endblock %}
