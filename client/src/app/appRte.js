/* state: 'app'
 * url: /
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/',
        templateUrl: APPCONF.PATH_DIST_HTML + '/app.html',
        controller: 'appCtrl'
    };
};
