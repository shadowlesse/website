// JavaScript Document


$(document).ready(function(e) {
   $('.navigation>li').click(function(){
   	$('.navigation>li>a').removeClass();
	$(this).find('a').addClass('text');
   });

	arr = $('.left li p');

	for(var i = 0, l = arr.length; i < l; i++) { 
		addElement(arr[i].id, parseInt(arr[i].innerHTML));
	}

	$('.left').mouseover(function(e){
		if(e.target.nodeName=="P"){
			up(e.target.id);
		}
	});


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
		"2": {"img":"images/pics_03.jpg", "title":"Animation", "desc":
			'2Graphic design is the process of visual communication, and problem-solving through the correct use of typography, space, image and color. The field is considered a subset of visual communication and communication design, but sometimes the term "graphic design" is used interchangeably with these due to overlapping skills involved. Graphic design often refers to both the process (designing) by which the communication is created and the products (designs) which are generated.'},
		"3": {"img":"images/pics_06.jpg", "title":"Photography", "desc":
			'3Graphic design is the process of visual communication, and problem-solving through the correct use of typography, space, image and color. The field is considered a subset of visual communication and communication design, but sometimes the term "graphic design" is used interchangeably with these due to overlapping skills involved. Graphic design often refers to both the process (designing) by which the communication is created and the products (designs) which are generated.'},
		"4": {"img":"images/pics_08.jpg", "title":"Drawing", "desc":
			'4Graphic design is the process of visual communication, and problem-solving through the correct use of typography, space, image and color. The field is considered a subset of visual communication and communication design, but sometimes the term "graphic design" is used interchangeably with these due to overlapping skills involved. Graphic design often refers to both the process (designing) by which the communication is created and the products (designs) which are generated.'},
		"5": {"img":"images/pics_10.jpg", "title":"Mobile Design", "desc":
			'5Graphic design is the process of visual communication, and problem-solving through the correct use of typography, space, image and color. The field is considered a subset of visual communication and communication design, but sometimes the term "graphic design" is used interchangeably with these due to overlapping skills involved. Graphic design often refers to both the process (designing) by which the communication is created and the products (designs) which are generated.'}
		};
});

function up(id){
	n = dc[id];
	ele = $("#"+id).get(0);
	var num = parseInt(ele.innerHTML);
	if(num==n){
		num=0;
	}
	ele.innerHTML = num + 1;
	if(num < n-1){
		window.setTimeout("up('"+ id + "')",2);
	}
}


dc={};

function addElement(id,n){
	dc[id]=n;
}

