---
layout      : blog
title       : Blog
permalink   : /blog/
---

<div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
  <div class="container">
    <h1 class="display-4 text-center">Blog</h1>
  </div>
</div>

<div class="container mb-2">
  <div class="row">
    {% for post in site.posts limit:4 %}
      <div class="col-sm-6 my-2">
        <div class="card">
          <img class="card-img-top" src="/images/blog/{{ post.thumbnail }}">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.content | strip_html | strip_newlines | strip | truncate: 128, "" }}</p>
            <a href="{{ post.url }}" class="btn btn-primary">Read More...</a>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
