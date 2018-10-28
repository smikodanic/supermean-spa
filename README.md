# SuperMEAN - SPA
SuperMEAN-SPA is MEAN stack framework for fast development of Single Page Apps

Very powerfull and easy to understand MEAN Stack framework.
It has dev tools like gulp, browserify, sass, htmlmin
and integrated angular-passport authentication module.

Usually tied with [Supermean-API](https://github.com/smikodanic/supermean-api) framework.

More information on [www.supermean.org](http://www.supermean.org) .

&nbsp;

## FEATURES
- nodejs + expressjs server
- AngularJS 1.5.0
- Twitter Bootstrap 3
- Font Awesome 4
- integrated 404 Not Found Page
- integrated two sample pages (which should be replaced)
- nice and intuitive project's folder structure (see example)
- [ui.router](https://github.com/angular-ui/ui-router) for defining route states
- integrated [angular-passport](https://www.npmjs.com/package/angular-passport) for easy authentication (Basic, JWT and Hash)
- [html5 mode](https://docs.angularjs.org/api/ng/provider/$locationProvider) enabled by default (see /ng/config/html5mode.js)

&nbsp;

## INSTALLATION

*Prerequisites*
* gulp
* sass and ruby's gem


```bash
$ git clone git@github.com:smikodanic/supermean-spa.git
$ cd supermean-spa
$ rm -rf .git
$ npm install && bower install
```

&nbsp;

## PORT and ENVIRONMENTS
Deafult port is 3005 for dev and 3001 for prod env.

* development: *$export NODE_ENV=dev*
* production: *$export NODE_ENV=prod*


&nbsp;


## GULP DEVELOPMENT
```
export NODE_ENV=dev
gulp default
```

Gulp watches HTML, JS and SCSS files and make compilation into /dist/ folder on each file change.

**BUILDING TOOLS**

The building tools already prepared and integrated into gulp:
* [browserify](http://browserify.org)
* [sass-compass](http://compass-style.org)
* [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin)

&nbsp;

## EXAMPLE
The framework has two pages as an example: [localhost:3005](http://localhost:3005)


&nbsp;

## LICENCE

[MIT](https://opensource.org/licenses/MIT)

*Freely you received, freely give. , Mt10:8*

&nbsp;

&nbsp;

