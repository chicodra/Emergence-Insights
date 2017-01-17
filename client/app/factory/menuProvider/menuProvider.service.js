'use strict';
const angular = require('angular');

/*@ngInject*/
export function menuProviderService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
}

export default angular.module('emergenceInsightsApp.menuProvider', [])
  .service('menuProvider', menuProviderService)
  .name;
