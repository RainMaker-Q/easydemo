
function dispalyUser() {
	var username = document.getElementById('user').value;
	console.log(username);
	alert("你好啊~" + username);
}



setTimeout(function() {
	//var showdate = document.getElementById("date");
	var today = new Date();
	document.getElementById("date").innerText = today.toLocaleString();
	// var year = today.getFullYear();
	// var month = today.getMonth() + 1;
	// var day = today.getDate();
	// var hour = today.getHours();
	// //document.getElementById("pid").innerText
	// document.getElementById("date").innerText = year+"年"+month+"月"+day+"日" 
}, 1000); 