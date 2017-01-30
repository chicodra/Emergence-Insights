'use strict';
const angular = require('angular');

/*@ngInject*/
export function userProviderService($http,$q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.getUsers=function () {
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/sujets',{
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

export default angular.module('emergenceInsightsApp.userProvider', [])
  .service('userProvider', userProviderService)
  .name;
