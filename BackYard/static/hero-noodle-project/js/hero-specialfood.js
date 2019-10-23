// 请求特色菜品
$.ajax({
	type:"get",
	url: api + "getspecialfood",
	dataType:'json',
	success:function(res){
		if(res.success){
			let reqUrl = 'http://192.168.97.233:3000/'
			let html = "";
			let character = document.querySelector('.hero-cont-one');
			for(let i of res.data.imgsrc){
				html += `<div class="hero-single pull-left single1">
								<div class="hero-single-one">
									<a class="hero-single-img" href="#">
										<img src="${reqUrl + i.img}" />
									</a>
								</div>
								<a class="hero-single-a">${i.name}</a>
							</div>`;
				}
			character.innerHTML = html;		
		}
	}
});	
