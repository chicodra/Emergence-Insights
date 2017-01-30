'use strict';
const angular = require('angular');

export class ficheDeBonnePratiquesComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('emergenceInsightsApp.ficheDeBonnePratiques', [])
  .component('ficheDeBonnePratiques', {
    // template: '<h1>Hello {{ $ctrl.message }}</h1>',
    template: require('./fiche.html'),
    bindings: { message: '<' },
    controller: ficheDeBonnePratiquesComponent
  })
  .name;
