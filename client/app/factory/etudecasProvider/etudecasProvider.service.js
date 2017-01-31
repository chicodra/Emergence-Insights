'use strict';
const angular = require('angular');

/*@ngInject*/
export function etudecasProvider($http,$q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.listetu=null;
  this.listEtudedeCas=function () {
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/etude_de_cass',{
      cache: true
    }).then(function(list) {
      //console.log("cycle",list);
      liste=list.data;
      deferred.resolve(liste);

    });
    liste=deferred.promise;

    return liste;

  }
}

export default angular.module('emergenceInsightsApp.etudecasProvider', [])
  .service('etudecasProvider', etudecasProvider)
  .name;
