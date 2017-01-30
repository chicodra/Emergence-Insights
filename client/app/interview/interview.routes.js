'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('interview', {
      url: '/interview/:libelle',
      template: '<interview></interview>'
    });
}
