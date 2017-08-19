Company Site
============

Task List
---------

 - [ ] Example Sample Sites
 - [ ] Investigate Jekyll Plugins
 - [ ] Change Assets Directories
 - [ ] Generate Offline Documentation
 - [ ] Code individual Static Pages
 
### Sample Sites ###

List of curated sample Jekyll sites with sources:

__Electron__
 - https://electron.atom.io/
 - https://github.com/electron/electron.atom.io

__RawFunkMaharishi__
 - http://rawfunkmaharishi.uk/
 - https://github.com/rawfunkmaharishi/rawfunkmaharishi.github.io

__Yarn__
 - https://yarnpkg.com/en/
 - https://github.com/yarnpkg/website

__React__
 - https://facebook.github.io/react/
 - https://github.com/facebook/react/tree/master/docs

__Docker__
 - https://docs.docker.com/
 - https://github.com/docker/docker.github.io

__Brick__
 - http://brick.im/
 - https://github.com/alfredxing/brick

### Plugins ###

 - `jekyll-assets`
 - `jekyll-sitemap`
 - `jekyll-feed`
 - `jekyll-paginate`
 - `jekyll-redirect-from`
 - `jekyll-seo-tag`
 - `jemoji`

### Assets Directories ###

Current:
```
├── assets/
│   ├── css/
│   │   └── main.scss
│   ├── js/
│   │   └── main.js
│   └── images/
├── _sass/
```

New:
```
├── _sass/
├── _styles/
│   
├── _scripts/
│   
├── _images/
```

### Offline Documentation ###

```sh
gem install jekyll-docs
jekyll docs
```

### Static Pages ###

Code static pages with markup:

 - __Home__ - home page
 - __Landing__ - serves as an alternative home page for marketing purposes
 - __Product__ - product page
 - __Pricing__ - pricing page
 - __About__ - about the company and team
 - __Contact__ - contact us; sign up for newsletter
 - __Terms__ - Terms of Service
 - __Privacy__ - Privacy Policy
 
Configure static page directory as `_pages/`



 
* * *


File Structure
--------------

```
├── assets/
│   ├── css/                                        --> Main stylesheets
│   │   └── main.scss
│   ├── js/                                         --> Main scripts
│   │   ├── ...
│   │   └── main.js
│   └── images/                                     --> Images
│       └── favicon/
│
├── _includes/
│   ├── head/                                       --> <head> partials
│   │   ├── top.html
│   │   ├── meta.html
│   │   ├── social.html
│   │   ├── assets.html
│   │   └── custom.html
│   ├── body/                                       --> <body> partials
│   │   ├── browsehappy.html
│   │   ├── analytics.html
│   │   └── scripts.html
│   ├── layout/                                     --> Layout components
│   │   ├── navigation.html
│   │   ├── page-hero.html
│   │   ├── ...
│   │   └── footer.html
│   ├── svg/                                        --> SVG icons
│   │   ├── facebook.svg
│   │   ├── github.svg
│   │   ├── twitter.svg
│   │   └── ...
│   ├── vars.html   
│   ├── head.html   
│   ├── body.html   
│   ├── foot.html   
│   ├── debug.html  
│   └── base_path
│
├── _layouts/                                       --> Layout templates
│   ├── default.html
│   ├── page.html
│   ├── post.html
│   ├── splash.html
│   └── ...
│
├── _posts/                                         --> Blog posts
│   ├── YYYY-MM-DD-title-of-post.md
│   └── ...
│
├── _sass/                                          --> Sass partials
│   ├── abstracts/
│   ├── vendor/
│   │   ├── bootstrap/
│   │   ├── ...
│   │   └── _bootstrap.scss
│   ├── base/
│   ├── layout/
│   ├── components/
│   ├── pages/
│   └── themes/
│   
├── _site/                                          --> Generated site directory
│
├── _config.yml                                     --> Configuration file
│
├── index.md                                        --> Home/Index
├── about.md                                        --> About Page
├── blog.md                                         --> Blog Page
├── contact.md                                      --> Contact Page
├── product.md                                      --> Product Page
├── 404.html                                        --> 404 Page
│
├── .editorconfig
├── .gitignore
│
├── Gemfile
├── Gemfile.lock
│
└── README.md
```
