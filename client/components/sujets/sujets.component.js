'use strict';
const angular = require('angular');

export class sujetsComponent {
  /*@ngInject*/
  jsFunctionProvider;
  sujetProvider;
  userProvider;
  listeSujets;
  constructor(jsFunctionProvider,sujetProvider,userProvider) {
    this.jsFunctionProvider=jsFunctionProvider;
    this.sujetProvider=sujetProvider;
    this.userProvider=userProvider;
    this.message = 'Hello';
    console.log('forum',this);
  }
  Init() {
    //this.listTheme=[];
    var th=this;
    setTimeout(function () {
      th.getSubjects();

    },50);



    angular.element(document)
      .ready(() => {
        document.querySelector('header').style.backgroundColor = '#222';
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




      });

  }
  getSubjects(){
    this.sujetProvider.listSujets().then(list =>{
      console.log("liste sujets",list);
      this.listeSujets=list;
    })

  }

}
sujetsComponent.$inject=["jsFunctionProvider","sujetProvider","userProvider"];
export default angular.module('emergenceInsightsApp.sujets', [])
  .component('sujets', {
    // template: '<h1>Hello {{ $ctrl.message }}</h1>',
    template: require('./sujets.html'),
    bindings: { message: '<' },
    controller: sujetsComponent,
    controllerAs: 'vm'
  })
  .name;
