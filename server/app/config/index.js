/*
 * environment dependant configuration: $export NODE_ENV=dev || $export NODE_ENV=production
 * config.server_manager = 'pm2' || 'nodemon'
 */

var config_env = require('./env/' + (process.env.NODE_ENV || 'dev'));

var config = {
    app_name: 'SuperMEAN SPA App',
    env: config_env
};

module.exports = config;
