/*global window*/
/**
 * App routes defined by ui-router.
 * https://github.com/angular-ui/ui-router
 *
 * Must have
 *  <script src="/bower/angular-ui-router/release/angular-ui-router.min.js"></script>
 * in /server/app/views/clientApp.ejs,
 *
 * or include it into /client/src/main.js
 *  require('../../bower_components/angular-ui-router/release/angular-ui-router.min.js');
 */


module.exports = function ($stateProvider, $urlRouterProvider, APPCONF) {
    'use strict';


    /* 404 redirect */
    $urlRouterProvider.otherwise("/404");
    $stateProvider.state('404', require('../../app/404/404Rte'));


    /* states */
    $stateProvider.state('app', require('../../app/appRte')(APPCONF)); // url: /
    $stateProvider.state('page', require('../../app/page/pageRte')(APPCONF)); // url: /page



};





