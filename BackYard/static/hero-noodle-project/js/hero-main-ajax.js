// 请求banner
//console.log(1231)

$.ajax({
	url:api + 'getbannermain',
	type:'get',
	dataType:'json',
	success:function(res){
		if(res.success){
			let html = "";
			let banner = document.querySelector('.banner-ajax');
			for(let [index, item] of res.data.imgsrc.entries()){
				html += `
					<div class="item ${index==0 ? 'active' : ''}">
	                    <img src="${reqUrl + item.img}" />
	                </div>
            	`;
			}
			banner.innerHTML = html;
			//banner自动轮播
			$('#myCarousel').carousel({
				interval:4000
			})
		}
	}
});

// 请求新闻动态
$.ajax({
	type:"get",
	url: api + "getnewstext",
	dataType:'json',
	success:function(res){
		if(res.success){
			let html = "";
			let specialFood = document.querySelector('.hero-news-show');
			console.log(res.data)
			for(let i of res.data.newsvice){
				html += `<li class="col-md-6 col-sm-6 hero-list1">
							<div class="hero-entry-item">
								<div class="hero-news-con-time float-left">
    								<p class="hero-time-day">0${i.bars}</p>
    								<p class="hero-time-data">${i.dates}</p>
    							</div>
    							<div class="hero-entry-title">
    								<h2 class="font-16 font-white"><a href="news-detail.html" class="hero-newslex">${i.NAME}</a></h2>
    							</div>
    							<div class="hero-entry-summary">
    								<p >
										${i.cont}
    								</p>
    							</div>
							</div>
						</li>`;
			}
			specialFood.innerHTML = html;
		}
	}
});


// 请求主页常见问题轮播
$.ajax({
	type:'get',
	url: api + 'getquestiontext',
	dataType:'json',
	success:function(res){
		if(res.success){
			let html = "";
			let problem = document.querySelector('.hero-rolling-demo');
			console.log(res.data)
			for(let i of res.data.question){
				html += `<div class="hero-onePage-message-item">
    							<div class="hero-asking margin-b-10">
        							<span class="hero-icon pull-left">问</span>
        							<p><a class="hero-flowquestions" href="UsualProblemDetail.html">${i.name}</a></p>
    							</div>
        						<div class="hero-answer padding-b-10">
        							<span class="hero-icon pull-left">答</span>
        							<p class="padding-l-10">
										${i.cont}
									</p>
        						</div>
        					</div>`;
			}
			problem.innerHTML = html;
			
			info();
			$(".hero-rolling-demo").hover(
				function(){
					$(".hero-rolling-demo>.hero-onePage-message-item:eq(0)").stop()
				},
				function(){
					info()
				}
			);
			function info(){
				//复制第一个div
				var li =$(".hero-rolling-demo>.hero-onePage-message-item:eq(0)").clone();
				
				//使用animate对div的外边距进行调整从而达到向上滚动的效果
				$(".hero-rolling-demo>.hero-onePage-message-item:eq(0)").animate({
					marginTop:"-480px"
					},20000,function(){
				
					//对已经消失的div进行删除
					$(".hero-rolling-demo>.hero-onePage-message-item:eq(0)").remove();
					
					//把复制后的div插入到最后
					$(".hero-rolling-demo").append(li);
				})
			}
		}
	}
})

// 请求特色菜品轮播数据
//$.ajax({
//	type:"get",
//	url: api + "getallfood",
//	dataType:'json',
//	success:function(res){
//		let html = "";
//		let specialBanner = document.querySelector('.hero-showfore');
//		for(let [index,item] of res.data.imgsrc.entries()){
//			console.log(item)
//			console.log(index)
//			html += `<ul class="item ${index==0 ? 'active' : ''}">
//		                       <li class="hero-banner-list col-lg-3 col-md-4 col-sm-2">
//									<div class="hero-flexImgBox ">
//										<a href="hero-specialdishes.html" class="hero-aRange">
//											<img src="${reqUrl + item.img}" class="hero-item-img">
//										</a>
//									</div>
//									<span>${item.name}</span>
//								</li>
//		                    </ul>`;
//		}
//		specialBanner.innerHTML = html;
//	}
//})