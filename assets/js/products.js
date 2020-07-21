$(document).ready(function () {
    if ($(window).width() > 1280) {
        $('.text-overflow').matchHeight({
          byRow: false
        });
  
        $('.content-product').matchHeight({
          byRow: false
        });
      }
})