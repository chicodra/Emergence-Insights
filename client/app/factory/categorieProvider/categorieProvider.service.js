'use strict';
const angular = require('angular');

/*@ngInject*/
export function categorieProviderService($http, $q) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  this.listeCat = null;
  this.listCategorie = function () {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/categories', {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }
  this.GetSujetByCategorie = function (id) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/sujets/categorie/' + id, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }
}

export default angular.module('emergenceInsightsApp.categorieProvider', [])
  .service('categorieProvider', categorieProviderService)
  .name;
