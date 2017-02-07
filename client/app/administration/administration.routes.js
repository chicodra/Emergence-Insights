'use strict';

export default function ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('administration', {
      url: '/administration',
      template: '<administration></administration>'
    })
    .state('editerarticle', {
      url: '/administration/editerarticle',
      template: '<editerarticle></editerarticle>'
    });
}
