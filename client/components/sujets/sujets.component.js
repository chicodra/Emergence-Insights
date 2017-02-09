'use strict';
const angular = require('angular');

export class sujetsComponent {
  /*@ngInject*/
  jsFunctionProvider;
  sujetProvider;
  userProvider;
  listeSujets;
  listeScatSujets;
  sousCategorieProvider;
  urlScat;
  constructor(jsFunctionProvider,sujetProvider,userProvider,sousCategorieProvider,$stateParams) {
    this.jsFunctionProvider=jsFunctionProvider;
    this.sujetProvider=sujetProvider;
    this.userProvider=userProvider;
    this.message = 'Hello';
    this.sousCategorieProvider = sousCategorieProvider;
    this.urlScat = $stateParams.sscat;
    console.log('forum',this);
  }
  Init() {
    //this.listTheme=[];
    var th=this;
    setTimeout(function () {
      th.getSubjects();
      th.getScatSubjects()
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

 getScatSubjects(){
   if(this.sujetProvider.SousCat == null){
     this.sousCategorieProvider.getSousBynom(this.urlScat).then(list =>{
      var suj = this.sujetProvider;
      
        suj.getSujetByCat(list[0]._id)
        .then(liste => {
          this.listeScatSujets = liste;
          console.log("sanssssssssssssssssssssssssssssssssssssssss", this.listeScatSujets);
        });
      
     // this.listeScatSujets=list;
    })
   }
   else{
    this.sujetProvider.getSujetByCat(this.sousCategorieProvider.SousCat._id).then(list =>{
      console.log("sama yosssss",list);
      
      this.listeScatSujets=list;
    })
   }
    

  }
  partageSujet(sujet){
      this.sujetProvider.Lesujet = sujet;
  }

}
sujetsComponent.$inject=["jsFunctionProvider","sujetProvider","userProvider","sousCategorieProvider","$stateParams"];
export default angular.module('emergenceInsightsApp.sujets', [])
  .component('sujets', {
    // template: '<h1>Hello {{ $ctrl.message }}</h1>',
    template: require('./sujets.html'),
    bindings: { message: '<' },
    controller: sujetsComponent,
    controllerAs: 'vm'
  })
  .name;
