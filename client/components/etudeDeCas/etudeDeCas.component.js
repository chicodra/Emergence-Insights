'use strict';
const angular = require('angular');

export class etudeDeCasComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('emergenceInsightsApp.etudeDeCas', [])
  .component('etudeDeCas', {
    // template: '<h1>Hello {{ $ctrl.message }}</h1>',
    template: require('./etudedecas.html'),
    bindings: { message: '<' },
    controller: etudeDeCasComponent
  })
  .name;
