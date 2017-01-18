'use strict';
const angular = require('angular');

/*@ngInject*/
export function themeProviderService($http,$q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  'ngInject';
  this.listThemes=function()
  {
    var deferred=$q.defer();
    var listTheme=[];
    $http.get('/api/themes',{
      cache: true
    }).then(function(list) {

      listTheme=list.data;

      deferred.resolve(listTheme);

    });
    listTheme=deferred.promise;
    console.log("cycle",listTheme);

    return listTheme;

  }

}

export default angular.module('emergenceInsightsApp.themeProvider', [])
  .service('themeProvider', themeProviderService)
  .name;
