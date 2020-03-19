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

    //modal
	$(".contact_us_btn").click(function(){        
        $(".modal_background").toggle();
        $(".modal_box").toggle().load("./modal/contact_us.html");
        

    });  

    $(".modal_box .modal_content i").click( function(){
        $(".modal_background").toggle();
        $(".modal_box").toggle().load("./modal/contact_us.html");
        
    });
    
    var a = 0;
    $('.fa-bars').click( function(){
        if(a%2 == 0)
        {
            $('.nav_menu').addClass('active');
            $('.nav_menu a').addClass('active');
        }
        else
        {
            $('.nav_menu').removeClass('active');
            $('.nav_menu a').removeClass('active');
        }
        a++;
    }); 

    
  });