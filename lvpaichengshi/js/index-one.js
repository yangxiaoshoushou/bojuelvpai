// 当鼠标进入li时pic里的bottom
// 第一个span
// 字体颜色变成黑色
// 第二个span
// 背景颜色变为红色动画右移动



$('.pic li').mouseenter(function(){
    // alert('123')
    $(this)
    // .addClass('show')
    .children('a')
    .children('.bottom')
    .find('span')
    .css('color','black')
    .siblings('span')
    .eq(1)
    .css('background','red')
    .stop()
    .animate({right:-8},500)
    
    

})

$('.pic li').mouseleave(function(){
    // alert('123')
    $(this)
    // .removeClass('show')
    .children('a')
    .children('.bottom')
    .find('span')
    .css('color','#999')
    .siblings('span')
    .eq(1)
    .css('background','black')
    .stop()
    .animate({right:6},500)
})
