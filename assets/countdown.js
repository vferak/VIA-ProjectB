(function ($) {
    "use strict";

    let countDownDate = new Date("Jan 15, 2021 12:00:00").getTime();

    let interval = setInterval(function () {

        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $("#js-countdown-timer-days").text(days);
        $("#js-countdown-timer-hours").text(hours);
        $("#js-countdown-timer-minutes").text(minutes);
        $("#js-countdown-timer-seconds").text(seconds);

        if (distance < 0) {
            clearInterval(interval);
            $(".countdown-timer-holder").html('<h4>Každou chvíli</h4>');
        }

    }, 1000);

})(jQuery);



