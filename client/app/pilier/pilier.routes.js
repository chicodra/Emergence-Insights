'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider

    .state('leadership', {
      url: '/pilier/leadership',
      template: require('./templates/leadership.html'),
      // controller: 'LoginController',
      // controllerAs: 'vm'
  })
    .state('action', {
      url: '/pilier/action',
      template: require('./templates/action.html'),
      // controller: 'LoginController',
      // controllerAs: 'vm'
    })
    .state('moteur', {
      url: '/pilier/moteur',
      template: require('./templates/moteur.html'),
      // controller: 'LoginController',
      // controllerAs: 'vm'
    })
    .state('secteur', {
      url: '/pilier/secteur',
      template: require('./templates/secteur_support.html'),
      // controller: 'LoginController',
      // controllerAs: 'vm'
    })
    .state('developpement', {
      url: '/pilier/developpement',
      template: require('./templates/developpement.html'),
      // controller: 'LoginController',
      // controllerAs: 'vm'
    });
}
