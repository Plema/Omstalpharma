$(document).ready(function () {
    if ($(window).width() < 1024) {
        $('.text-overflow').readmore({
            moreLink: ' <a href="javascript:void(0);" class="more">Читать полностью</a>',
            lessLink: ' <a href="javascript:void(0);" class="more">свернуть</a>',
            speed: 500,
            collapsedHeight: 781,
            afterToggle: function (trigger, element, expanded) {
                if (!expanded) { // The "Close" link was clicked
                    $('html, body').animate({
                        scrollTop: element.offset().top
                    }, {
                        duration: 100
                    });
                }
            }
        });
    }
})