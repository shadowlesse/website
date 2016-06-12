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
		var name = $(this).attr("name");
		var d = dic[name];
		$("div.big img").attr("src",d["img"]);
		$("div.discription h3").text(d["title"]);
		$("div.discription p").text(d["desc"]);
	});

	var dic = {
		"1": {"img":"images/pics_01.jpg", "title":"Graphic Design", "desc":
			'Graphic design is the process of visual communication, and problem-solving through the correct use of typography, space, image and color. The field is considered a subset of visual communication and communication design, but sometimes the term "graphic design" is used interchangeably with these due to overlapping skills involved. Graphic design often refers to both the process (designing) by which the communication is created and the products (designs) which are generated.'},
		"2": {"img":"images/pics_03.jpg", "title":"Graphic Design2", "desc":
			'2Graphic design is the process of visual communication, and problem-solving through the correct use of typography, space, image and color. The field is considered a subset of visual communication and communication design, but sometimes the term "graphic design" is used interchangeably with these due to overlapping skills involved. Graphic design often refers to both the process (designing) by which the communication is created and the products (designs) which are generated.'},
		"3": {"img":"images/pics_06.jpg", "title":"Graphic Design3", "desc":
			'3Graphic design is the process of visual communication, and problem-solving through the correct use of typography, space, image and color. The field is considered a subset of visual communication and communication design, but sometimes the term "graphic design" is used interchangeably with these due to overlapping skills involved. Graphic design often refers to both the process (designing) by which the communication is created and the products (designs) which are generated.'},
		"4": {"img":"images/pics_08.jpg", "title":"Graphic Design4", "desc":
			'4Graphic design is the process of visual communication, and problem-solving through the correct use of typography, space, image and color. The field is considered a subset of visual communication and communication design, but sometimes the term "graphic design" is used interchangeably with these due to overlapping skills involved. Graphic design often refers to both the process (designing) by which the communication is created and the products (designs) which are generated.'},
		"5": {"img":"images/pics_10.jpg", "title":"Graphic Design5", "desc":
			'5Graphic design is the process of visual communication, and problem-solving through the correct use of typography, space, image and color. The field is considered a subset of visual communication and communication design, but sometimes the term "graphic design" is used interchangeably with these due to overlapping skills involved. Graphic design often refers to both the process (designing) by which the communication is created and the products (designs) which are generated.'}
		};
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

