'use strict';
const angular = require('angular');

/*@ngInject*/
export function commentaireProviderService($http,$q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  //this.listPres=null;
  this.getComsBySujet=function (id) {
    
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/messages/sujet/'+id,{
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

export default angular.module('emergenceInsightsApp.commentaireProvider', [])
  .service('commentaireProvider', commentaireProviderService)
  .name;
