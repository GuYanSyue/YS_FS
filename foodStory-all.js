$(document).ready(function () {
    $('.mobile_open').click(function (e) {
        $('body').addClass('open');
        // 用 click 監聽 .mobile_open，當 click 觸發功能，會把 body 中的側邊選單打開       
    });

    $('.mobile_close').click(function (e) {
        $('body').removeClass('open')
        //用 click 監聽 .mobile_close，當 click 觸發功能，會把 body 中的側邊選單關閉
    });
});

$(function() {
    /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
    $(window).scroll(function() {    
        $('#m-open').fadeIn();
        $('.aside').fadeIn();
    });
});
