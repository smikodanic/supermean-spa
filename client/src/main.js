/*global angular*/

/******************* CUSTOM MODULES *******************************
Notice:
    Can be also included in /server/app/views/clientApp.ejs if we don't want to merge everything inside main.js.
    For example:
    <script src="/bower/angular-ui-router/release/angular-ui-router.min.js"></script>
    <script src="/bower/angular-cookies/angular-cookies.min.js"></script>
    <script src="/assets/js/ngPassport.js"></script>
 ******************************************************************/
require('../../bower_components/angular-ui-router/release/angular-ui-router.min.js'); //ui.router
require('../../bower_components/angular-cookies/angular-cookies.min.js'); //ngCookies
require('./ng/modules/angular-passport/ngPassportJWT'); //ngPassport.JWTStrategy



/******************* APP MODULE *******************
 ******************************************************************/
var clientApp = angular.module('clientApp', [
    // 'ngRoute',
    'ui.router',
    'ngCookies',
    'ngPassport.JWTStrategy'
]);



/**************************** CONSTANT **************************
 ****************************************************************/
clientApp.constant('APPCONF', require('./ng/constant/APPCONF'));



/******************************************* CONFIG *******************************************
Only providers ($httpProvider) and constants can be injected into configuration blocks.
This is to prevent accidental instantiation of services before they have been fully configured.
 **********************************************************************************************/
clientApp.config(require('./ng/config/html5mode'));



/*********************************** RUN  ***********************************
Run on single page app start. For example on browser's reload.
Only instances ($http, $rootScope, someService) and constants can be injected into run blocks.
This is to prevent further system configuration during application run time.
 ****************************************************************************/
clientApp.run(function () {
    'use strict';
    console.log('App is running...');
});



/****************************** ROUTES ******************************
 ********************************************************************/
// clientApp.config(['$routeProvider', require('./ng/config/routes-ng')]); //ngRoute
clientApp.config(require('./ng/config/routes-ui')); //ui.router



/******************* CONTROLLERS *******************
 ***************************************************/
clientApp.controller('404Ctrl', require('./app/404/404Ctrl'));
clientApp.controller('appCtrl', require('./app/appCtrl'));
