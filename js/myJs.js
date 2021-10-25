$('document').ready(function(){

      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        effect:"fade",
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
      });


    var untoldSwiper = new Swiper(".untoldSwiper", {
        spaceBetween: 0,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
      });


      $('.nav-link').on('click', function(event) {
        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
      });

      $('.js-scroll-trigger').on('click', function(){
          if($(window).width() < 974) {
            $('.navbar-collapse').collapse('hide');
            $(".navbar-toggler-right").css("display", "inline-block");
            $(".swiper-button-next").css("display", "block");
            $(".swiper-button-prev").css("display", "block");
            $(".swiper-text").css("display", "block");
        }
      });


      $('.navbar-toggler-right').on('click', function(){

        $(".navbar-toggler-right").css("display", "none");
        $(".swiper-button-next").css("display", "none");
        $(".swiper-button-prev").css("display", "none");
        $(".swiper-text").css("display", "none");
        if($("#navbarCollapse1").hasClass('.hide')){
          $(".navbar-toggler-right").css("display", "inline-block");
          $(".swiper-button-next").css("display", "block");
          $(".swiper-button-prev").css("display", "block");
          $(".swiper-text").css("display", "block");
        }
      })



        $('.click-me-monolink').click(function(){
           $('.first-row').css('display', 'none');
           $('.second-row').css('display', 'block');
           $('.click-back-monolink').css('display', 'block');
           $('.click-me-monolink').css('display', 'none');
        });

        $('.click-back-monolink').click(function(){
          $('.click-me-monolink').css('display', 'block');
          $('.first-row').css('display', 'block');
          $('.second-row').css('display', 'none');
          $('.click-back-monolink').css('display', 'none');
        });


        $('.click-me-lost-frequencies').click(function(){
             $('.first-lost-row').css('display','none');
             $('.second-lost-row').css('display','block');
             $('.third-lost-row').css('display', 'none');
             $('.fourth-lost-row').css('display', 'none');

             $('.click-me-lost-frequencies').css('display', 'none');
             $('.back-lost-frequencies').css('display', 'block');
             $('.back-2-lost-frequencies').css('display', 'none');
             $('.back-3-lost-frequencies').css('display', 'none');
             $('.more-lost-frequencies').css('display', 'block');
             $('.even-more-lost-frequencies').css('display', 'none');
         });

         $('.back-lost-frequencies').click(function(){
             $('.first-lost-row').css('display','block');
             $('.second-lost-row').css('display','none');
             $('.third-lost-row').css('display', 'none');
             $('.fourth-lost-row').css('display', 'none');

             $('.click-me-lost-frequencies').css('display', 'block');
             $('.back-lost-frequencies').css('display', 'none');
             $('.back-2-lost-frequencies').css('display', 'none');
             $('.back-3-lost-frequencies').css('display', 'none');
             $('.more-lost-frequencies').css('display', 'none');
             $('.even-more-lost-frequencies').css('display', 'none');
         });

         $('.more-lost-frequencies').click(function(){
             $('.first-lost-row').css('display','none');
             $('.second-lost-row').css('display','none');
             $('.third-lost-row').css('display', 'block');
             $('.fourth-lost-row').css('display', 'none');

             $('.click-me-lost-frequencies').css('display', 'none');
             $('.back-lost-frequencies').css('display', 'none');
             $('.back-2-lost-frequencies').css('display', 'block');
             $('.back-3-lost-frequencies').css('display', 'none');
             $('.more-lost-frequencies').css('display', 'none');
             $('.even-more-lost-frequencies').css('display', 'block');
         });


          $('.back-2-lost-frequencies').click(function () {
             $('.first-lost-row').css('display', 'none');
             $('.second-lost-row').css('display','block');
             $('.third-lost-row').css('display', 'none');
             $('.fourth-lost-row').css('display', 'none');

             $('.click-me-lost-frequencies').css('display', 'none');
             $('.back-lost-frequencies').css('display', 'block');
             $('.back-2-lost-frequencies').css('display', 'none');
             $('.back-3-lost-frequencies').css('display', 'none');
             $('.more-lost-frequencies').css('display', 'block');
             $('.even-more-lost-frequencies').css('display', 'none');
         });

         $('.even-more-lost-frequencies').click(function(){
             $('.first-lost-row').css('display','none');
             $('.second-lost-row').css('display','none');
             $('.third-lost-row').css('display', 'none');
             $('.fourth-lost-row').css('display', 'block');

             $('.click-me-lost-frequencies').css('display', 'none');
             $('.back-lost-frequencies').css('display', 'none');
             $('.back-2-lost-frequencies').css('display', 'none');
             $('.back-3-lost-frequencies').css('display', 'block');
             $('.more-lost-frequencies').css('display', 'none');
             $('.even-more-lost-frequencies').css('display', 'none');
         });

         $('.back-3-lost-frequencies').click(function () {
             $('.first-lost-row').css('display', 'none');
             $('.second-lost-row').css('display','none');
             $('.third-lost-row').css('display', 'block');
             $('.fourth-lost-row').css('display', 'none');

             $('.click-me-lost-frequencies').css('display', 'none');
             $('.back-lost-frequencies').css('display', 'none');
             $('.back-2-lost-frequencies').css('display', 'block');
             $('.back-3-lost-frequencies').css('display', 'none');
             $('.more-lost-frequencies').css('display', 'block');
             $('.even-more-lost-frequencies').css('display', 'none');
         });


        if ($(window).width() < 960) {
          $('.fas-bar').css('color', 'black');

          $('.fas-bar').click(function(){
            $('.navbar.top-bar').css('background-color', 'white');
            $('.fas-bar').css('display', 'none');
            $('.sps--abv').css('background-color', 'white');
          });

          $('.nav-link').click(function(){
            $('.fas-bar').css('display', 'block');
          })
        }

        if ($(window).width() < 960) {
          $('.fas-bar').css('display', 'none');
        }
});

/* ========================================================================
* ScrollPos-Styler v0.6
* https://github.com/acch/scrollpos-styler
* ========================================================================
* Copyright 2015 Achim Christ
* Licensed under MIT (https://github.com/acch/scrollpos-styler/blob/master/LICENSE)
* ======================================================================== */

// JSHint directives
/* exported ScrollPosStyler */

var ScrollPosStyler = (function(document, window) {
"use strict";

/* ====================
* private variables
* ==================== */
var scrollPosY = 0,
   busy = false,
   onTop = true,

   // toggle style / class when scrolling below this position (in px)
   scrollOffsetY = 1,

   // choose elements to apply style / class to
   elements = document.getElementsByClassName("sps");


/* ====================
* private funcion to check scroll position
* ==================== */
function onScroll() {
 // ensure that events don't stack
 if (!busy) {
   // get current scroll position from window
   scrollPosY = window.pageYOffset;

   // if we were above, and are now below scroll position...
   if (onTop && scrollPosY > scrollOffsetY) {
     // suspend accepting scroll events
     busy = true;

     // remember that we are below scroll position
     onTop = false;

     // asynchronuously add style / class to elements
     window.requestAnimationFrame(belowScrollPos);

   // if we were below, and are now above scroll position...
   } else if (!onTop && scrollPosY <= scrollOffsetY) {
     // suspend accepting scroll events
     busy = true;

     // remember that we are above scroll position
     onTop = true;

     // asynchronuously add style / class to elements
     window.requestAnimationFrame(aboveScrollPos);
   }
 }
}


/* ====================
* private function to style elements when above scroll position
* ==================== */
function aboveScrollPos() {
 // iterate over elements
 // for (var elem of elements) {
 for (var i = 0; elements[i]; ++i) { // chrome workaround
   // add style / class to element
   elements[i].classList.add("sps--abv");
   elements[i].classList.remove("sps--blw");
 }

 // resume accepting scroll events
 busy = false;
}

/* ====================
* private function to style elements when below scroll position
* ==================== */
function belowScrollPos() {
 // iterate over elements
 // for (var elem of elements) {
 for (var i = 0; elements[i]; ++i) { // chrome workaround
   // add style / class to element
   elements[i].classList.add("sps--blw");
   elements[i].classList.remove("sps--abv");
 }

 // resume accepting scroll events
 busy = false;
}


/* ====================
* public function to initially style elements based on scroll position
* ==================== */
var pub = {
 init: function() {
   // suspend accepting scroll events
   busy = true;

   // get current scroll position from window
   scrollPosY = window.pageYOffset;

   // if we are below scroll position...
   if (scrollPosY > scrollOffsetY) {
     // remember that we are below scroll position
     onTop = false;

     // asynchronuously add style / class to elements
     window.requestAnimationFrame(belowScrollPos);

   // if we are above scroll position...
   } else { // (scrollPosY <= scrollOffsetY)
     // remember that we are above scroll position
     onTop = true;

     // asynchronuously add style / class to elements
     window.requestAnimationFrame(aboveScrollPos);
   }
 }
};


/* ====================
* main initialization
* ==================== */
// add initial style / class to elements when DOM is ready
document.addEventListener("DOMContentLoaded", function() {
 // defer initialization to allow browser to restore scroll position
 window.setTimeout(pub.init, 1);
});

// register for window scroll events
window.addEventListener("scroll", onScroll);


return pub;
})(document, window);
