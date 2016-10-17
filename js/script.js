function bRed(){
	$(".redbob").css("background-color", "red");
	$(".devilDiv").html("<img align='middle' src='img/devil.jpg' />")
	$("a").css("color", "red");

	setTimeout(function() {
		fix();
	}, 500);
}

function fix(){
	$(".redbob").css("background-color", "#779ECB");
	$(".devilDiv").html("");
	$("a").css("color", "#779ECB")
}
