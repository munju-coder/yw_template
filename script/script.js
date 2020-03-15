$( document ).ready( function() {

    $(window).scroll(function () {
        // console.log($(this).scrollTop());
        if ($(this).scrollTop() >= $('.menubar').height()) {
            $('header').addClass('nav_fix');
        } else {
            $('header').removeClass('nav_fix');
        }
    });


    $("aside").click(function () {
        $('html').animate({
            scrollTop: 0
        }, 500);
    });
    
  });