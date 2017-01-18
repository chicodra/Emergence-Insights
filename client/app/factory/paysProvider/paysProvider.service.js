'use strict';
const angular = require('angular');

/*@ngInject*/
export function paysProviderService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.listPays=function () {
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/payss',{
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

export default angular.module('emergenceInsightsApp.paysProvider', [])
  .service('paysProvider', paysProviderService)
  .name;
