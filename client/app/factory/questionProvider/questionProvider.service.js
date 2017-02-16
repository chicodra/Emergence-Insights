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
   this.modifierQuestion = function (tab, tabs, taille) {
    var deferred = $q.defer();
    var i;
    for (i = 0; i < taille; i++) {
      console.log('lou khew fi', tabs[i]);
      console.log('lou khew fi', tab[i]);
      $http.put('/api/questions/' + tabs[i], {
        titre: tab[i]
      }).then(function () {
        console.log("Questions yi Bakhna");
      });
    }
  }
}

export default angular.module('emergenceInsightsApp.questionProvider', [])
  .service('questionProvider', questionProviderService)
  .name;
