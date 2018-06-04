$(".nav").hide(0).delay(500).fadeIn(3000);


// Page Loader
$(window).load(function(){
	$('#loader').fadeOut();
});

$(document).ready(function(){
	function collapse(){
		if ($('.navbar-toggle:visible').length) {
			$('.navbar a').click(function () { 
				$(".navbar-collapse").collapse("hide");
			});
		}
	}collapse();
		
	$(window).resize(function(){
		collapse();
	});
	
	
	$(".caption a").click(function() {
		$('html, body').animate({
			scrollTop: $("#travaux").offset().top-90
		}, 1000);
		return false;
	});
	
	
	// Nice Scroll Plugin
	jQuery("html").niceScroll({
		scrollspeed: 60,
		mousescrollstep: 40,
		cursorwidth: 7,
		cursorborder: "1px solid rgba(0,0,0,0)",
		cursorcolor: '#212121',
		cursorborderradius: 10,
		horizrailenabled: false,
		zindex: 94000
	});
	
	
	
	$('#t1').click(function () {
		$(".timeline a").removeClass("sel"); 
		$(".time").removeClass("sel"); 
		$(".t1").addClass("sel");
		$('#t1').addClass("sel");
		return false;
	});
	$('#t2').click(function () {
		$(".timeline a").removeClass("sel"); 
		$(".time").removeClass("sel"); 
		$(".t2").addClass("sel");
		$('#t2').addClass("sel");
		return false;
	});
	$('#t3').click(function () {
		$(".timeline a").removeClass("sel"); 
		$(".time").removeClass("sel"); 
		$(".t3").addClass("sel");
		$('#t3').addClass("sel");
		return false;
	});
	$('#t4').click(function () {
		$(".timeline a").removeClass("sel"); 
		$(".time").removeClass("sel"); 
		$(".t4").addClass("sel");
		$('#t4').addClass("sel");
		return false;
	});
	$('#t5').click(function () {
		$(".timeline a").removeClass("sel"); 
		$(".time").removeClass("sel"); 
		$(".t5").addClass("sel");
		$('#t5').addClass("sel");
		return false;
	});
	
	$('#t6').click(function () {
		$(".timeline a").removeClass("sel"); 
		$(".time").removeClass("sel"); 
		$(".t6").addClass("sel");
		$('#t6').addClass("sel");
		return false;
	});	
	
	
	/*  Menu */
	$('#menu_on').click(function () {
		$("#menu_on").css("display","none"); 
		$("#menu_off").css("display","block"); 		
		$(".navbar").fadeIn( 1000 );
		return false;
	});	
	
	/*  Menu */
	$('#menu_off').click(function () {
		$("#menu_off").css("display","none"); 
		$("#menu_on").css("display","block"); 		
		$(".navbar").fadeOut( 1000 );
		return false;
	});		

	
	
});









