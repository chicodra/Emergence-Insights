'use strict';
const angular = require('angular');

export class listActualitesComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('emergenceInsightsApp.listActualites', [])
  .component('listActualites', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: listActualitesComponent
  })
  .name;
