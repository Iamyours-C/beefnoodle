console.log(111)
$('.table-main-content3').on('click','.list-a',function(){
			 console.log(111)
		     let goodid = $(this).parent('.zoom').siblings('.goodid3').text()
		     console.log(goodid)
			 $(this).parent('.zoom').parent().remove();
			
			$.ajax({
				type:"post",
				url:api+"deleteplants",
				data:{
					good:goodid
				},
				dataType:'json',
				success:function(res){	
				if(res.status==200){
					alert('删除成功')
					getList3Data()
				}
				}
			});
	})

$('.table-main-content4').on('click','.list-a',function(){
			 console.log(111)
		     let goodid = $(this).parent('.yoom').siblings('.goodid4').text()
		     console.log(goodid)
			 $(this).parent('.yoom').parent().remove();
			
			$.ajax({
				type:"post",
				url:api+"deleteJasm",
				data:{
					good:goodid
				},
				dataType:'json',
				success:function(res){	
				if(res.status==200){
					alert('删除成功')
					getList4Data()
				}
				}
			});
	})

$('.table-main-content5').on('click','.list-a',function(){
			 console.log(111)
		     let goodid = $(this).parent('.joom').siblings('.goodid5').text()
		     console.log(goodid)
			 $(this).parent('.joom').parent().remove();
			
			$.ajax({
				type:"post",
				url:api+"deleteproblem",
				data:{
					good:goodid
				},
				dataType:'json',
				success:function(res){	
				if(res.status==200){
					alert('删除成功')
					getList5Data()
				}
				}
			});
	})
$('.table-main-content').on('click','.list-a',function(){
			 console.log(111)
		     let goodid = $(this).parent('.coom').siblings('.goodid').text()
		     console.log(goodid)
			 $(this).parent('.coom').parent().remove();
			
			$.ajax({
				type:"post",
				url:api+"deletegoods",
				data:{
					good:goodid
				},
				dataType:'json',
				success:function(res){	
				if(res.status==200){
					alert('删除成功')
					getListData()
				}
				}
			});
	})
$('.table-main-content2').on('click','.list-a',function(){
			 console.log(111)
		     let goodid = $(this).parent('.coom').siblings('.goodid2').text()
		     console.log(goodid)
			 $(this).parent('.coom').parent().remove();
			
			$.ajax({
				type:"post",
				url:api+"deletestore",
				data:{
					good:goodid
				},
				dataType:'json',
				success:function(res){	
				if(res.status==200){
					alert('删除成功')
					getList2Data()
				}
				}
			});
	})

$('.table-main-content6').on('click','.list-a',function(){
			 console.log(111)
		     let goodid = $(this).parent('.coom').siblings('.goodid6').text()
		     console.log(goodid)
			 $(this).parent('.coom').parent().remove();
			
			$.ajax({
				type:"post",
				url:api+"deletecollection",
				data:{
					good:goodid
				},
				dataType:'json',
				success:function(res){	
				if(res.status==200){
					alert('删除成功')
					getList6Data()
				}
				}
			});
	})