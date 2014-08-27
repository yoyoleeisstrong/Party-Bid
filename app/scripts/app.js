'use strict';

/**
 * @ngdoc overview
 * @name partyBidApp
 * @description
 * # partyBidApp
 *
 * Main module of the application.
 */
angular
  .module('partyBidApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
//      .when('/', {
//        templateUrl: 'views/main.html',
//        controller: 'MainCtrl'
//      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/CreateActivity', {
            templateUrl: 'views/CreateActivity.html',
            controller: 'CreateActivityCtrl'
        })
      .when('/Activity_List', {
             templateUrl: 'views/Activity_List.html',
             controller: 'Activity_ListCtrl'
        })
      .when('/sign_up', {
            templateUrl: 'views/sign_up.html',
            controller: 'sign_upCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
