$(document).ready(function(){

var flag = false;
var scroll;

//cada vez que haga scroll en la web voy a llamar esta funcion
$(window).scroll(function(){
	scroll = $(window).scrollTop();

	if (scroll > 20) {
		if (!flag) {
			$("#logomenu").css({"margin-top": "-5px", "width": "50px"});
			$("header").css({"background-color": "white", "color": "black"});
			$("header a").css({"color": "black"});
			flag=true;
			}
	}
	else{
		if (flag) {
			$("#logomenu").css({"margin-top": "150px", "width": "250px"});
			$("header").css({"background-color": "transparent", "color": "white"});
			$("header a").css({"color": "white"});
			flag=false;
		}

	}
});
});
