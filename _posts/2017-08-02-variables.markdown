---
layout:     post
title:      "Variables"
date:       2017-08-02 09:00:00 -0400
categories:
---

Variables


### Global Variables ###

### Sitewide/Configuration Variables ###

Accessible with `site.<varname>`.

 - `title` - title of website
 - `description` - website description
 - `baseurl` - subpath of site
 - `url` - base hostname and protocol of site, e.g. http://example.com

__Site Variables__

 - `time` - current time
 - `pages` - list of all Pages
 - `posts` - list of all Posts (in reverse chronological order)
 - `related_posts` - up to ten related Posts
 - `static_files` - list of all Static Files
 - `html_pages` - subset of `site.pages` with `.html` files
 - `html_files` - subset of `site.static_files` with `.html` files
 - `collections` - list of all Collections
 - `site.data` - list of all loaded data from `_data/`
 - `site.documents` - list of documents in every collection
 - `site.categories.CATEGORY` - list of all Posts in category `CATEGORY`
 - `site.tags.TAG` - lsit of all Posts with tag `TAG`

### Page Variables ###

Accessible with `page.<varname>`.

__Blog Post YAML Front Matter__
 - `layout: post`
 - `date` - date of post in format `YYYY-MM-DD hh:mm:ss -zzzz`
 - `published` - set to `false` to prevent building
 - `category` or `categories` - YAML list or space-separated string
 - `tags` - YAML list or space-separated string

__Static Page YAML Front Matter__
 - `layout` - layout name
 - `id` - unique string identifier
 - `permalink` - permalink
 - `excerpt` - brief summary/excerpt describing page
 - `published` - set to `false` to prevent building

__Page Variables__

[See this page](https://jekyllrb.com/docs/variables/).
