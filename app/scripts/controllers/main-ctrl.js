'use strict';

/**
 * @ngdoc function
 * @name giphy.controller:MainCtrl
 * @description
 * # MainCtrl
 * shows list of static gifs with very basic navigation (they move after click)
 */
angular
  .module('giphy')
  .controller ('MainCtrl', function ($scope, $routeParams, gifs) {


    // init vars
    var page = $routeParams.page ? ($routeParams.page - 1) : 0;

    $scope.search = $routeParams.search;

    $scope.gifs = [];


    // request images...
    gifs.search($scope.search, page, newGifs, err);



    // function definitions

    // extract and prepare gif info for gif list
    function gifExtractor(img) {
      return {
        url: img.images.fixed_width_still.url,
        href: '#/details/' + img.id
      };
    }

    // reload gifs and setup pagination
    function newGifs(resp) {

      var pages = Math.ceil(resp.pagination.total_count / 25);

      $scope.gifs = resp.data.map(gifExtractor);

      if(page > 0) {
        $scope.newer = page;
      }

      if(page < pages) {
        $scope.older = page + 1 + 1;
      }

    }

    function err(data) {
      alert('there ware problems loading image list');
    }

  });