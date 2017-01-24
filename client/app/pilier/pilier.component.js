'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './pilier.routes';
export class PilierComponent {
  /*@ngInject*/
  themeprovider;
  listTheme;

  constructor(themeProvider) {
    
    this.themeprovider=themeProvider;


  }


  Init(){
    //this.listTheme=[];
   
     this.themeprovider.listThemes().then(list => {
       this.listTheme=list;

      console.log('themes', this.listTheme)




     });
  }

}
PilierComponent.$inject = ["themeProvider"];

export default angular.module('emergenceInsightsApp.pilier', [uiRouter])
  .config(routes)
  .config(function($provide) {
    $provide.decorator('$state', function($delegate, $stateParams) {
        $delegate.forceReload = function() {
            return $delegate.go($delegate.current, $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });
        };
        return $delegate;
    });
})
  .component('pilier', {
    template: require('./pilier.html'),
    controller: PilierComponent,
    controllerAs: 'vm'

  })
  .name;
