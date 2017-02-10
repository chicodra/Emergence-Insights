'use strict';
const angular = require('angular');

export class usersComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('emergenceInsightsApp.users', [])
  .component('users', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: usersComponent
  })
  .name;
