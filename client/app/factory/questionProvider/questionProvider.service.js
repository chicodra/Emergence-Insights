'use strict';
const angular = require('angular');

/*@ngInject*/
export function questionProviderService($http,$q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.listeQuestions=null;
  this.listQuestionsInterviews=function (id) {
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/questions/int/'+id,{
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

export default angular.module('emergenceInsightsApp.questionProvider', [])
  .service('questionProvider', questionProviderService)
  .name;
