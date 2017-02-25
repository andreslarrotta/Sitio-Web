$(document).ready(function() {
	$("#perfilmenu").click(function(){
		$('html, body').animate({
		    scrollTop: $("#perfil").offset().top
		}, 2000);
	});

	$("#portafoliomenu").click(function(){
		$('html, body').animate({
		    scrollTop: $("#portafolio").offset().top
		}, 2000);
	});
	$("#contactomenu").click(function(){
		$('html, body').animate({
		    scrollTop: $("#art").offset().top
		}, 2000);
	});
	$("#soy").click(function(){
		$('html, body').animate({
		    scrollTop: $("#innovacion").offset().top
		}, 2000);
	});
});