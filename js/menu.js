var leftOffset = parseInt($(".intro").css('left'));
$(window).scroll(function(){
    $('.fixed-header').css({
        'left': $(this).scrollLeft() + leftOffset
    });
});


$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $("#nav-change");
    var offset = startchange.offset();

    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $("nav").css('background-color', 'rgba(0,37,60,1)');

            } else {
                $('nav').css('background-color', 'transparent');
            }
        });
    }
});