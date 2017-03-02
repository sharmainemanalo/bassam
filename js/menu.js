var leftOffset = parseInt($(".intro").css('left'));
$(window).scroll(function(){
    $('.fixed-header').css({
        'left': $(this).scrollLeft() + leftOffset
    });
});