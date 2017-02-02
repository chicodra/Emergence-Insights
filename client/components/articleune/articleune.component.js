'use strict';
const angular = require('angular');

export class articleuneComponent {
  /*@ngInject*/
  constructor(articleProvider, jsFunctionProvider) {
    this.message = 'World';
    this.articleProvider = articleProvider;
    this.jsFunctionProvider = jsFunctionProvider;
    this.nb = 0;
    console.log('Articles à la une', this);
  }
  Init() {
    //this.listTheme=[];


    this.articleProvider.listAlaUne().then(list => {
      this.listArticles = list;

      console.log('themes', this.listArticles)

      angular.element(document)
        .ready(() => {
          document.querySelector('header').style.backgroundColor = '';
          console.log('document main', document);
          /* demo animated */
          this.jsFunctionProvider.demoAnimated();
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

          this.jsFunctionProvider.globals();

          this.jsFunctionProvider.anchorsNav();


        });




    });
  }
}


export default angular.module('emergenceInsightsApp.articleune', [])
  .component('articleune', {
    template: require('./alaune.html'),
    bindings: {
      message: '<'
    },
    controller: articleuneComponent,
    controllerAs: 'vm'
  })
  .name;
