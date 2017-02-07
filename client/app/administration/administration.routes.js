'use strict';

export default function ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('administration', {
      url: '/administration',
      template: '<administration></administration>'
    })
    .state('editerarticle', {
      url: '/editerarticle',
      template: '<editerarticle></editerarticle>'
    })
    .state('editerinterviews', {
      url: '/editerinterviews',
      template: '<editerinterviews></editerinterviews>'
    });
}
