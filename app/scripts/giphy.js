'use strict';

angular
  .module('giphy', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/show/:search/:page?', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .when('/details/:gifId', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsCtrl'
      })
      .otherwise({
        redirectTo: '/show/cats'
      });
  });
