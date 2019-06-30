//显示你好啊，的函数
function dispalyUser() {
	var username = document.getElementById('user').value;
	console.log(username);
	alert("你好啊~" + username);
}

//显示click 的函数
var clickme = function() {
	alert("点我干嘛?");
}

//显示用户喜好的函数
var show = function() {
	var name = document.myform.name.value ;
	alert("姓名：" + name) ;
	var sex ;	// 表示性别
	if(document.myform.sex[0].checked) {
		sex = document.myform.sex[0].value ;
	} else {
		sex = document.myform.sex[1].value ;
	}
	alert("性别：" + sex) ;
	var inst = "" ;
	for(i=0 ; i<document.myform.inst.length; i++){
		if(document.myform.inst[i].checked){
			inst += document.myform.inst[i].value + "、" ;
		}
	}
	alert("兴趣：" + inst) ;
}

//显示变化的函数
var showSelect = function(val) {
	document.myform1.result.value = val ;
}

//显示window的confirm的函数
var delFun = function() {
	if(window.confirm("确认删除？")) {
		alert("您选择的“是”！") ;
	} else {
		alert("您选择的“否”！") ;
	}
}

//显示日期的函数
setInterval(function() {
	
	var today = new Date();
	document.getElementById("date").innerText = today.toLocaleString();

}, 500); 