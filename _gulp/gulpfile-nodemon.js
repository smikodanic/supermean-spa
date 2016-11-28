var gulp = require('gulp');


/***** GULP BASIC TASKS *****/
gulp.task('nodemon-start', require('./tasks/server-nodemon.js'));
gulp.task('rimraf', require('./tasks/rimraf.js'));
gulp.task('htmlmin', require('./tasks/htmlmin.js'));
gulp.task('browserify', require('./tasks/browserify.js'));
gulp.task('scss', require('./tasks/scss-sass.js').scss);
gulp.task('css-minify', require('./tasks/scss-sass.js').cssMinify);



/***** GULP WATCHERS *****/
gulp.task('watch', function () {
    'use strict';

    //*** watch client side
    gulp.watch([
        'client/src/**/*.js'
    ], ['browserify']);

    gulp.watch([
        'client/src/**/*.html'
    ], ['htmlmin']);

    gulp.watch([
        'client/src/**/*.scss'
    ], ['scss']);

});




/***** GULP COMPOUND TASKS *****/

//first delete then create JS, HTML and CSS files in /client/dist/ directory
gulp.task('build-dist', ['rimraf'], function () {
    'use strict';
    setTimeout(function () {
        gulp.start('browserify', 'htmlmin', 'scss');

        setTimeout(function () {
            gulp.start('css-minify');
        }, 1300);
    }, 1300);
});


//defult gulp task
gulp.task('default', ['build-dist', 'watch'], function () {
    'use strict';
    setTimeout(function () {
        gulp.start('nodemon-start');
    }, 3000);
});
