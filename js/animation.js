/*  https://css-tricks.com/slide-in-as-you-scroll-down-boxes/ */
(function ($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

var win = $(window);

var allMods = $(".animate");

allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible");
    }
});

win.on("scroll", function (event) {

    allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            if (el[0].classList.contains("to-slide-left")) {
                el.addClass("slide-in-from-left");
            } else if (el[0].classList.contains("to-slide-right")) {
                el.addClass("slide-in-from-right");
            } else if (el[0].classList.contains("to-slide-bottom")) {
                el.addClass("slide-in-from-bottom");
            } else if (el[0].classList.contains("to-slide-bottom-light")) {
                el.addClass("slide-in-from-bottom-light");
            }
        }
    });

});