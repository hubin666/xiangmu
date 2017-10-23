$(function(){
	var arr=[];
	$.get("json/spxq.json",function(data){
		arr=data;
		for(var i=0; i<arr.length; i++){
			var obj=arr[i];
			var li=$("<li></li>").appendTo("#ul3")
			$("<img src="+obj.img+">").appendTo(li);
			$("<h5>"+obj.name+"</h5>").appendTo(li);
			$("<p>"+obj.originalcost+"<span style='padding-left:20px'>"+obj.currentprice+"</span></p>").appendTo(li);
		}
	})
	
	$("#ul3").on("click","li",function(){
		var index=$(this).index("#ul3 li");
		var obj=arr[index];
		location.href="commodity details.html?id="+obj.id;	
		
		var arr2 = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
      
					//判断原来的购物车中是否有相同商品
					var isExist = false;
					for (var i=0; i<arr2.length; i++) {
						if (arr2[i].id == obj.id) {
							arr2[i].num++;
							isExist = true;
							break;
						}
					}
					if (isExist ==  false) {
						obj.num = 1;
						obj.checked = true; //是否选中， 默认选中 
						arr2.push(obj);
					}

		$.cookie("cart",JSON.stringify(arr2),{expires:30, path:"/"})
		console.log($.cookie("cart"))
	})
})