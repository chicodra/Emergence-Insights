'use strict';
const angular = require('angular');

/*@ngInject*/
export function sousCategorieProviderService($http, $q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.SousCat = null;
  this.listSousCategorie = function (id) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/sousCategories/cat/'+id, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }

  this.getSousBynom = function (nom){
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/sousCategories/nom/' + nom, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;
  }
}

export default angular.module('emergenceInsightsApp.sousCategorieProvider', [])
  .service('sousCategorieProvider', sousCategorieProviderService)
  .name;
