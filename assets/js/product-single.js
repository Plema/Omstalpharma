$(document).ready(function () {
    if ($(window).width() < 768) {
        $('.list-overflow').readmore({
            moreLink: ' <a href="javascript:void(0);" class="more">Читать полностью</a>',
            lessLink: ' <a href="javascript:void(0);" class="more">свернуть</a>',
            speed: 500,
            collapsedHeight: 1154,
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

    if ($(window).width() < 1360) {
        $('.text-overflow').readmore({
            moreLink: ' <a href="javascript:void(0);" class="more">Читать полностью</a>',
            lessLink: ' <a href="javascript:void(0);" class="more">свернуть</a>',
            speed: 500,
            collapsedHeight: 614,
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

    $('.single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        appendArrows: $('.section-about .holder-btn'),
        prevArrow: '<button type="button" id="prev-05" class="btn-arrow prev"><i class="icon-arrows" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" id="next-05"class="btn-arrow next"><i class="icon-arrows-2" aria-hidden="true"></i></button>',
        asNavFor: '.preview',
        infinite: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                dots: true,
            }
        }]
    })
    $('.preview').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.single',
        focusOnSelect: true,
        infinite: true,
        arrows: false
    });

    $('.research').on('click', function () {
        $('.research-content').toggleClass('active');
    });
    $('.close').on('click', function () {
        $('.research-content').removeClass('active');
    })

    $('.point').on('click', function () {
        $(this).toggleClass('active').siblings().removeClass('active')
    });

    jQuery(function ($) {
        $(document).mouseup(function (e) {
            var div = $(".point");
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                div.removeClass('active');
            }
        });
    });

    jcf.replaceAll();

    $(".title").on('click', function () {
        $(this).parent().toggleClass('active').siblings().removeClass('active')
    })
})