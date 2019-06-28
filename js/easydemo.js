
function dispalyUser() {
	var username = document.getElementById('user').value;
	console.log(username);
	alert("你好啊~" + username);
}



setInterval(function() {
	
	var today = new Date();
	document.getElementById("date").innerText = today.toLocaleString();

}, 500); 