'use strict';

/**
 * @ngdoc function
 * @name giphy.controller:DetailsCtrl
 * @description
 * # MainCtrl
 * shows gif and some of its details based on gifId
 */
angular
  .module('giphy')
  .controller ('DetailsCtrl', function ($scope, gifs, $routeParams) {

    function gifDetails(data) {
      $scope.gif = data.data;
    }

    function err(data) {
      alert('Threr ware problems loading your image');
    }

    gifs.byId($routeParams.gifId, gifDetails, err);

  });