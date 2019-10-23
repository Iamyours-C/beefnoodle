   // 请求店铺形象
//console.log(1111)
$.ajax({
	type:"get",
	url:api + "getstoremain",
	dataType:'json',
	success:function(res){
		let show = document.querySelector('.hero-preview-box');
		let html = "";
		if(res.success == true){
			for(let i of res.data.imgsrc){
				html = html + `<li class="col-3-1 hero-bon-one">
							<div class="porfolio-img" data-toggle="modal" href="#example">
								<div class="move">
									<a href="#" title="明珠路店">
										<img src="${reqUrl+i.img}" />
										<span class="opacity-overlay">
										<i class="icon-zoom"></i>
									</span>
									</a>
								</div>
							</div>
							<a class="porfolio-title">${i.name}</a>
						</li>`;
			}
			show.innerHTML = html;
		}
	}
});
   //滑动页面出现css3弹出效果
    $(window).scroll(function(){
    	  if($(this).scrollTop()>200){
    	  	$(".hero-move").addClass("hero-bon")
    	  	$(".hero-move-one").addClass("hero-bon-one")
    	  	$(".hero-move-two").addClass("hero-bon-two")
    	  }
    })
    $(window).scroll(function(){
    	  if($(this).scrollTop()>300){
    	  	$(".hero-move-oppo").addClass("hero-bon")
    	  	$(".hero-move-vivo").addClass("hero-bon-one")
    	  	$(".hero-move-mi").addClass("hero-bon-two")
    	  }
    })
		/*move() {
		    document.documentElement.style.position = 'static';
		    document.body.style.overflow = ''; //出现滚动条
		},*/
		
		//关闭轮播<br><br>$(‘.carousel’).carousel({<br>　　pause：‘none’<br>});  //鼠标放到banner图上不停止轮播
		$('.carousel').carousel('pause'); 
		
		
		//点击空白与按Esc时不会退出只有点击退出时才能退出
		$('#example').modal({
			backdrop: 'static', 
			keyboard: false
		});
		
		//手动隐藏模态框
		
		$('#example').modal('hide')
		//实现modal弹出body能滑动
		/*$("body").removeClass('modal-open');*/
 
        //清除carousel带的active
      	    $(".item").removeClass("active")
			$(".delete-btn").click(function(){
				$(".item").removeClass("active")
			})
			//水阳江路
			$(".hero-move").click(function(){
				$(".bop").addClass("active")
			})
			//安师大店
			$(".hero-bon").click(function(){
				$(".bon").addClass("active")
			})
			//明珠路
			$(".hero-bon-one").click(function(){
				$(".boa").addClass("active")
			})
			//福州路
			$(".hero-bon-two").click(function(){
				$(".bob").addClass("active")
			})
			//义井路
			$(".hero-move-one").click(function(){
				$(".boc").addClass("active")
			})
			//科学大道
			$(".hero-move-two").click(function(){
				$(".bod").addClass("active")
			})
			
			$(".hero-move-oppo").click(function(){
				$(".boe").addClass("active")
			})
			
			$(".hero-move-vivo").click(function(){
				$(".bof").addClass("active")
			})
			
			$(".hero-move-mi").click(function(){
				$(".bog").addClass("active")
			})
		      
