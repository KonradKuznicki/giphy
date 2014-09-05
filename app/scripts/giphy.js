'use strict';

angular
  .module('giphy', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/show/:animal/:page?', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .when('/details/:imgCode', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsCtrl'
      })
      .otherwise({
        redirectTo: '/show/cats'
      });
  });
