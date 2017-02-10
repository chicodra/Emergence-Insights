'use strict';
const angular = require('angular');

/*@ngInject*/
export function sujetProviderService($http, $q) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  //this.listSujets=null;
  this.Lesujet = null;
  this.listSujets = function () {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/sujets', {
      cache: true
    }).then(function (list) {
      //console.log("cycle",list);
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }

  this.getSujetByName = function (name) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/sujets/nom/' + name, {
      cache: true
    }).then(function (list) {
      console.log("cycle",list);
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }

  this.getSujetByCat = function (id){
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/sujets/categorie/' + id, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;
  }

  this.getSujetById = function (id){
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/sujets/' + id, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;
  }
}

export default angular.module('emergenceInsightsApp.sujetProvider', [])
  .service('sujetProvider', sujetProviderService)
  .name;
