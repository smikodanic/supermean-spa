/**
 ***** production environment
 * gulpFile: gulpfile-nodemon.js || gulpfile-pm2.js
 */
var config = {

    url: 'http://www.supermean.org',
    name: 'prod',
    server: {
        virtualHost: false,
        domain: 'spa.supermean.org',
        port: process.env.PORT || 3001
    },
    gulpFile: 'gulpfile-nodemon.js'

};

module.exports = config;
