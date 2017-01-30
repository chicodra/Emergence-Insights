'use strict';
const angular = require('angular');

/*@ngInject*/
export function presentationProviderService($http,$q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.listPres=null;
  this.listPresentations=function () {
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/presentations',{
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

export default angular.module('emergenceInsightsApp.presentationProvider', [])
  .service('presentationProvider', presentationProviderService)
  .name;
