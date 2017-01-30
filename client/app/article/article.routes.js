'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('article', {
      url: '/article/:libelle',
      template: '<article></article>'
    });
}
