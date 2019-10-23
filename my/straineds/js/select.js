;(function($, w){
	
	//定义函数 封装模拟下拉框
	$.fn.select = function(){
		
		var _this = this;
		
		var selectTitle = $(_this).find('.select-title');
		var selectLists = $(_this).find('.select-lists');
		
		//1.给title添加点击事件显示list
		selectTitle.click(function(e){
			//阻止冒泡
			e.stopPropagation()
			$(this).closest('.select-box').find('.select-lists').toggleClass('show')
		
		   //4.其他下拉框的下拉列表隐藏
		   $(this).closest('.select-box').siblings('.select-box').find('.select-lists').removeClass('show')
		})
		//2.点击list,将list的值赋给input框
		selectLists.find('.list').click(function(){
			var aInput = $(this).closest('.select-box').find('.select-text')
			aInput.val($(this).html())
			
			selectLists.removeClass('show')
		})
		
		//3.点击文档让下拉框中的列表隐藏
		$(document).click(function(){
			selectLists.removeClass('show')
		})
	}
	
	
})($, Window)

