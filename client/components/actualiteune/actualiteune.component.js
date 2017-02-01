'use strict';
const angular = require('angular');

export class actualiteuneComponent {
  /*@ngInject*/
  jsFunctionProvider;
  actualiteProvider;
  actualitesPays;
  constructor(jsFunctionProvider,actualiteProvider) {
    this.message = 'World';
    this.jsFunctionProvider=jsFunctionProvider;
    this.actualiteProvider=actualiteProvider;
  }

   Init(){
    // console.log('paysprovider',this.paysProvider);
    this.actualiteProvider.listAlaUne().then(list => {
    this.actualitesPays=list;
    console.log('fi leuu khéwé');
    console.log('Actualités',this.actualitesPays);
    });

    angular.element(document)
      .ready(() => {

        console.log('document pilier',document);
        /* demo animated */
        this.jsFunctionProvider.demoAnimated();
        /* Document REady */
        this.jsFunctionProvider.onDocumentReady();


        /* on Page Load */
        this.jsFunctionProvider.onPageLoad();
        this.jsFunctionProvider.onPageResize();
        //this.jsFunctionProvider.onSliderArrowClick();
        this.jsFunctionProvider.onPageScroll();
        /*==============================*/
        /* 08 - BUTTONS, CLICKS, HOVERS */
        /*==============================*/
        this.jsFunctionProvider.topMenu();
        this.jsFunctionProvider.videoPlayBtn();
        this.jsFunctionProvider.videoPlayBtnBig();
        this.jsFunctionProvider.Popup();
        this.jsFunctionProvider.hoverAnimation();
        this.jsFunctionProvider.changeImageOnSpeaker();
        this.jsFunctionProvider.hoverAnimationOnConference();
        /*==================================================*/
        /* 09 - TIMES, TABS */
        /*==================================================*/
        this.jsFunctionProvider.Timers();
        this.jsFunctionProvider.CountDown();
        this.jsFunctionProvider.Tabs();
        /*=====================*/
        /* 10 - LIGHT-BOX */
        /*=====================*/
        this.jsFunctionProvider.activityIndicatorFunctions();
        this.jsFunctionProvider.closeButtonFunctions();
        this.jsFunctionProvider.overLay();
        this.jsFunctionProvider.capTion();
        this.jsFunctionProvider.arrOws();
        /*==================================================*/
        /* 11 - STYLE BAR */
        /*==================================================*/
        this.jsFunctionProvider.confButton();
        this.jsFunctionProvider.entryButton();

        /*==================================================*/
        /* 13 - AJAX CONTACT FORM */
        /*==================================================*/
        this.jsFunctionProvider.ajaxContactForm();




      });
  }

}
actualiteuneComponent .$inject=["jsFunctionProvider", "actualiteProvider"];
export default angular.module('emergenceInsightsApp.actualiteune', [])
  .component('actualiteune', {
    template: require('./atualite.html'),
    bindings: { message: '<' },
    controller: actualiteuneComponent,
    controllerAs: 'vm',
  })
  .name;
