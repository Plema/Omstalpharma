$(window).resize(function () {
    if ($(window).width() < 1280) {
        $('.list-product').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            appendArrows: $('.section-product .holder-btn'),
            prevArrow: '<button type="button" id="prev-02" class="btn-arrow prev"><i class="icon-arrows" aria-hidden="true"></i></button>',
            nextArrow: '<button type="button" id="next-02"class="btn-arrow next"><i class="icon-arrows-2" aria-hidden="true"></i></button>',
            responsive: [{
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                    },
                },
            ]
        })
    }
    if ($(window).width() < 1280) {
        $('.list-news').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            appendArrows: $('.section-news .holder-btn'),
            prevArrow: '<button type="button" id="prev-03" class="btn-arrow prev"><i class="icon-arrows" aria-hidden="true"></i></button>',
            nextArrow: '<button type="button" id="next-03"class="btn-arrow next"><i class="icon-arrows-2" aria-hidden="true"></i></button>',
            responsive: [{
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                    },
                },
            ]
        })
    }
})

$(document).ready(function () {
    //slider about-product
    $('.section-about-product .list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        dots: true,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        appendArrows: $('.section-about-product .holder-btn'),
        prevArrow: '<button type="button" id="prev-01" class="btn-arrow prev"><i class="icon-arrows" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" id="next-01"class="btn-arrow next"><i class=" icon-arrows-2" aria-hidden="true"></i></button>',
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

    //slider product
    if ($(window).width() < 1280) {
        $('.list-product').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            appendArrows: $('.section-product .holder-btn'),
            prevArrow: '<button type="button" id="prev-02" class="btn-arrow prev"><i class="icon-arrows" aria-hidden="true"></i></button>',
            nextArrow: '<button type="button" id="next-02"class="btn-arrow next"><i class="icon-arrows-2" aria-hidden="true"></i></button>',
            responsive: [{
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                    },
                },
            ]
        })
    }
    //slider news
    if ($(window).width() < 1280) {
        $('.list-news').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            appendArrows: $('.section-news .holder-btn'),
            prevArrow: '<button type="button" id="prev-03" class="btn-arrow prev"><i class="icon-arrows" aria-hidden="true"></i></button>',
            nextArrow: '<button type="button" id="next-03"class="btn-arrow next"><i class="icon-arrows-2" aria-hidden="true"></i></button>',
            responsive: [{
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ]
        })
    }

    $('.text-overflow').matchHeight({
        byRow: false
      });
  
      $('.content-product').matchHeight({
        byRow: false
      });
  
      $('.text-news').matchHeight({
        byRow: false
      });
  
      $('.content-news').matchHeight({
        byRow: false
      });
  
  
      var block_show = false;
  
      function scrollTracking() {
        if (block_show) {
          return false;
        }
  
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.holder-images').offset().top;
        var eh = $('.holder-images').outerHeight();
        var dh = $(document).height();
  
        if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
          block_show = true;
  
          $(function () {
            $.each($('.icon'), function (i, el) {
              setTimeout(function () {
                $(el).addClass("active");
              }, 600 + (i * 600));
  
            });
          });
        }
      }
  
      $(window).scroll(function () {
        scrollTracking();
      });
  
      $(document).ready(function () {
        scrollTracking();
      });
  
      $('.research').on('click', function () {
        $('.research-content').toggleClass('active');
      });
      $('.close').on('click', function () {
        $('.research-content').removeClass('active');
      })

    jcf.replaceAll();
})