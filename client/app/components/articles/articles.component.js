'use strict';
const angular = require('angular');

export class articlesComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('emergenceApp.articles', [])
  .component('articles', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: articlesComponent
  })
  .name;
