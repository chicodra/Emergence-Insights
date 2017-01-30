'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider

    .state('indice', {
      url: '/indice',
      template: require('./indice.html'),
      // controller: 'LoginController',
      // controllerAs: 'vm'
    })
   
}
