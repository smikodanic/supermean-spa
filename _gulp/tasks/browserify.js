var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var header = require('gulp-header');
var pkg = require('../../package.json');
var banner = require('./banner');



module.exports = function () {
    'use strict';

    return browserify('./client/src/main.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(header(banner, {pkg: pkg}))
        .pipe(gulp.dest('./client/dist/js/'))
        .on('error', function (e) {
            console.log(e);
        });

};
