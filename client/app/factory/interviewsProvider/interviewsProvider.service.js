'use strict';
const angular = require('angular');

/*@ngInject*/
export function interviewsProvider($http, $q) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  this.j;
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
  this.ajoutInterview = function (libelle, intervenant, contenu, theme, tab, taille, tabrep) {
    var deferred = $q.defer();
    var t = [];
    var th = this;
    $http.post('/api/interviews', {
      libelle: libelle,
      intervenant: intervenant,
      contenu: contenu,
      id_theme: theme
    }).then(function (data) {
      console.log("Interview bi Bakhna");

      var i;
      var j = 0;
      for (i = 0; i < taille; i++) {
        //j=i;
        console.log('Question yi', tab[i]);
        $http.post('/api/questions', {
            titre: tab[i],
            id_interview: data.data._id
          },
          //th.j = i,
          //console.log("1",th.j),
          t.push(i),

        ).then(function (datas) {
          console.log("datass", datas.data._id)
          console.log("Questions yi Bakhna");
          console.log('Réponse yi', tabrep[t[j]]);
          $http.post('/api/reponses', {
              libelle: tabrep[t[j]],
              id_question: datas.data._id
            },
            j = j + 1,
          ).then(function () {
            console.log("Réponses yi Bakhna");
          });
          
        });
        window.location.reload();
      }

    });
  }

}

export default angular.module('emergenceInsightsApp.interviewprovider', [])
  .service('interviewsProvider', interviewsProvider)
  .name;
