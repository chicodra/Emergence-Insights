'use strict';

export default function($stateProvider) {
  'ngInject';

  
  $stateProvider
    // .state('pilier', {
    //   url: '/pilier',
    //   template: '<pilier></pilier>'

    // })

    .state('leadership', {
      url: '/pilier/leadership',

      template: '<leadership></leadership>',

  })
    .state('action', {
      url: '/pilier/action',
      template: '<action></action>',

    })
    .state('moteur', {
      url: '/pilier/moteur',
      template: '<moteurs></moteurs>',

})
    .state('secteur', {
      url: '/pilier/secteur',
      template: '<secteur></secteur>',

    })
    .state('developpement', {
      url: '/pilier/developpement',
      template: '<developpement></developpement>',
    });
}
