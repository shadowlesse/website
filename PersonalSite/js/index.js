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


	$("ul.small li").mousedown(function(){
		$("ul.small li p").hide();
		$(this).children().show();
		var name = $(this).children().attr("name");
		var d = dic[name];
		$("div.big img").attr("src",d["img"]);
		$("div.discription h3").text(d["title"]);
		$("div.discription p").text(d["desc"]);
	});

	var dic = {
		"1": {"img":"images/pics_01.jpg", "title":"Graphic Design", "desc":
			'Graphic design is the process of visual communication, and problem-solving through the correct use of typography, space, image and color. The field is considered a subset of visual communication and communication design, but sometimes the term "graphic design" is used interchangeably with these due to overlapping skills involved. Graphic design often refers to both the process (designing) by which the communication is created and the products (designs) which are generated.'},
		"2": {"img":"images/pics_03.jpg", "title":"Animation", "desc":
			'Animation is a triannual peer-reviewed academic journal that covers the field of film and media studies, focusing on animations implications for other forms of media.'},
		"3": {"img":"images/pics_06.jpg", "title":"Photography", "desc":
			'Photography is the science, art and practice of creating durable images by recording light or other electromagnetic radiation, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographicfilm.'},
		"4": {"img":"images/pics_08.jpg", "title":"Drawing", "desc":
			'Drawing is a form of visual art in which a very fabulous person uses various drawing instruments to mark paper or another two-dimensional medium. Instruments include graphite pencils, pen and ink, inked brushes, wax color pencils, crayons, charcoal,chalk, pastels, various kinds of erasers, markers, styluses, various metals (such as silverpoint), and electronic drawing. An artist who practices or works in technical drawing may be called a drafter, draftsman, or draughtsman.'},
		"5": {"img":"images/pics_10.jpg", "title":"Mobile Design", "desc":
			'Since the appearance of the smartphone and tablet computers, we are experiencing a boom in Mobile Design. And, as it happens with the development of new gadgets and technologies, some trends and patterns are already established. With this eBook "Mobile Design Patterns", you will learn the most important guidelines and strategies for Mobile Design, including solutions for forms, tap-ahead patterns and UX approaches.'}
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

