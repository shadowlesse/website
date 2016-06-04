function changeText(){
	var f = $('#func input:eq(0)');
	console.log(f.val());
	f.attr("value","after");
	console.log(f.val());
	f.val("after1");
	console.log(f.val());
}


$(document).ready(
	window.setTimeout(changeText, 1000)
);


$(document).ready(
	window.setTimeout(function(){
		var f = $('#func input:eq(0)');
		f.addClass("red");
		f.addClass("big");
		f.removeClass("normal");
	}, 2000)
);
