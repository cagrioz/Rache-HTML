jQuery(function($) {
    "use strict";

    $(".rache-featured .featured-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        margin: 35,
        center: true,
        navText: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            950:{ 
                items: 2,
                nav: true
            }
        }
    });

});