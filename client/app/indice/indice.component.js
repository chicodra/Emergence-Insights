'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './indice.routes';

export class IndiceComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('emergenceInsightsApp.indice', [uiRouter])
  .config(routes)
  // .component('indice', {
  //   template: require('./indice.html'),
  //   controller: IndiceComponent,
  //   controllerAs: 'indiceCtrl'
  // })
  .name;
