$( document ).ready( function() {

    var menuOffset = $( 'header' ).offset();

    $(function () {

      $(window).scroll(function () {
          console.log($(this).scrollTop());
          if ($(this).scrollTop() >= $('header').height()) {
              $('header .h_wrap').addClass('nav_fix');
          } else {
              $('header .h_wrap').removeClass('nav_fix');
          }
      });
  });

    $("aside").click(function () {
        $('html').animate({
            scrollTop: 0
        }, 500);
    });
    
  });