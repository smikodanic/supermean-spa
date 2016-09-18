/*global window*/

/**
 * Controller: 404Ctrl
 */
module.exports = function ($scope) {
    'use strict';
    $scope.msg = 'Error 404: Page not found in client side routes!';
    //redirect to server side /server/views/404.ejs
    // window.location.href = '/404';
};
