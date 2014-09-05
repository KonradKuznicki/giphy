'use strict';

/**
 * @ngdoc service
 * @name giphy.gifs
 * @description
 * # gifs
 * Service that provides API for giphy.
 */
angular.module('giphy')
  .service('gifs', function gifs($http) {

    // config
    var url = 'http://api.giphy.com/v1/gifs/',
        key = 'api_key=dc6zaTOxFJmzC',
        limit = 25;



    this.byId = function (id, cb, err) {
      $http.get('http://api.giphy.com/v1/gifs/'
               + id
               + '?' + key)
           .success(cb)
           .error(err);
    };



    this.search = function (q, page, cb, err) {


      $http.get('http://api.giphy.com/v1/gifs/search?q='
               + q
               + '&offset=' + (page * 25)
               + '&limit=' + limit
               + '&sort=recent' // it may not do anything (it was not documented)
               + '&' + key)
           .success(cb)
           .error(err);
    };



  });
