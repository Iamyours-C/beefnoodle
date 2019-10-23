
//$(function(){
//	$('#myCarousel').carousel({
//		interval:2000
//	})
//})

//常见内容无限滚动
//$(function(){
//	info()
//
//	$(".hero-rolling-demo").hover(
//		function(){
//			$(".hero-rolling-demo>.hero-onePage-message-item:eq(0)").stop()
//		},
//		function(){
//			info()
//		}
//	)
//	
//})
//function info(){
//	
//		//复制第一个div
//		var li =$(".hero-rolling-demo>.hero-onePage-message-item:eq(0)").clone();
//		
//		//使用animate对div的外边距进行调整从而达到向上滚动的效果
//		$(".hero-rolling-demo>.hero-onePage-message-item:eq(0)").animate({
//			marginTop:"-480px"
//			},10000,function(){
//		console.log()
//		//对已经消失的div进行删除
//		$(".hero-rolling-demo>.hero-onePage-message-item:eq(0)").remove();
//		
//		//把复制后的div插入到最后
//		$(".hero-rolling-demo").append(li);
//	})
//}


$(function(){
	$(".hero-company").addClass("on")
	$(".hero-video").addClass("on")
	$(".hero-specialty-con").addClass("on")
	$(".hero-food-module").addClass("on")
	$(".hero-food-content").addClass("on")
	$(".hero-list1").addClass("on")
	$(".hero-list2").addClass("on")
	$(".hero-shop-con").addClass("on")
	
	//视频内容 招商加盟文字运动
	$('.hero-cover').hover(function(){
		$('.hero-cover').show();
		$('.hero-cover-text').addClass('on')
	},function(){
		$('.hero-cover').hide();
		$('.hero-cover-text').removeClass('on')
	})
})
	

	//获取可视窗口的宽高
//	function getViewport(){
//		if (window.innerWidth) {
//			return {
//				w : window.innerWidth,
//				h : window.innerHeight
//			}
//		}else if(document.compatMode === "BackCompat"){ //怪异模式时
//			return {
//				w : document.body.clientWidth,
//				h : document.body.clientHeight
//			}
//		}else{
//			return {
//				w : document.documentElement.clientWidth,
//				h : document.documentElement.clientHeight
//			}
//		}
//	}
//	
	
/**
  多张图片无缝滚动实现
*/
$(document).ready(function(){
	$(".myCarousel").carousel()
})

$(document).ready(function(){
	$(".myCarousel1").carousel()
})

//$(document).ready(function(){
//	$(".carousel-example-generic1").carousel()
//})

$('.carousel-inner').find(".item").eq(0).addClass("active")
