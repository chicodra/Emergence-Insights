'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider

    .state('focus', {
      url: '/indice/focus',
      template: require('./templates/focus_pays.html'),
      // controller: 'LoginController',
      // controllerAs: 'vm'
    })
    .state('composantes', {
      url: '/pilier/composantes',
      template: require('./templates/composantes.html'),
      // controller: 'LoginController',
      // controllerAs: 'vm'
    });
}
