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
    console.log('init',this);



  }

  Init() {
    //this.listTheme=[];


    document.querySelector('header').style.backgroundColor = '#222'

    if(this.themeprovider.listTheme==null){
      this.themeprovider.listThemes().then(list => {
        this.listTheme=list;
        this.themeprovider.listTheme=list;


        console.log('themes', this.listTheme)



      });
    }
    else{
      this.listTheme=this.themeprovider.listTheme
      console.log('themes non vide', this.listTheme)
    }



  }



}
export class PiliersComponent {
  jsFunctionProvider;

  /*@ngInject*/
  constructor(jsFunctionProvider) {
    //this.socket = socket;

    this.jsFunctionProvider=jsFunctionProvider;

    console.log('pilier',this);


  }

  Init(){
    document.querySelector('header').style.backgroundColor= '#222';
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
PilierComponent.$inject = ["themeProvider"];
PiliersComponent.$inject = [ "jsFunctionProvider"];

export default angular.module('emergenceInsightsApp.pilier', [uiRouter])
  .config(routes)
  // .component('pilier', {
  //   template: require('./pilier.html'),
  //   controller: PilierComponent,
  //   controllerAs: 'vm'

  // })
  .component('action', {
    template: require('./templates/action.html'),
    controller: PiliersComponent,
    controllerAs: 'vm'

  })
  .component('leadership', {
    template: require('./templates/leadership.html'),
    controller: PiliersComponent,
    controllerAs: 'vm'

  })
  .component('secteur', {
    template: require('./templates/secteur_support.html'),
    controller: PiliersComponent,
    controllerAs: 'vm'

  })
  .component('moteurs', {
    template: require('./templates/moteur.html'),
    controller: PiliersComponent,
    controllerAs: 'vm'

  })
  .component('developpement', {
    template: require('./templates/developpement.html'),
    controller: PiliersComponent,
    controllerAs: 'vm'

  })

  .name;

