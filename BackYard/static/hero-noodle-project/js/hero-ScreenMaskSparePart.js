	//	背景透明遮罩弹出
	$('.hero-imgBTN').click(function(){
		
			 $('.hero-showscreen').show();
			 $('.hero-imgbox').fadeIn();
	})
	//	背景透明遮罩消失
	$('.hero-closebtn').click(function(){
		$('.hero-showscreen').fadeOut("fast");
		$('.hero-imgbox').fadeOut("fast");
		$('.hero-nextBTN').show()
    	$('.hero-prevBTN').show()
	})
	
	function imageshow(_this){
		//获取当前点击的li	元素中的src属性值  
		var src = _this.attr("src");
		//创建图片
		var img = new Image();
		
		img.src=src
		
		//设置#hero-bigimg元素的src属性  
	    $('.hero-bigimg').attr("src", src);
		
		//页面加载完成
	   img.onload = function(){
	    //获取当前图片实际高度
	    var imgwidth = img.width
	    
	    var imgheight = img.height
	    
	    //打印获取到的宽高
		//alert('width:'+imgwidth+',height:'+imgheight)
			//给装图片的盒子设置大小
	    $(".hero-imgbox").css({width:imgwidth,height:imgheight})
	    
	    $(".hero-imgbox").css({transform:"scale(0.7)"})
	    
	   }	
    	
	 }
	
	function isHideBtn(index) {
		if(index <=0) {
    		$('.hero-prevBTN').hide()    		
    	}else if(index>=4) {
    		$('.hero-nextBTN').hide()
    	}
	}
	let index= 0
	function switchBTN(_this){
    	//获取点击图片的index下标
    	index = _this.attr('index')
    	isHideBtn(index)

//  	//点击跳转下一张
//		$('.hero-nextBTN').click(function(){
//			
//			$('.hero-prevBTN').show()
//			console.log(index, '--prev')
////			if(index<4){
//				//点击增加index
//				++index
//				console.log(index, '++next')
////				var srcSwitch = $(_this).next().attr('src')
//				var imgBTN = $('.hero-imgBTN')
//				//获取点击增加后图片src
//				var srcSwitch = imgBTN.eq(index).attr('src');
//				//将src赋给图片显示
//				$('.hero-bigimg').attr("src", srcSwitch);
//				isHideBtn(index)
////			}
////			//当最后一张时按钮消失
////			else{
////				$('.hero-nextBTN').hide()
////			}
//			
//		})
	
		
	}
	//点击跳转下一张
	$('.hero-nextBTN').click(function(){
		
		$('.hero-prevBTN').show()
		console.log(index, '--prev')
//			if(index<4){
			//点击增加index
			++index
			console.log(index, '++next')
//				var srcSwitch = $(_this).next().attr('src')
			var imgBTN = $('.hero-imgBTN')
			//获取点击增加后图片src
			var srcSwitch = imgBTN.eq(index).attr('src');
			//将src赋给图片显示
			$('.hero-bigimg').attr("src", srcSwitch);
			isHideBtn(index)
//			}
//			//当最后一张时按钮消失
//			else{
//				$('.hero-nextBTN').hide()
//			}
		
	})
	
 	//点击跳转上一张
	 $('.hero-prevBTN').click(function(){ 
	 	$('.hero-nextBTN').show()
//		if(index>0){
			//点击增加index
		index--
		var imgBTN = $('.hero-imgBTN')
		//获取点击增加后图片src
		var srcSwitch = imgBTN.eq(index).attr('src');
		//将src赋给图片显示
		$('.hero-bigimg').attr("src", srcSwitch);
		isHideBtn(index)
//		}
		//当第一张时按钮消失
//		else{
//			$('.hero-prevBTN').hide()
//		}		
	})