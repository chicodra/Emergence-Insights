'use strict';
const angular = require('angular');

/*@ngInject*/
export function agendaProviderService($http,$q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.listeAgenda=null;
  this.listAgendas=function () {
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/agendas',{
      cache: true
    }).then(function(list) {
      //console.log("cycle",list);
      liste=list.data;
      deferred.resolve(liste);

    });
    liste=deferred.promise;

    return liste;

  }
  this.listAgendasPays=function (id) {
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/agendas/pays/'+id,{
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

export default angular.module('emergenceInsightsApp.agendaProvider', [])
  .service('agendaProvider', agendaProviderService)
  .name;
