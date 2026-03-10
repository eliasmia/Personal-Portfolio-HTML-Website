/*===animated===*/
var wow = new WOW(
    {
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false // trigger animations on mobile devices (true is default)
    }
);
wow.init();

/*======one Page Nav =========*/
jQuery('.scroll').onePgaeNav({
  wrapper: '#onepage-nav'
});


/*======Jquery sticky top=========*/
jQuery(".header").sticky({ topSpacing: 0 });

/*======Back to Top=========*/
jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
        jQuery('.scrollup').fadeIn();
    } else {
        jQuery('.scrollup').fadeOut();
    }
});

jQuery('.scrollup').click(function () {
    jQuery("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

/*====== Owl Testinomials =========*/
jQuery(window).on("load", function () {
    $('#owl-testinomials').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        // mouseDrag: false,
        items: 1,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true
    });
});


/*====== Slider =========*/
jQuery(document).ready(function () {
    $('#slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
    });
});

/*=== Remove Class navigation for mobile navi ===*/
$(document).ready(function () {
    $(".navigation ul li a").click(function () {
        $(".navigation").removeClass("show");
    });
});

/*========= Loader =========*/
jQuery(window).on("load", function () {
  jQuery(".container-loader").delay(1500).fadeOut("slow");
});

/*========= Counter =========*/
jQuery(document).ready(function () {
    (function($) {
        $('.count-num').rCounter();
    })(jQuery);
});

/*========= MixItUp =========*/
$(document).ready(function () {
    // Instantiate MixItUp:
     $('.ourPortfolio').mixItUp({
         selectors: {
             target: '.portfolio-item'
         }
     });
 });

/*===Drop Down Menu ===*/
jQuery(document).ready(function() {
    jQuery('.navigation').meanmenu();
});
