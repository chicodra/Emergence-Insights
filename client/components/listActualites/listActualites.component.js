'use strict';
const angular = require('angular');

export class listActualitesComponent {
  /*@ngInject*/
  jsFunctionProvider;
  actualiteProvider;
  actualitesPays;
  pays;
  getActualitesPays(id){
    //setTimeout(console.log('get actualites pays',id),5000);
    //console.log('get actualites pays',id);
    //setTimeout(function(){console.log('khaar lou yague',id)},5000);
    this.actualiteProvider.listActualitesPays(id).then(list => {
      this.actualitesPays=list;

      console.log('actualites vide', this.actualitesPays)





    });

  }

  constructor(jsFunctionProvider,actualiteProvider) {
    this.jsFunctionProvider=jsFunctionProvider;
    this.actualiteProvider=actualiteProvider;
    //this.actualitesPays=this.getActualitesPays(this.pays._id);

    //this.message = 'World';
    console.log('list actualites', this);
    //this.Init();
    var th=this;
    setTimeout(function(){console.log('khaar lou yague',th);
      function getActualitesPays(id){
        //setTimeout(console.log('get actualites pays',id),5000);
        //console.log('get actualites pays',id);
        //setTimeout(function(){console.log('khaar lou yague',id)},5000);
        th.actualiteProvider.listActualitesPays(id).then(list => {
          th.actualitesPays=list;

          console.log('actualites vide', th.actualitesPays)





        });

      }
      getActualitesPays(th.pays._id);

    },100);


  }
  Init(){
    // console.log('paysprovider',this.paysProvider);
    console.log('pays actualites',this.pays);




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


  // lo commence a jouer
}
listActualitesComponent.$inject=["jsFunctionProvider","actualiteProvider"];
export default angular.module('directives.listActualites', [])
  .component('listActualites', {
    template: require('./listActualites.html'),
    bindings: {
      pays: '='
   },
    controller: listActualitesComponent,
    controllerAs: 'vm',

  })
  .name;
