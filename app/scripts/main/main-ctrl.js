'use strict';

angular
  .module('giphy')
  .controller ('MainCtrl', function ($scope, $http, $routeParams) {

    $scope.gifs = [];
    $scope.pages = [];

    function repeat(times, thing) {
      var tmp = [];
      for(var i = 0; i < times; i++) {
        tmp.push(thing);
      }
      return tmp;
    }


    function gifExtractor(img) {
      return {
        url: img.images.fixed_width_still.url,
        href: '#/details/' + img.id
      };
    }

    function newGifs(resp) {

      $scope.gifs = resp.data.map(gifExtractor);

      $scope.pages = repeat(Math.ceil(resp.pagination.total_count / 25));

    }

    var page = ($routeParams.page ? ($routeParams.page - 1) : 0) * 25;

    $http.get('http://api.giphy.com/v1/gifs/search?q='
             + $routeParams.animal
             + '&offset=' + page
             + '&limit=25'
             + '&sort=recent'
             + '&api_key=dc6zaTOxFJmzC')
         .success(newGifs);

  });