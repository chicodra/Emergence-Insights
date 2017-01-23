'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './pays.routes';

export class PaysComponent {
  /*@ngInject*/
  paysProvider;
  listPays;
  jsFunctionProvider;
  constructor(paysProvider,jsFunctionProvider) {
    this.message = 'Hello';
    this.paysProvider=paysProvider;
    this.jsFunctionProvider=jsFunctionProvider;
    console.log('this',this);
  }


  Init(){

    //this.listTheme=[];
    document.querySelector('header').style.backgroundColor = '#222'

    //this.listPays=[];
    if(this.paysProvider.listpays==null){
      this.paysProvider.listPays().then(list => {
        this.listPays=list;

        console.log('pays vide', this.listPays)





      });
    }
    else{
      this.listPays=this.paysProvider.listays
      console.log('pays non vide', this.listPays)
    }
    angular.element(document)
      .ready(() => {

        console.log('document pilier',document);
        /* Document REady */
        this.jsFunctionProvider.onDocumentReady();


        /* on Page Load */
        this.jsFunctionProvider.onPageLoad();
        this.jsFunctionProvider.onPageResize();
        this.jsFunctionProvider.onSliderArrowClick();
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
export class InfoPaysController{
  paysProvider;
  pays;
  params
  jsFunctionProvider
  constructor(paysProvider,$stateParams,jsFunctionProvider) {
    this.message = 'Hello';
    this.paysProvider=paysProvider;
    this.params=$stateParams;
    this.jsFunctionProvider=jsFunctionProvider;

    console.log('this',this);
  }
  Init(){

    angular.element(document)
      .ready(() => {

        console.log('document pilier',document);
        /* Document REady */
        this.jsFunctionProvider.onDocumentReady();


        /* on Page Load */
        this.jsFunctionProvider.onPageLoad();
        this.jsFunctionProvider.onPageResize();
        this.jsFunctionProvider.onSliderArrowClick();
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

  // Init(){
  //   //this.listPays=[];
  //
  //
  //   this.paysProvider.listPays().then(list => {
  //     this.listPays=list;
  //
  //     console.log('pays', this.listPays)
  //
  //
  //
  //
  //   });
  // }
}

PaysComponent.$inject = ["paysProvider","jsFunctionProvider"];
InfoPaysController.$inject = ["paysProvider","$stateParams","jsFunctionProvider"];
export default angular.module('emergenceInsightsApp.pays', [uiRouter])
  .config(routes)
  .component('pays', {
    template: require('./pays.html'),
    controller: PaysComponent,
    controllerAs: 'vm'
  })
  .component('infopays', {
  template: require('./infoPays.html'),
  controller: InfoPaysController,
  controllerAs: 'vm'
})
  .name;
