(function ($) {
    "use strict";

    let nav = $('.navbar');
    let navBgThreshold = 99;

    if ($(window).scrollTop() > navBgThreshold) {
        nav.addClass("bg-black");
    }

    $(window).on('scroll', function () {
        let currentTop = $(window).scrollTop();

        if (currentTop > navBgThreshold) {
            nav.addClass("bg-black");
        } else {
            nav.removeClass("bg-black");
        }
    });

})(jQuery);



