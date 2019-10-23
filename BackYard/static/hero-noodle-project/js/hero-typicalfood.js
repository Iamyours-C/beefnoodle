// 请求风味小吃
let html = "";
$.ajax({
	type:"get",
	url: api + "gettypicalfood",
	dataType:'json',
	success:function(res){
		if(res.success){
			let special = document.querySelector('.hero-cont-one');
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
			special.innerHTML = html;
		}
	}
});