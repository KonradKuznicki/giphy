'use strict';

angular
  .module('giphy')
  .controller ('DetailsCtrl', function ($scope, $http, $routeParams) {

    function gifDetails(data) {
      $scope.gif = data.data;
    }

    $http.get('http://api.giphy.com/v1/gifs/'
             + $routeParams.gifId
             + '?api_key=dc6zaTOxFJmzC')
         .success(gifDetails);
  });