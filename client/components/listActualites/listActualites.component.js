'use strict';
const angular = require('angular');

export class listActualitesComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }

  // lo commence a jouer 
}

export default angular.module('emergenceInsightsApp.listActualites', [])
  .component('listActualites', {
    template: require('./listActualites.html'),
    bindings: { 
      message: '<'
   },
    controller: listActualitesComponent,
    controllerAs: 'vm'
  })
  .name;
