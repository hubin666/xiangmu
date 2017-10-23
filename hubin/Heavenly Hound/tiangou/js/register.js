onload=function(){
	var flag1=false;
	var flag2=false;
	var flag3=false;
	var flag4=false;
	var flag5=false;
	var input=document.getElementById("inp");
	var sp=document.getElementById("sp");
	var input1=document.getElementById("inp1");
	var sp1=document.getElementById("sp1");
	var input2=document.getElementById("inp2");
	var sp2=document.getElementById("sp2");
	var input3=document.getElementById("inp3");
	var sp3=document.getElementById("sp3");
	var input4=document.getElementById("inp4");
	var sp4=document.getElementById("sp4");
	var sp5=document.getElementById("sp5");
	//用户名
	input.onkeyup=function(){
		var value=this.value;
		var reg=/^\w{5,14}$/;
		if(reg.test(value)){
			sp.innerHTML="用户名合法";
			flag1=true;
			sp.style.color="#008000"
		}else{
			sp.innerHTML="用户名不合法";
			flag1=false;
			sp.style.color="red"
		}
	};
	//密码
	input1.onkeyup=function(){
		var value=this.value;
		var reg=/^\w{6,15}$/;
		if(reg.test(value)){
			sp1.innerHTML="密码格式输入正确";
			flag2=true;
			sp1.style.color="#008000"
		}else{
			flag2=false;
			sp1.style.color="red";
			sp1.innerHTML="密码格式错误";
		}
	};
	//确认密码
	input2.onkeyup=function(){
		var value=this.value;
		if(value==input1.value){
			flag3=true;
			sp2.style.color="#008000";
			sp2.innerHTML="确认密码正确";
		}else{
			flag3=false;
			sp2.style.color="red";
			sp2.innerHTML="确认密码错误";
		}
	};
	//邮箱
	input3.onkeyup=function(){
		var value=this.value;
		var reg=/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
		if(reg.test(value)){
			sp3.innerHTML="邮箱输入正确";
			flag4=true;
			sp3.style.color="#008000"
		}else{
			flag4=false;
			sp3.innerHTML="邮箱格式错误";
			sp3.style.color="red";
		}
	};
	//验证码
	input4.onkeyup=function(){
		fn()
	}
	sp5.onclick=function(){
		var str="";
		for(var i=0; i<4; i++){
			str+=parseInt(Math.random()*10);
		}
		this.value=str;
		
	}
	
	function fn(){
		if(input4.value==sp5.value){
			sp4.innerHTML="验证码输入正确";
			flag5=true;
			sp4.style.color="#008000";
		}else{
			flag5=false;
			sp4.innerHTML="验证码输入错误";
			sp4.style.color="red"
		}
	}
}
