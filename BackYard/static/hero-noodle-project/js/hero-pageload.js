$.ajax({
	type:"get",
	url: api + "getcertificate",
	dataType:'json',
	async:true,
	success:function(res){
		if(res.success){
			let html = "";
			let fram = document.querySelector('.hero-detail-certificate');
			for(let i of res.data.imgsrc){
				html += `<li class="fl hero-imgBTN" src='${reqUrl + i.img}'>
						 	<!--装图片的盒子-->
							<div class="hero-flexImgBox">
								<!--图片跳转网址-->
								<a class="hero-aRange">
									<!--图片-->
									<img src="${reqUrl + i.img}" class="hero-item-img" >
									<span class="hero-overlay">
						 		 	  <i class="hero-icon-zoom"></i>
						 			</span>
								</a>
							</div>
							<div class="text-center hero-certificate-title margin-t-5">
								<h2>
									<a>${i.name}</a>
								</h2>
							</div>
						 </li>`;
			}

			fram.innerHTML = html;
		}

	}
});

