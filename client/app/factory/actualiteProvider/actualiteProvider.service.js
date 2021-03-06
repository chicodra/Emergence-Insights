'use strict';
const angular = require('angular');

/*@ngInject*/
export function actualiteProviderService($http,$q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.listeAct=null;
  this.listActualites=function () {
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/actualites',{
      cache: true
    }).then(function(list) {
      //console.log("cycle",list);
      liste=list.data;
      deferred.resolve(liste);

    });
    liste=deferred.promise;

    return liste;

  }
   this.listAlaUne=function () {
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/actualites/une/'+true,{
      cache: true
    }).then(function(list) {
      liste=list.data;
      deferred.resolve(liste);

    });
    liste=deferred.promise;

    return liste;

  }
  this.listActualitesPays=function (id) {
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/fiche_actualites/pays/'+id,{
      cache: true
    }).then(function(list) {
      //console.log("cycle",list);
      liste=list.data;
      deferred.resolve(liste);

    });
    liste=deferred.promise;

    return liste;

  }
  this.getActualiteByName=function (libelle) {
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/actualites/sujet/'+libelle,{
      cache: true
    }).then(function(list) {
      //console.log("cycle",list);
      liste=list.data;
      deferred.resolve(liste);

    });
    liste=deferred.promise;

    return liste;

  }
    this.getFicheByActualite=function (id) {
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/fiche_actualites/actu/'+id,{
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

export default angular.module('emergenceInsightsApp.actualiteProvider', [])
  .service('actualiteProvider', actualiteProviderService)
  .name;
