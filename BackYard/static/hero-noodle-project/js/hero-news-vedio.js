//$(function(){
	$('.hero-arange').addClass('active');
	
	// 播放时视频
	$('.hero-arange').click(function(){
		let index = $(this).index()
		$(this).parents('body').find('.hero-play-item').eq(index).show();
		$(this).parents('body').find('.hero-play-item').eq(index).siblings().hide();
		$('.hero-play-video').show();
	})
	$('.hero-close-video').click(function(){
		$('.hero-play-video').addClass('play-hide');
		$('.hero-play-item').hide()
	})
//})
