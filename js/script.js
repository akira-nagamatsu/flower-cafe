$(function() {
    //ハンバーガーメニュー用
    $('.humburger-btn').on('click',function(){
        $('.humburger-btn').toggleClass('cross');
        $('.humburger-nav-wrapper').fadeToggle(500);
    });
    //ハンバーガーメニューカレント表示用
    $('.humburger-nav_item a').each(function(){
        var $href = $(this).attr('href');
        var $path = location.pathname;
        if(location.href.match($href)) {
            $(this).addClass('current');
        } else {
            if (!$path) {
                $(this).removeClass('current');
            }
        }            
    });
    //ヘッダーメニューカレント表示用
    $('.header-nav a').each(function(){
        var $href = $(this).attr('href');
        var $path = location.pathname;
        if(location.href.match($href)) {
            $(this).addClass('current');
        } else {
            if (!$path) {
                $(this).removeClass('current');
            }
        }            
    });   
});