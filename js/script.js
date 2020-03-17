$( document ).ready( function() {
    
    $(window).scroll(function () {
        if ($(this).scrollTop() >= $('.h_wrap').height()) {
            $('.h_wrap').addClass('nav_fix');
        } else {
            $('.h_wrap').removeClass('nav_fix');
        }
    });


    $("aside").click(function () {
        $('html').animate({
            scrollTop: 0
        }, 500);
    });
    
  });