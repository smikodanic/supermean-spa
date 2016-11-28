var nodemon = require('gulp-nodemon');

module.exports = function () {
    'use strict';
    nodemon({
        script: 'server',
        ext: 'js json html',
        ignore: [
            'README.md',
            'node_modules/**',
            'bower_components/**',
            'client/**',
            'server/tmp/**',
            '_gulp/**',
            '.*/**'
        ],
        delayTime: 10,
        env: {
            NODE_ENV: process.env.NODE_ENV || 'dev'
        }
    }).on('restart', ['']);
};
