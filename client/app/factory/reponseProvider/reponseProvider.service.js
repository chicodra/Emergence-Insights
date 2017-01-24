'use strict';
const angular = require('angular');

/*@ngInject*/
export function reponseProviderService($http,$q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.getReponseByQuestion=function (id) {
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/reponses/quest/'+id,{
      cache: true
    }).then(function(list) {
      console.log("reponse",list);
      liste=list.data;
      deferred.resolve(liste);

    });
    liste=deferred.promise;

    return liste;

  }
}

export default angular.module('emergenceInsightsApp.reponseProvider', [])
  .service('reponseProvider', reponseProviderService)
  .name;
