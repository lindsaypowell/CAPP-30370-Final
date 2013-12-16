window.onload = function(){
    var $windowwidth = $(window).width() ;
    console.log("Initial Window Width:" + $windowwidth)        
};
                
$(window).resize(function(){
  	var $windowwidth = $(window).width() ;
    $('.width').text($windowwidth)
    console.log("Window Width:" + $windowwidth)
});

$('img').on("click", function() {
	console.log("Image alt:" + this.getAttribute('alt'));
	console.log("Image width:" + $(this).css("width"));
	console.log("Image height:" + $(this).css("height"));
});

$('header').on("click", function() {
	console.log("Header Text:" + $(this).text());
	console.log("Header Color:" + $(this).css("color"));
	console.log("Header Font-Size:" + $(this).css("font-size"));
});

