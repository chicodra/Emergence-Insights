'use strict';
const angular = require('angular');

/*@ngInject*/
export function interviewsProvider($http, $q) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  this.listeInt = null;
  this.listInterviews = function () {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/interviews', {
      cache: true
    }).then(function (list) {
      //console.log("cycle",list);
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }
  this.getInterviewByName = function (libelle) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/interviews/themes/' + libelle, {
      cache: true
    }).then(function (list) {
      //console.log("cycle",list);
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }
  this.getNumberInterviews = function () {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/interviews/nombre/', {
      cache: true
    }).then(function (list) {
      //console.log("cycle",list);
      liste = list.data;
      deferred.resolve(liste);
    });
    liste = deferred.promise;
    return liste;

  }

  this.ajoutInterview = function (libelle, intervenant, contenu, theme) {
    var deferred = $q.defer();
    $http.post('/api/interviews', {
      libelle: libelle,
      intervenant: intervenant,
      contenu: contenu,
      id_theme: theme
    }).then(function () {
      console.log("Interview bi Dougeuna");
    });
  }
  this.modifier = function (id, libelle, intervenant, contenu, theme) {
    var deferred = $q.defer();
    $http.put('/api/interviews/' + id, {
      libelle: libelle,
      intervenant: intervenant,
      contenu: contenu,
      id_theme: theme
    }).then(function () {
      console.log("Modifier bi Bakhna");
    });
  }
  this.supprimer = function (id) {
    var deferred = $q.defer();
    $http.delete('/api/interviews/' + id, {}).then(function () {
      console.log("Supprimer bi Bakhna");
    });
  }
}

export default angular.module('emergenceInsightsApp.interviewprovider', [])
  .service('interviewsProvider', interviewsProvider)
  .name;
