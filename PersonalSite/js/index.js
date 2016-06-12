// JavaScript Document


$(document).ready(function(e) {
   $('.navigation>li').click(function(){
   	$('.navigation>li>a').removeClass()
	$(this).find('a').addClass('text')
   })

	arr = $('.left li p');

	for(var i = 0, l = arr.length; i < l; i++) { 
		$(arr[i]).mouseover(updateNumber(i,parseInt(arr[i].innerHTML)));
	}

	$("ul.small li img").mousedown(function(){
		$("ul.small li img").removeClass('pic');
		$(this).addClass('pic');
	});

});


function updateNumber(element,n){
	var ps = arr[element];
	var num = parseInt(ps.innerHTML);
	if(num==n){
		num=0;
	}
	ps.innerHTML = num + 1;
	if(num < n-1){
		window.setTimeout("updateNumber("+element+"," + n + ")",2);
	}
}

