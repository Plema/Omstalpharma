$(document).ready(function () {
    if ($(window).width() < 1360) {
        $('.text-overflow').readmore({
            moreLink: ' <a href="javascript:void(0);" class="more">Читать полностью</a>',
            lessLink: ' <a href="javascript:void(0);" class="more">свернуть</a>',
            speed: 500,
            collapsedHeight: 414,
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

    jcf.replaceAll();
})