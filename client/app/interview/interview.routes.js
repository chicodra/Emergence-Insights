'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('interview', {
      url: '/interview',
      template: '<interview></interview>'
    });
}
