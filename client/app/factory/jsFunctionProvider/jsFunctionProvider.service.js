'use strict';
const angular = require('angular');

/*@ngInject*/
export function jsFunctionProviderService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
  var swipers = [], winW, winH, winScr, _isresponsive, xsPoint = 480, smPoint = 768, mdPoint = 992, lgPoint = 1200, addPoint = 1600, _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);
  /*========================*/
  /* 02 - PAGE CALCULATIONS */
  /*========================*/
  function pageCalculations(){
    winW = $(window).width();
    winH = $(window).height();
    if($('.cmn-toggle-switch').is(':visible')) _isresponsive = true;
    else _isresponsive = false;
  }
  /*=================================*/
  /* 03 - FUNCTION ON DOCUMENT READY */
  /*=================================*/

  this.onDocumentReady=function (){
    console.log('on document ready');
    pageCalculations();
    //center all images inside containers
    $('.center-image').each(function(){
      var bgSrc = $(this).attr('src');
      //console.log(bgSrc);
      $(this).parent().addClass('background-block').css({'background-image':'url('+bgSrc+')'});
      $(this).hide();
    });

  }
  /*============================*/
  /* 04 - FUNCTION ON PAGE LOAD */
  /*============================*/
  this.onPageLoad=function () {
    console.log(' on page load')
    initSwiper();
    $('.isotope-container').isotope({itemSelector: '.item', masonry:{gutter:0,columnWidth:'.grid-sizer'}});
    if($(window).scrollTop()>0){
      $('.header').addClass('scrolled');
    } else {
      $('.header').removeClass('scrolled');
    }
    $(window).load(function(){
      console.log("fii init swiper");


      $('#loading').fadeOut();
      if($('#map-canvas').length==1){
        initialize('map-canvas');}


    });
  }
  /*==============================*/
  /* 05 - FUNCTION ON PAGE RESIZE */
  /*==============================*/
  function resizeCall(){
    pageCalculations();

    $('.swiper-container.initialized[data-slides-per-view="responsive"]').each(function(){
      var thisSwiper = swipers['swiper-'+$(this).attr('id')], $t = $(this), slidesPerViewVar = updateSlidesPerView($t);
      thisSwiper.params.slidesPerView = slidesPerViewVar;
      thisSwiper.reInit();
      var paginationSpan = $t.find('.pagination span');
      var paginationSlice = paginationSpan.hide().slice(0,(paginationSpan.length+1-slidesPerViewVar));
      if(paginationSlice.length<=1 || slidesPerViewVar>=$t.find('.swiper-slide').length) $t.addClass('pagination-hidden');
      else $t.removeClass('pagination-hidden');
      paginationSlice.show();
    });
  }
  this.onPageResize=function () {
    console.log('on page resizee')
    if(!_ismobile){
      $(window).resize(function(){
        resizeCall();
      });
    }
    else{
      window.addEventListener("orientationchange", function() {
        resizeCall();
      }, false);
    }
  }
  /*==============================*/
  /* 06 - FUNCTION ON PAGE SCROLL */
  /*==============================*/
  this.onPageScroll=function () {
    console.log('on page scroll');
    $(window).scroll(function(){
      if($(window).scrollTop()>0){
        $('.header').addClass('scrolled');
      } else {
        $('.header').removeClass('scrolled');
      }
    });
  }
  /*=====================*/
  /* 07 - SWIPER SLIDERS */
  /*=====================*/
  function initSwiper(){
    console.log('init swippers');
    var initIterator = 0;
    $('.swiper-container').each(function(){
      var $t = $(this);

      var index = 'swiper-unique-id-'+initIterator;

      $t.addClass('swiper-'+index + ' initialized').attr('id', index);
      $t.find('.pagination').addClass('pagination-'+index);

      var autoPlayVar = parseInt($t.attr('data-autoplay'),10);
      var centerVar = parseInt($t.attr('data-center'),10);
      var simVar = ($t.closest('.circle-description-slide-box').length)?false:true;

      var slidesPerViewVar = $t.attr('data-slides-per-view');
      if(slidesPerViewVar == 'responsive'){
        slidesPerViewVar = updateSlidesPerView($t);
      }
      else if(slidesPerViewVar!='auto') slidesPerViewVar = parseInt(slidesPerViewVar, 10);

      var loopVar = parseInt($t.attr('data-loop'),10);
      var speedVar = parseInt($t.attr('data-speed'),10);
      var initialSlideVar = parseInt($t.attr('data-initial-slide'),10);
      if(!initialSlideVar){initialSlideVar=0;}

      swipers['swiper-'+index] = new Swiper('.swiper-'+index,{
        speed: speedVar,
        pagination: '.pagination-'+index,
        loop: loopVar,
        paginationClickable: true,
        autoplay: autoPlayVar,
        slidesPerView: slidesPerViewVar,
        keyboardControl: true,
        calculateHeight: true,
        initialSlide: initialSlideVar,
        simulateTouch: simVar,
        centeredSlides: centerVar,
        roundLengths: true,
        onSlideChangeEnd: function(swiper){
          var activeIndex = (loopVar===true)?swiper.activeIndex:swiper.activeLoopIndex;
          var qVal = $t.find('.swiper-slide-active').attr('data-val');
          $t.find('.swiper-slide[data-val="'+qVal+'"]').addClass('active');
        },
        onSlideChangeStart: function(swiper){
          $t.find('.swiper-slide.active').removeClass('active');
          if($t.hasClass('thumbnails-preview')){
            var activeIndex = (loopVar===1)?swiper.activeLoopIndex:swiper.activeIndex;
            swipers['swiper-'+$t.next().attr('id')].swipeTo(activeIndex);
            $t.next().find('.current').removeClass('current');
            $t.next().find('.swiper-slide[data-val="'+activeIndex+'"]').addClass('current');
          }
        },
        onSlideClick: function(swiper){
          if($t.hasClass('thumbnails')) {
            swipers['swiper-'+$t.prev().attr('id')].swipeTo(swiper.clickedSlideIndex);
          }
        }
      });
      swipers['swiper-'+index].reInit();
      if($t.attr('data-slides-per-view')=='responsive'){
        var paginationSpan = $t.find('.pagination span');
        var paginationSlice = paginationSpan.hide().slice(0,(paginationSpan.length+1-slidesPerViewVar));
        if(paginationSlice.length<=1 || slidesPerViewVar>=$t.find('.swiper-slide').length) $t.addClass('pagination-hidden');
        else $t.removeClass('pagination-hidden');
        paginationSlice.show();
      }
      initIterator++;
    });

  }

  function updateSlidesPerView(swiperContainer){
    if(winW>=addPoint) return parseInt(swiperContainer.attr('data-add-slides'),10);
    else if(winW>=lgPoint) return parseInt(swiperContainer.attr('data-lg-slides'),10);
    else if(winW>=mdPoint) return parseInt(swiperContainer.attr('data-md-slides'),10);
    else if(winW>=smPoint) return parseInt(swiperContainer.attr('data-sm-slides'),10);
    else if(winW>=xsPoint) return parseInt(swiperContainer.attr('data-xs-slides'),10);
    else return parseInt(swiperContainer.attr('data-mob-slides'),10);
  }
  this.onSliderArrowClick=function () {
    console.log('init slider arrow')
    //swiper arrows
    $('.swiper-arrow-left').on("click", function(){
      swipers['swiper-'+$(this).parent().attr('id')].swipePrev();
    });

    $('.swiper-arrow-right').on("click", function(){
      swipers['swiper-'+$(this).parent().attr('id')].swipeNext();
    });
  }
  /*==============================*/
  /* 08 - BUTTONS, CLICKS, HOVERS */
  /*==============================*/
  // top menu
  this.topMenu=function () {
    $(".cmn-toggle-switch").on("click", function(){
      $(this).toggleClass("active");
      $('.header').toggleClass("active");
      $('.main-nav').slideToggle();
      return false;
    });
  }
  //video-play
  this.videoPlayBtn=function () {
    $('.play-btn').on("click", function(){
      var video = $(this).data('video');
      $(this).siblings('.movie').show();
      $(this).siblings('.movie').find('iframe').attr('src',video);
      return false;
    });
    $('.movie .close-button').on("click", function(){
      $(this).parent('.movie').hide();
      $(this).siblings('iframe').attr('src','about:blank');
      return false;
    });
  }
  //video-play big
  this.videoPlayBtnBig=function () {
    $('.video-bg').on("click", function(){
      var video = $(this).data('video');
      $(this).parents('.fullheight').find('iframe').attr('src',video).show();
      $(this).addClass('.active');
      return false;
    });
  }
  //popup
  this.Popup=function () {
    $(document).on("click", '.register-link', function(){
      $('.register-popup').show('slow');
      return false;
    });
    $('.search-link').on("click", function(){
      $(this).siblings('.search-popup').show('slow');
      return false;
    });
    $('.popup-close').on("click", function(){
      $(this).parents('.custom-popup').hide('slow');
      return false;
    });

  }
  //hover animation on conference
  this.hoverAnimation=function () {
    $(".conf-item").on({
      mouseenter: function () {
        $(this).find('.conf-autors').stop().slideToggle('slow');
      },
      mouseleave: function () {
        $(this).find('.conf-autors').stop().slideToggle('slow');
      }
    });
  }
  //change image on speaker
  this.changeImageOnSpeaker=function () {
    $(document).on({
      mouseenter: function () {
        var img = $(this).data("image");
        var $img_block = $(this).parents('.swiper-slide').find('.speaker-img');
        $img_block.css({'background-image':'url('+img+')'});
      },
      mouseleave: function () {
        var $img_block = $(this).parents('.swiper-slide').find('.speaker-img');
        var img_orig = $img_block.find('img').attr('src');
        $img_block.css({'background-image':'url('+img_orig+')'});
      }
    }, ".speaker-change img");
  }
  //hover animation on conference
  this.hoverAnimationOnConference=function () {
    $(".shedule-entry, .shedule-user").on({
      mouseenter: function () {
        $(this).parent('.shedule-block').addClass('active');
      },
      mouseleave: function () {
        $(this).parent('.shedule-block').removeClass('active');
      }
    });
  }
}

export default angular.module('emergenceInsightsApp.jsFunctionProvider', [])
  .service('jsFunctionProvider', jsFunctionProviderService)
  .name;
