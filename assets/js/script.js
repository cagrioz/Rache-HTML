jQuery(function($) {
    "use strict";

    /* =========== Featured Slider =========== */
    $(".featured-slider").owlCarousel({
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
                nav: false,
                margin: 0
            },
            992:{ 
                items: 2,
                nav: true
            },
        }
    });

    /* =========== Featured Carousel =========== */
    $(".featured-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        nav: false,
        margin: 10,
        center: true,
        responsive: {
            0:{ items: 1, margin: 0 },
            768:{ items: 3 },
            1200:{ items: 5 },
        }
    });

    /* =========== Gallery Slider =========== */
    $(".gallery-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        nav: true,
        navText: false,
        margin: 0
    });

    /* =========== Responsive Menu =========== */
    $(".menu-btn").on("click", function() {
        $(".sidemenu").toggleClass("slidein"); 
        $(".wrapper").toggleClass("stop"); 
    });
    
    /* =========== Sidemenu Dropdown =========== */
    $(".mobile-menu ul").parent().addClass("menu-item-has-children");
    $(".mobile-menu li.menu-item-has-children > a").on("click",function(){
        $(this).next("ul").slideToggle();
        $(this).parent().siblings().find("ul").slideUp();
        return false;
    });

    /* =========== Mobile Navigation Dropdown =========== */
    $(".search-btn").on("click", function(e) {
        e.preventDefault();
        $(".search-popup").toggleClass("search-active");
        $('.search-popup input[type="search"]').focus();
    });


});