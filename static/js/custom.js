(function($) {
    "use strict";

    // Scrolling w/ jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {

                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, "easeInOutExpo");

                return false;
            }
        }
    });

})(jQuery);

// Make header menu dark when scrolling past the landing image
$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > $(window).height() - $(".plane").height()) {
            $(".plane").fadeIn();
        } else {
            $(".plane").fadeOut();
        }
    });
});
