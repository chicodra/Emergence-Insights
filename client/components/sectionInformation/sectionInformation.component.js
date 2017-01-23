'use strict';
const angular = require('angular');

export class sectionInformationComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('emergenceInsightsApp.sectionInformation', [])
  .component('sectionInformation', {
    // template: '<h1>Hello {{ $ctrl.message }}</h1>',
    template: require('./si.html'),
    bindings: { message: '<',
                titre: '<',
                contenu: '<'
     },
    controller: sectionInformationComponent
  })
  .name;
