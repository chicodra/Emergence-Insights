'use strict';
const angular = require('angular');

/*@ngInject*/
export function articleProviderService($http,$q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.listArticles=function () {
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/articles',{
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
    $http.get('/api/articles/une/'+true,{
      cache: true
    }).then(function(list) {
      //console.log("cycle",list);
      liste=list.data;
      deferred.resolve(liste);

    });
    liste=deferred.promise;

    return liste;

  }
  this.getArticleByName=function (titre) {
    var deferred=$q.defer();
    var liste=[];
    $http.get('/api/articles/titre/'+titre,{
      cache: true
    }).then(function(list) {
      console.log("cycle",list.data);
      liste=list.data;
      deferred.resolve(liste);

    });
    liste=deferred.promise;

    return liste;

  }
}

export default angular.module('emergenceInsightsApp.articleProvider', [])
  .service('articleProvider', articleProviderService)
  .name;
