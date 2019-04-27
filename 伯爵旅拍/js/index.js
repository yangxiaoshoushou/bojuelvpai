// 城市列表
$('.city div').mouseenter(function(){
    // alert('鼠标进入了')
    $(this)
    .css({
        background:'black',
    });
   
});
$('.city div').mouseleave(function(){
    // alert('鼠标离开了')
    $(this)
    .css({
        background:'white',
    });
   
});
// 返回顶部
$('.to-top').click(function(){
    $('body,html')
    .animate({ scrollTop:0 });
    // $(window).scrollTop(0);
    
});



