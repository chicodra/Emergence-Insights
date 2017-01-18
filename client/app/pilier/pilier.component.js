'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './pilier.routes';

export class PilierComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('emergenceInsightsApp.pilier', [uiRouter])
  .config(routes)
  // .component('pilier', {
  //   template: require('./pilier.html'),
  //   controller: PilierComponent,
  //   controllerAs: 'pilierCtrl'
  // })
  .name;
