/*var leftOffset = parseInt($(".intro").css('left'));
$(window).scroll(function(){
    $('.fixed-header').css({
        'left': $(this).scrollLeft() + leftOffset
    });
});*/


/*$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
    if ($(window).scrollTop() > 100 ){
    
        $('.bg').addClass('show');
    
  } else {
    
    $('.bg').removeClass('show');
    
    };      
});*/


/*
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $("#nav-change");
    var offset = startchange.offset();

    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $("nav").css('background-color', 'rgba(0,37,60,1)');
                $("nav").css('-webkit-transition', 'all 1s ease-in-out');
                $("nav").css('-moz-transition', 'all 1s ease-in-out');
                $("nav").css('-o-transition', 'all 1s ease-in-out');
                $("nav").css('transition', 'all 1s ease-in-out');
            } else {
                $('nav').css('background-color', 'transparent');
            }
        });
    }
});*/

$(document).ready(function(){                                               

       //Navigation Menu Slider
        $('#nav-expander').on('click',function(e){
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
        $('#nav-close').on('click',function(e){
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        });

        // Initialize navgoco with default options
        $(".main-menu").navgoco({
            caret: '<span class="caret"></span>',
            accordion: false,
            openClass: 'open',
            save: true,
            cookie: {
                name: 'navgoco',
                expires: false,
                path: '/'
            },
            slide: {
                duration: 300,
                easing: 'swing'
            }
        });

      });

