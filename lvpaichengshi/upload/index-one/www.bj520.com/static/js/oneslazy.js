  

$(function() {

	$("img.lazy").lazyload({effect: "fadeIn"});

});
var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount;//当前剩余秒数
function sendMessage() {
	curCount = count;
  var phone=$("#dr_tel1").val();//手机号码
  if(phone != ""){
  //向后台发送处理数据
  $.ajax({
      type: "POST", //用POST方式传输
      dataType: "JSON", //数据格式:JSON
      url: 'https://www.bj520.com/index.php?c=Sms&m=sendSms', //目标地址
      data: {phone:phone,product:'2'},
      error: function (XMLHttpRequest, textStatus, errorThrown) { },
      success: function (msg){ 
      	console.log(msg);
      	if (msg.Code =='OK') {
              //设置button效果，开始计时
              $("#btnSendCode1").attr("disabled", "true");
              $("#btnSendCode1").val(curCount + "秒后重新获取");
    InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
}else{
	alert(msg.Message);
}
}
});
}else{
	alert("手机号码不能为空！");
}
}
//timer处理函数
function SetRemainTime() {
	if (curCount == 0) {                
    window.clearInterval(InterValObj);//停止计时器
    $("#btnSendCode1").removeAttr("disabled");//启用按钮
    $("#btnSendCode1").val("重新获取验证码");
    code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效    
}
else {
	curCount--;
	$("#btnSendCode1").val(curCount + "秒后重新获取");
}
}
	function sendform(){
	  var phone=$("#dr_tel1").val();//手机号码
	  var code =$("#checkCode1").val();
	  if(phone != "" && code != ""){
	  	$.ajax({
	      type: "POST", //用POST方式传输
	      dataType: "JSON", //数据格式:JSON
	      url: 'https://www.bj520.com/index.php?c=Sms&m=subform', //目标地址
	      data: {phone:phone,code:code},
	      error: function (XMLHttpRequest, textStatus, errorThrown) { },
	      success: function (msg){ 
	      	console.log(msg);
	      	if (msg.rcode==200) {
	      		$.ajax({
	              type: "POST", //用POST方式传输
	              dataType: "JSON", //数据格式:JSON
	              url: 'https://www.bj520.com/index.php?c=form_shouye', //目标地址
	              data: $('#hbform').serialize(),
	              error: function (XMLHttpRequest, textStatus, errorThrown) { },
	              success: function (info){ 
	              	console.log(info);
	              	if (info.status==1) {
	              		alert("领取成功，请点击确定！");
	              		window.location.href="https://www.bj520.com";
	              	}else{
	              		alert(info.code);
	              	}


	              }
	          });
	      	}else if (msg.rcode==300) {
	      		alert(msg.msg);
	      	}
	      }
	  });
	  }else{
	  	alert("姓名、手机号码或者验证码不能为空！");
	  }
	}

// 第二个表单 免费获取报价的
function sendMessage2() {
	curCount = count;
  var phone=$("#dr_tel2").val();//手机号码
  if(phone != ""){
  //向后台发送处理数据
  $.ajax({
      type: "POST", //用POST方式传输
      dataType: "JSON", //数据格式:JSON
      url: 'https://www.bj520.com/index.php?c=Sms&m=sendSms', //目标地址
      data: {phone:phone,product:'1'},
      error: function (XMLHttpRequest, textStatus, errorThrown) { },
      success: function (msg){ 
      	console.log(msg);
      	if (msg.Code =='OK') {
              //设置button效果，开始计时
              $("#btnSendCode2").attr("disabled", "true");
              $("#btnSendCode2").val(curCount + "秒后重新获取");
    InterValObj = window.setInterval(SetRemainTime2, 1000); //启动计时器，1秒执行一次
}else{
	alert(msg.Message);
}
}
});
}else{
	alert("手机号码不能为空！");
}
}
//timer处理函数
function SetRemainTime2() {
	if (curCount == 0) {                
    window.clearInterval(InterValObj);//停止计时器
    $("#btnSendCode2").removeAttr("disabled");//启用按钮
    $("#btnSendCode2").val("重新获取验证码");
    code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效    
}
else {
	curCount--;
	$("#btnSendCode2").val(curCount + "秒后重新获取");
}
}
	function sendform2(){
	  var phone=$("#dr_tel2").val();//手机号码
	  var code =$("#checkCode2").val();
	  if(phone != "" && code != ""){
	  	$.ajax({
	      type: "POST", //用POST方式传输
	      dataType: "JSON", //数据格式:JSON
	      url: 'https://www.bj520.com/index.php?c=Sms&m=subform', //目标地址
	      data: {phone:phone,code:code},
	      error: function (XMLHttpRequest, textStatus, errorThrown) { },
	      success: function (msg){ 
	      	console.log(msg);
	      	if (msg.rcode==200) {
	      		$.ajax({
	              type: "POST", //用POST方式传输
	              dataType: "JSON", //数据格式:JSON
	              url: 'https://www.bj520.com/index.php?c=form_shouye', //目标地址
	              data: $('#hbform2').serialize(),
	              error: function (XMLHttpRequest, textStatus, errorThrown) { },
	              success: function (info){ 
	              	console.log(info);
	              	if (info.status==1) {
	              		alert("领取成功，请点击确定！");
	              		window.location.href="https://www.bj520.com";
	              	}else{
	              		alert(info.code);
	              	}


	              }
	          });
	      	}else if (msg.rcode==300) {
	      		alert(msg.msg);
	      	}
	      }
	  });
	  }else{
	  	alert("姓名、手机号码或者验证码不能为空！");
	  }
	}
