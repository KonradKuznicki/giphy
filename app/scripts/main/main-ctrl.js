'use strict';

angular
  .module('giphy')
  .controller ('MainCtrl', function ($scope, $http, $routeParams) {

    var page = $routeParams.page ? ($routeParams.page - 1) : 0;

    $scope.search = $routeParams.search;

    $scope.gifs = [];
    $scope.pages = [];


    function gifExtractor(img) {
      return {
        url: img.images.fixed_width_still.url,
        href: '#/details/' + img.id
      };
    }

    function newGifs(resp) {

      $scope.gifs = resp.data.map(gifExtractor);

      $scope.pages = Math.ceil(resp.pagination.total_count / 25);

      if(page > 0) {
        $scope.newer = page;
      }

      if(page < $scope.pages) {
        $scope.older = page + 1 + 1;
      }

    }


    $http.get('http://api.giphy.com/v1/gifs/search?q='
             + $routeParams.search
             + '&offset=' + (page * 25)
             + '&limit=25'
             + '&sort=recent'
             + '&api_key=dc6zaTOxFJmzC')
         .success(newGifs);

  });