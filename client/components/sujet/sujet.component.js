'use strict';
const angular = require('angular');

export class sujetComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('emergenceInsightsApp.sujet', [])
  .component('sujet', {
    // template: '<h1>Hello {{ $ctrl.message }}</h1>',
    template: require('./sujet.html'),
    bindings: { message: '<' },
    controller: sujetComponent
  })
  .name;
