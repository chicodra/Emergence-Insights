'use strict';
const angular = require('angular');

/*@ngInject*/
export function interviewsProvider($http,$q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.listeInt=null;
  this.listInterviews=function () {
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/interviews',{
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

export default angular.module('emergenceInsightsApp.interview', [])
  .service('interviewsProvider', interviewsProvider)
  .name;
