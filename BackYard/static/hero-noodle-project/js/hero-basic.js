//导航点击事件
// 点击显示堆叠列表

$('button').click(function(){
	$('.hero-stack').slideToggle('slow');
})

// 显示子列表
$('.hero-stack-item').click(function(){
	$(this).find('.hero-stack-vice').slideToggle(300)
	$(this).siblings().find('.hero-stack-vice').slideUp(300)
	$(this).find('.item-ico>img').toggleClass('down')
	$(this).siblings().find('.item-ico>img').removeClass('down')
})

// 白板上推
$('.nav-item').click(function(){
	$('.white-space').animate({
		bottom:'100%'
	},400,function(){
		$('.content').show();
	})
})
