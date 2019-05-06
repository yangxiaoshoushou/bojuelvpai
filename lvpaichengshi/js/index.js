// 城市列表
// 鼠标点击
$('.city a').click(function () {
    $(this)
        .addClass('active')
        .parent()
        .parent()
        .siblings()
        .find('a')
        .removeClass('active');
})




// 返回顶部
$('.to-top').click(function () {
    $('body,html')
        .animate({ scrollTop: 0 });
});



