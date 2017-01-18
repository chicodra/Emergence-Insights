'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './pays.routes';

export class PaysComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('emergenceInsightsApp.pays', [uiRouter])
  .config(routes)
  .component('pays', {
    template: require('./pays.html'),
    controller: PaysComponent,
    controllerAs: 'vm'
  })
  .name;
