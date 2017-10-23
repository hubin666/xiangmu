window.onload=function(){
	function $(id){
					return document.getElementById(id)
				};
//		var ul1=$("ul1");
//		var box2=$("box2");
//		var box=$("box");
//		var ul2=$("ul2");
//		var oli=ul1.getElementsByTagName("li");
//		var ali=ul2.getElementsByTagName("li");
//		
//		ul1.appendChild(oli[0].cloneNode(true));
//		
//		var size=oli.length;
//		var liW=oli[0].offsetWidth;
//		ul1.style.width=size*liW+"px";
//		var ix=0;
//				var sa=setInterval(function(){
//				 	ix++;
//				 	fk();
//				 },4000)
//				function fk(){
//					if(ix>=size){
//						ul1.style.left=0;
//						ix=1;
//					};
//					if(ix<0){
//						ul1.style.left=-liW*(size-1)+"px";
//						ix=size-2;
//					}
//					move(ul1,{left:-ix*liW});
//					for(var i=0; i<ali.length; i++){
//						if(i==ix){
//							ali[i].className="active";
//						}else{
//							ali[i].className=" ";
//						}
//					}
//					if(ix==size-1){
//						ali[0].className="active";
//					}
//					
//					//移入下方li事件
//					for(var i=0;i<ali.length;i++){
//						ali[i].ix=i;
//						ali[i].onmouseenter=function(){
//							ix=this.ix;
//							fk();
//						}
//					};
//				}
//				
//				    //移入box		
//				 box2.onmouseenter = function(){
//					 clearInterval(sa);
//				    }
//				 
//				     //移出box
//				  box2.onmouseleave = function(){
//					 clearInterval(sa);
//					 sa= setInterval(function(){
//						ix++;
//						fk();
//					}, 4000);
//				};
				
				
				//第二轮播图
		    var box32=document.getElementsByClassName("box3-2")
	        var box33=document.getElementsByClassName("box3-3")
	        var ul3=document.getElementById("ul3")
	        var qli=ul3.getElementsByTagName("li")			
			//每个li的宽度
				var liWq = qli[0].offsetWidth;						
			//自动轮
			 var index=0;
				var saq=setInterval(function(){
					index++;
					if(index==2){
						move(ul3,{left:0});
						index=0;
					}else{
						fk1();
					}				 	
				 },3000)
				function fk1(){
					move(ul3,{left:-liWq});					
				}															
	}			

