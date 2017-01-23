'use strict';
const angular = require('angular');

export class interviewsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('emergenceInsightsApp.interviews', [])
  .component('interviews', {
    // template: '<h1>Hello {{ $ctrl.message }}</h1>',
    template: require('./interviews.html'),
    bindings: { message: '<' },
    controller: interviewsComponent
  })
  .name;
