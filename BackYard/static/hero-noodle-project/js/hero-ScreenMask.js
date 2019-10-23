;(function($){
	
	$.fn.preview = function(){
		//this指代$(".hero-preview-box")
		let _this = this
		//从this找到li标签（用作点击的原图片位置）
		let btnList = $(this).find('.hero-imgBTN')
		//设定点击事件
		btnList.click(function(){
			//蒙版显示			
			$(".hero-showscreen").show();
			//图片盒子显示
			$(".hero-imgbox").show();
			//把每次点击的index值赋给$(".hero-preview-box") index的值为jquery封装获取方法来的
			_this.index = $(this).index()
			//调用imageshow函数获取$(this)的src赋值给图片同时加载获取图片真实大小赋值给图片盒子
			imageshow($(this))
			//判断第一张和最后一张取消翻页圆点
			isHideBtn()
			
		})
		
		//	背景透明遮罩消失
		$('.hero-closebtn').click(function(){
			$('.hero-showscreen').fadeOut("fast");
			$('.hero-imgbox').hide("fast");
//			向右显示按钮
			$('.hero-nextBTN').show()
//			向左显示按钮
	    	$('.hero-prevBTN').show()
		})
		
		//点击跳转下一张
		$('.hero-nextBTN').click(function(){
			//向左按钮显示
			$('.hero-prevBTN').show()
			//每次点击index加一
			_this.index++
			//获取点击增加后图片src
			var srcSwitch = btnList.eq(_this.index).attr('src');
			//将src赋给图片显示
			$('.hero-bigimg').attr("src", srcSwitch);
//			每次点击执行imgload函数页面加载img从而获得原图片大小尺寸并付给图片盒子（由于onload为js方法所以里面用js方法获取对象）
			imgLoad(document.querySelector('.hero-bigimg'))
			//每次点击判断是否为为最前后图片按钮是否消失
			isHideBtn()
			
		})
		
	 	//点击跳转上一张
		 $('.hero-prevBTN').click(function(){ 
		 	//向右按钮显示
		 	$('.hero-nextBTN').show()
			//点击增加index
			_this.index-- 
			//获取点击增加后图片src
			var srcSwitch = btnList.eq(_this.index).attr('src');
			//将src赋给图片显示
			$('.hero-bigimg').attr("src", srcSwitch);
//			每次点击执行imgload函数页面加载img从而获得原图片大小尺寸并付给图片盒子（由于onload为js方法所以里面用js方法获取对象）
			imgLoad(document.querySelector('.hero-bigimg'))
			//每次点击判断是否为为最前后图片按钮是否消失
			isHideBtn()
	
		})
		
		
		//1.图片显示及给盒子赋值
		function imageshow(that){
			//获取当前点击的li	元素中的src属性值  
			var src = that.attr("src");
			//创建图片
			var img = new Image();
			//讲值赋给img的src属性
			img.src=src
			//设置hero-bigimg元素的src属性  从而显示图片
		    $('.hero-bigimg').attr("src", src);
		  	//页面加载完成
			imgLoad(img)
	    	
		 }
		
//		2.获取原始图片大小并赋值给图片盒子
		function imgLoad(img) {
			//页面加载完成
		   img.onload = function(){
		    //获取当前图片实际宽度度
		    var imgwidth = img.width
		    //获取当前图片实际高度
		    var imgheight = img.height
		    //打印获取到的宽高
			//alert('width:'+imgwidth+',height:'+imgheight)
				//给装图片的盒子设置大小
			//赋值
		    $(".hero-imgbox").css({width:imgwidth,height:imgheight})
		    //缩小尺寸
		    $(".hero-imgbox").css({transform:"scale(0.7)"})
		   }	
		}
		//3.判断最前最后条件
		function isHideBtn() {
			if(_this.index <=0) {
	    		$('.hero-prevBTN').hide()    		
	    	}else if(_this.index>=4) {
	    		$('.hero-nextBTN').hide()
	    	}
		}
	}
	
})($)
