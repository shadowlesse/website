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