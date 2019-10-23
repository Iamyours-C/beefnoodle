
		
		
		
		
		$(".select-box").select()
		//轮播图
		$(".hero-login").eq(0).click(function(){
			$(".bon").removeClass("on")
			$(".hero-login").removeClass("color")
			$(".hero-login").eq(0).addClass("color")
			$(".corsuel").addClass("on")
			getList3Data()
		})
		
		//新闻动态
		$(".hero-login").eq(1).click(function(){
			/*$(".hero-center").removeClass("on")*/
			$(".bon").removeClass("on")
			$(".hero-login").removeClass("color")
			$(".hero-login").eq(1).addClass("color")
			$(".daynamic").addClass("on")
			getList4Data()
		})
		
		//常见问题
		$(".hero-login").eq(2).click(function(){
			/*$(".hero-center").removeClass("on")*/
			$(".bon").removeClass("on")
			$(".hero-login").removeClass("color")
			$(".hero-login").eq(2).addClass("color")
			$(".hero-help").addClass("on")
			getList5Data()
		})
		
		//特色菜品
		$(".hero-login").eq(3).click(function(){
			/*$(".hero-center").removeClass("on")*/
			$(".bon").removeClass("on")
			$(".hero-login").removeClass("color")
			$(".hero-login").eq(3).addClass("color")
			$(".hero-center.hero-char").addClass("on")
			getListData()
		})
		
		//店面形象
		$(".hero-login").eq(4).click(function(){
			/*$(".hero-center").removeClass("on")*/
			$(".bon").removeClass("on")
			$(".hero-login").removeClass("color")
			$(".hero-login").eq(4).addClass("color")
			$(".hero-center.hero-back").addClass("on")
			getList2Data()
		})
		
		//文章集合
		$(".hero-login").eq(5).click(function(){
			/*$(".hero-center").removeClass("on")*/
			$(".bon").removeClass("on")
			$(".hero-login").removeClass("color")
			$(".hero-login").eq(5).addClass("color")
			$(".hero-center.in").addClass("on")
			$("#modal").modal('toggle')
			$('.admini').addClass('on')
			getList6Data()
		})
	
	



$(function(){
	$('.admini').addClass('loaded')
})