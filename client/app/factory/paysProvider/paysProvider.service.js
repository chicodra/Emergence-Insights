'use strict';
const angular = require('angular');

/*@ngInject*/
export function paysProviderService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
}

export default angular.module('emergenceInsightsApp.paysProvider', [])
  .service('paysProvider', paysProviderService)
  .name;
