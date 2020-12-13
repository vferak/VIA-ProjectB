(function ($) {
    "use strict";

    var nav = $('.navbar');
    var navBgThreshold = 99;

    if ($(window).scrollTop() > navBgThreshold) {
        nav.addClass("bg-black");
    }

    $(window).on('scroll', function () {
        var currentTop = $(window).scrollTop();

        if (currentTop > navBgThreshold) {
            nav.addClass("bg-black");
        } else {
            nav.removeClass("bg-black");
        }
    });

})(jQuery);



