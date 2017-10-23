$(function(){
	var param=location.search.substring(1);
	var pid=getParams(param,"id");
	console.log(pid);
	
	$.get("json/spxq.json",function(data){
		var arr=data;
		for(var i=0; i<arr.length; i++){
			var obj=arr[i];
			if(obj.id==pid){
				loadUI(obj);
			}
		}
	})
	
	function loadUI(obj){
		$("#box3 img").attr("src",obj.img);
		$("#box6").attr("src",obj.img);
		$("h5").html(obj.name);
		$("p").html(obj.currentprice+obj.originalcost);
		$(".box2-8 div span").html(obj.id);
	}
	
	function getParams(str,name){
		var arr=str.split("&");
		for(var i=0; i<arr.length; i++){
			var str1=arr[i];
			var arr1=str1.split("=");
			if(arr1[0]==name){
				return arr1[1];
			}
		}
		return "";
	}
	  //放大镜  
	$("box4").width($("#box3").width()*$("#box5").width()/$("#box6").width());
	$("box4").height($("#box3").height()*$("#box5").height()/$("#box6").height());
	
	var fangda=$("#box6").width()/$("#box3").width();
	
	$("#box3").mousemove(function(e){
		$("#box5").show();
		$("#box4").show();
		
		var x=e.pageX-$("#box3").offset().left-$("#box4").width()/2;
		var y=e.pageY-$("#box3").offset().top-$("#box4").height()/2;
		
		if(x<0){
			x=0;
		}else if(x>$("#box3").width()-$("#box4").width()){
			x=$("#box3").width()-$("#box4").width();
		}
		
		if(y<0){
			y=0;
		}else if(y>$("#box3").height()-$("#box4").height()){
			y=$("#box3").height()-$("#box4").height();
		}
		
		$("#box4").css({left:x, top:y});
		
		$("#box6").css({left:-fangda*x, top:-fangda*y})
	})
	
	    $("#box3").mouseleave(function(){
	    	$("#box4").hide();
	    	$("#box5").hide();
	    })
	
	
	   $(".box2-11").click(function(){
	   	location.href="shopping cart.html"
	   })
	 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})