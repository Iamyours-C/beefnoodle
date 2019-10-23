// 请求常见详细内容
$.ajax({
	url: api + 'getquestiontext',
	type:'get',
	dataType:'json',
	success:function(res){
		if(res.success){
			let html = '';
			let question = document.querySelector('.hero-TextContent');
			console.log(res.data)
			for(let i of res.data.question){
				html += `<div class="hero-content-troublelist">
							<div class="hero-troublelist-title">
								<h2>
									<a href="UsualProblemDetail.html">${i.name}</a>
								</h2>
							</div>
							<p>${i.cont}</p>
							<a class="hero-list-detail" href="UsualProblemDetail.html">查看详情</a>
						</div>`;
			}
			question.innerHTML = html;
		}
	}
})