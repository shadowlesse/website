// JavaScript Document

$(document).ready(function(e) {
	
	$('#marquee1').kxbdSuperMarquee({
				distance:1116,
				time:2,
				btnGo:{left:'#goL',right:'#goR'},
				direction:'left'
			});
			
	$('#marquee_small').kxbdSuperMarquee({
				distance:288,
				time:2,
				btnGo:{left:'#goL_small',right:'#goR_small'},
				direction:'left'
			});
	
	var goL_small_img = $('#goL_small img');
	var goR_small_img = $('#goR_small img');
	goL_small_img.mousedown(function(){
			$(this).attr("src","images/arrow_07_1.jpg");
		});
	goL_small_img.mouseup(function(){
			$(this).attr("src","images/arrow_07.jpg");
		});
	goR_small_img.mousedown(function(){
			$(this).attr("src","images/arrow_08.jpg");
		});
	goR_small_img.mouseup(function(){
			$(this).attr("src","images/arrow_08_1.jpg");
		});
	
			
	$('.fancybox').fancybox();
	
	$('.nav_inner>ul>li').hover(function(){
		
		$(this).find('.sub_nav').show()
		$(this).addClass("active")
		$(this).removeClass("line")
		$(this).prev().removeClass("line")

		},function(){
			
		$(this).find('.sub_nav').hide()
		$('.nav_inner>ul>li').removeClass("active")
		$('.nav_inner>ul>li').addClass("line")
		
		
			})
});

function msg()
  {
  alert("Hello world!测试一下");
  }