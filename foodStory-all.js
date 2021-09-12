$(document).ready(function () {
    $('#m-open').click(function (e) {
        $('body').addClass('open');
        // 用 click 監聽 .mobile_open，當 click 觸發功能，會把 body 中的側邊選單打開            
    });

    $('.mobile_close').click(function (e) {
        $('body').removeClass('open')
        //用 click 監聽 .mobile_close，當 click 觸發功能，會把 body 中的側邊選單關閉   
    });

    var h1 = 400;
    var h2 = 480;
    var min_height = 100;
    var ss = $(document).scrollTop();

    $(window).scroll(function() {
        var s = $(document).scrollTop();

        if(s > h2){
            if(s < ss){
                $('.renew').fadeIn();
            }else{
                $('.renew').fadeOut();
            }
            ss = s;
        }
    });
});


