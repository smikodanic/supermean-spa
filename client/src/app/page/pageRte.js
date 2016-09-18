/* state: 'app'
 * url: /
 ************************/
module.exports = function (APPCONF) {
    'use strict';

    return {
        url: '/page',
        templateUrl: APPCONF.PATH_DIST_HTML + '/page/page.html'
    };
};
