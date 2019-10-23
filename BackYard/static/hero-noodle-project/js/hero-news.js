$.ajax({
	type:"get",
	url: api +"getnewstext",
	dataType:'json',
	success:function(res){
		if(res.success){
			console.log(res.data)
			let html = "";
			let newsCont = document.querySelector('.hero-news-entry');
			for(let item of res.data.newsvice){
			
				html += `<div class="hero-entry-item clearFix">
						<div class="entry-item-time text-center fl">
							<p class="font-30 color-6 day">${item.bars}</p>
							<p class="font-12 color-9 date">${item.dates}</p>
						</div>
						<div class="entry-item-summary fl">
							<a href="news-detail.html" class="color-4d font-16 summary-title">${item.NAME}</a>
							<p class="color-80 detail">
								${item.cont}
							</p>
						</div>
					</div>`;
			}
			newsCont.innerHTML = html;
		}
	}
});


