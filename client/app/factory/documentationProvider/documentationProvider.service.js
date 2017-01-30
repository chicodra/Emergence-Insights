'use strict';
const angular = require('angular');

/*@ngInject*/
export function documentationProviderService($http,$q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.listeDoc=null;
  this.listDocumentation=function () {
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/documentations',{
      cache: true
    }).then(function(list) {
      //console.log("cycle",list);
      liste=list.data;
      deferred.resolve(liste);

    });
    liste=deferred.promise;

    return liste;

  }
  this.listDocumentationPays=function (id) {
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/documentations/pays/'+id,{
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

export default angular.module('emergenceInsightsApp.documentationProvider', [])
  .service('documentationProvider', documentationProviderService)
  .name;
