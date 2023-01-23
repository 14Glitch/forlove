(function($) {
  
  "use strict";  

  $(window).on('load', function() {

     /* Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
      prependTo: '.navbar-header',
      parentTag: 'liner',
      allowParentLinks: true,
      duplicate: true,
      label: '',
      closedSymbol: '<i class="icon-arrow-right"></i>',
      openedSymbol: '<i class="icon-arrow-down"></i>',
    });

    /* ==========================================================================
    countdown timer
    ========================================================================== */

    const startDate = new Date("2022-08-06");
    const endDate = new Date();
    const diffInMilliseconds = endDate.getTime() - startDate.getTime();
    const diffInMonths = Math.floor(diffInMilliseconds / (1000 * 3600 * 24 * 30));
    const endDateWithoutMonths = new Date(endDate.setMonth(endDate.getMonth() - diffInMonths));
    const diffInMillisecondsWithoutMonths = endDateWithoutMonths.getTime() - startDate.getTime();
    const diffInSeconds = diffInMillisecondsWithoutMonths / 1000;
    const diffInMinutes = diffInSeconds / 60;
    const diffInHours = diffInMinutes / 60;
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInHoursRemaining = Math.floor(diffInHours % 24);
    const diffInMinutesRemaining = Math.floor(diffInMinutes % 60);
    const diffInSecondsRemaining = Math.floor(diffInSeconds % 60);

     jQuery('#clock').countdown('2022/8/6 15:50:00',function(event){
      var $this=jQuery(this).html(event.strftime(''
      +`<div class="time-entry months"><span>${diffInMonths}</span> Months</div> `
      +`<div class="time-entry days"><span>${diffInDays}</span> Days</div> `
      +`<div class="time-entry hours"><span>${diffInHoursRemaining}</span> Hours</div> `
      +`<div class="time-entry minutes"><span>${diffInMinutesRemaining}</span> Minutes</div> `
      +`<div class="time-entry seconds"><span>${diffInSecondsRemaining}</span> Seconds</div> `));
    });

    /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });
    wow.init();

    // one page navigation 
    $('.onepage-nev').onePageNav({
            currentClass: 'active'
    }); 

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

  });      

}(jQuery));
