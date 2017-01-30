'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('actualite', {
      url: '/actualite/:libelle',
      template: '<actualite></actualite>'
    });
}
