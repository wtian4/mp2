$(document).ready(function(){
	$(".imageText").css({"top": $(".example-orbit").outerHeight()/4});
	$(window).resize(function(){
		$(".imageText").css({"top": $(".example-orbit").outerHeight()/4});
		//$(".modalthumbnail").css({"height": $("#videoModalContainer").outerHeight()});

	});

//	$(".modalthumbnail").css({"height": $("#videoModalContainer").outerHeight()});

});
