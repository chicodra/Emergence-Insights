'use strict';
const angular = require('angular');

/*@ngInject*/
export function notificationProviderService($http, $q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.listeNot = null;
  this.listNotification = function () {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/notifications', {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }
    this.GetNotificationByMessage= function (id) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/notifications/message/' + id, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }
}

export default angular.module('emergenceInsightsApp.notificationProvider', [])
  .service('notificationProvider', notificationProviderService)
  .name;
