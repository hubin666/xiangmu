$(function(){
	 refresh();
	function refresh(){
	var arr=$.cookie("cart");
	if(arr){
		arr= JSON.parse(arr);
		
		//先清除旧节点
		$(".ul9").empty();
         var ss=0;
         var sss=0;
		//遍历数组
		for(var i=0; i<arr.length; i++){
			var obj=arr[i];
			//创建节点
			var li=$("<li class='l1'></li>").appendTo(".ul9");
			var li1=$("<li class='l2'></li>").appendTo(".ul9");
			var li2=$("<li class='l3'></li>").appendTo(".ul9");
			var li3=$("<li class='l4'></li>").appendTo(".ul9");
			var li4=$("<li class='l5'></li>").appendTo(".ul9");
			$('<img class="img" src="'+obj.img+'"/>').appendTo(li);
			$('<h4>'+obj.name+'</h4>').appendTo(li);
			$('<li>'+obj.currentprice+'</li>').appendTo(li1);
			$('<input class="tex3" type="button" value="-" />').appendTo(li2);
			$('<input class="tex4" type="text" value="'+ obj.num +'" />').appendTo(li2);
			$('<input class="tex5" type="button" value="+" />').appendTo(li2);
            $('<li>'+obj.currentprice+'</li>').appendTo(li3);
            $('<a href="#" class="aa">删除商品</a>').appendTo(li4);
            
            ss+=obj.currentprice*obj.num;
            sss+=obj.num;
            $("#s").html("¥"+ss);
            $("#b1").html(sss)
		}
	}else{
		alert("亲，您还没有选购商品哦。")
	}
	};
	
		//+
				$(".ul9").on("click", ".tex5", function(){
					var index = $(this).index(".ul9 .tex5");
					
					//获取cookie并修改
					var arr = JSON.parse($.cookie("cart"));
					arr[index].num++;
					
					//覆盖原来的cookie
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					
					//刷新节点数据
					refresh();
				})
				
				//-
				$(".ul9").on("click", ".tex3", function(){
					var index = $(this).index(".ul9 .tex3");
					
					//获取cookie并修改
					var arr = JSON.parse($.cookie("cart"));
					arr[index].num--;
					if (arr[index].num < 1) {
						arr[index].num = 1;
					}

					//覆盖原来的cookie
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					
					//刷新节点数据
					refresh();
				})
				
				//删除
				$(".ul9").on("click", ".aa", function(){
					var index = $(this).index(".ul9 .aa");
					
					//获取cookie并修改
					var arr = JSON.parse($.cookie("cart"));
					arr.splice(index, 1); //删除数组arr的第index个
					
					//覆盖原来的cookie
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
									
					//刷新节点数据
					refresh();					
				})

           $(".p2").click(function(){
           	location.href="tiangou.html"
           })
           
           $(".p1").click(function(){
           	$(".ul9").css("display","none")
           	$("#b1").css("display","none")
           	$("#s").css("display","none")
           	//获取cookie并修改
           	var index = $(this).index(".ul10 .p1");
					var arr = JSON.parse($.cookie("cart"));
					arr.splice(index); //删除数组arr的第index个
					
					//覆盖原来的cookie
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
									
					//刷新节点数据
					refresh();
           })
})