$(document).ready(function () {
    if ($(window).width() > 480) {
        $('.text-news').matchHeight({
            byRow: false
        });

        $('.content-news').matchHeight({
            byRow: false
        });
    }
})