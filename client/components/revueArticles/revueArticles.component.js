'use strict';
const angular = require('angular');

export class revueArticlesComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('emergenceInsightsApp.revueArticles', [])
  .component('revueArticles', {
    // template: '<h1>Hello {{ $ctrl.message }}</h1>',
    template: require('./revueArticles.html'),
    bindings: { message: '<' },
    controller: revueArticlesComponent
  })
  .name;
