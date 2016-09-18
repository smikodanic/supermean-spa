/**
 ***** development environment
 * gulpFile: gulpfile-nodemon.js || gulpfile-pm2.js
 */
var config = {

    url: 'http://dev.supermean.org',
    name: 'dev',
    server: {
        virtualHost: false,
        domain: 'dev.spa.supermean.org',
        port: process.env.PORT || 3005
    },
    gulpFile: 'gulpfile-nodemon.js'

};

module.exports = config;
