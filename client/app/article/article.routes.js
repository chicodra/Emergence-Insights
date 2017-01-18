'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('article', {
      url: '/article',
      template: '<article></article>'
    });
}
