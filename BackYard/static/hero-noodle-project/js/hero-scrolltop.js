 //回到顶部按钮封装
 $(".hero-btn-box").click(function(){
		//scrollTop 滚动条距离顶部的距离
		let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		//每隔1000毫秒执行函数体一次,不间断一直执行
		let times = setInterval(function(){
			scrollTop = scrollTop - 50
			document.body.scrollTop = scrollTop
			document.documentElement.scrollTop = scrollTop
			if(scrollTop<=0){
				clearInterval(times)
			}
		},10)
   })
   //页面滑动到多少距离时弹出返回顶部的按钮
   $(window).scroll(function(){
   	let btn = $(".hero-return")
   	        if($(this).scrollTop() >200){  //当滚动距离大于250px时执行下面的东西
                btn.css({
                   position: 'fixed',
                   display: 'block',
                   zIndex:9999,
                });
            }else{                    //当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
                btn.css({
                	position: 'fixde',
                	display: 'none',
                })
            }
        });