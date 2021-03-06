'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './pays.routes';
var p;
export class PaysComponent {
  /*@ngInject*/
  paysProvider;
  listPays;
  jsFunctionProvider;

  constructor(paysProvider, jsFunctionProvider) {
    this.message = 'Hello';
    this.paysProvider = paysProvider;
    this.jsFunctionProvider = jsFunctionProvider;
    console.log('this', this);

  }


  Init() {

    //this.listTheme=[];

    //this.listPays=[];
    this.paysProvider.listPays().then(list => {
      this.listPays = list;
      var verre;
      for (var i = 0; i < this.listPays.length - 1; i++) {
        for (var j = i + 1; j < this.listPays.length; j++) {
          if (Number(this.listPays[i]._id) > Number(this.listPays[j]._id)) {
            this.verre = this.listPays[i];
            this.listPays[i] = this.listPays[j];
            this.listPays[j] = this.verre;

          }
        }


      }
      console.log('nombre pays', this.listPays.length);

      console.log('paysssss vide', this.listPays)




    });
    // if(this.paysProvider.listpays==null){

    // }
    // else{
    //   this.listPays=this.paysProvider.listpays
    //   console.log('pays non vide', this.listPays)

    // }
    angular.element(document)
      .ready(() => {

        console.log('document pilier', document);
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


    setTimeout(function () {
      document.querySelector('header').style.backgroundColor = '#222';
    }, 100);
  }

  modulo(cpt) {
    if (cpt % 2 == 0) {
      return 0;
    }
    return 1;
  }
}
export class InfoPaysController {
  paysProvider;
  pays;
  params
  jsFunctionProvider;
  actualiteProvider;
  actualitesPays;
  documentationsPays;
  documentationProvider;
  agendasPays;
  agendaProvider;
  nb;
  constructor(paysProvider, $stateParams, jsFunctionProvider, actualiteProvider, documentationProvider, agendaProvider) {
    this.message = 'Hello';
    this.paysProvider = paysProvider;
    this.params = $stateParams;
    this.jsFunctionProvider = jsFunctionProvider;
    this.actualiteProvider = actualiteProvider;
    this.documentationProvider = documentationProvider;
    this.agendaProvider = agendaProvider;
    this.pays = null;
    this.nb = 0;
    this.getPays(this.params.paysName);
    console.log('get pays by name 3', p);

    console.log('this', this);
  }

  getPays(paysName) {
    //console.log(paysName,list);
    this.paysProvider.getPaysByName(paysName).then(list => {
      console.log('get pays by name', this);
      p = list;
      this.pays = list[0];
      console.log('get pays by name 2', this.pays);
      // this.getActualitesPays(this.pays._id);
      this.getDocumentationsPays(this.pays._id);
      this.getAgendasPays(this.pays._id);


      console.log('get pays by name 4', p);

    });

  }
  getActualitesPays(id) {
    this.actualiteProvider.listActualitesPays(id).then(list => {
      this.actualitesPays = list;

      console.log('actualites vide', this.actualitesPays)





    });

  }
  getDocumentationsPays(id) {
    this.documentationProvider.listDocumentationPays(id).then(list => {
      this.documentationsPays = list;

      console.log('documentation vide', this.documentationsPays)
    });

  }
  getAgendasPays(id) {
    this.agendaProvider.listAgendasPays(id).then(list => {
      this.agendasPays = list;

      console.log('agendas vide', this.documentationsPays)





    });

  }
  Init() {
    // console.log('paysprovider',this.paysProvider);
    console.log('pays', this.pays);


    //window.setTimeout(this.getActualitesPays(this.pays._id),100);
    // this.getActualitesPays(this.pays._id);
    // this.getDocumentationsPays(this.pays._id);
    // this.getAgendasPays(this.pays._id);


    angular.element(document)
      .ready(() => {

        console.log('document pilier', document);
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


    setTimeout(function () {
      document.querySelector('header').style.backgroundColor = '#222';
    }, 100);

  }

}

PaysComponent.$inject = ["paysProvider", "jsFunctionProvider"];
InfoPaysController.$inject = ["paysProvider", "$stateParams", "jsFunctionProvider", "actualiteProvider", "documentationProvider",
  "agendaProvider"
];
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
