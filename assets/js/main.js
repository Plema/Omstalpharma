document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {

    //Меню

    $('.open-menu').on('click', function () {
        $('.menu-mobile').toggleClass('active')
        $('.overlay-header').toggleClass('active');
    });

    $('.overlay-header').on('click', function () {
        $('.menu-mobile').removeClass('active')
        $(this).removeClass('active');
    });

    $('.menu-mobile a').on('click', function () {
        $('.menu-mobile').removeClass('active');
        $('.overlay-header').removeClass('active');
    });

    $('.section-form .mobile').on('click', function () {
        $('.form').addClass('active');
        $('.overlay').addClass('active');
    });

    $('.close').on('click', function () {
        $('.form').removeClass('active');
        $('.overlay').removeClass('active');
    })
    jQuery(function($){
        $(document).mouseup(function (e){
            var div = $(".section-form .form"); 
            if (!div.is(e.target) 
                && div.has(e.target).length === 0) { 
                div.removeClass('active'); 
                $('.overlay').removeClass('active');
            }
        });
    });


    //Попапы
    jQuery(function(a) {
        a(document).mouseup(function(b) {
            var c = a(".modall-body");
            c.is(b.target) || 0 !== c.has(b.target).length || (c.removeClass("active-modall"),
            a(".modall").removeClass("active-modall"),
            a(".body").removeClass("showing-modal"))
        })
    }),

    $('.close').on('click', function () {
        $(".modall").removeClass('active-modall');
        $('.body').removeClass('showing-modal');
    });

    $('.thank').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-thank").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    $('.politic').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-politic").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

});
