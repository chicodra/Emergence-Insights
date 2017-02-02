'use strict';
const angular = require('angular');

/*@ngInject*/
export function temoignageProviderService($http, $q) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  this.listTemoignage = null;
  this.listTemoignages = function () {
    'ngInject';
    var deferred = $q.defer();
    var listTemoignage = [];
    $http.get('/api/temoignages', {
      cache: true
    }).then(function (list) {

      listTemoignage = list.data;

      deferred.resolve(listTemoignage);

    });
    listTemoignage = deferred.promise;
    return listTemoignage;

  }
}

export default angular.module('emergenceInsightsApp.temoignageProvider', [])
  .service('temoignageProvider', temoignageProviderService)
  .name;
