$(window).on("resize", function(e) {
	
	clearTimeout(sherwoodsoho._resizeTimeout);

	sherwoodsoho._resizeTimeout = setTimeout(function() {
		sherwoodsoho.adaptContentcontainerHeight();
		sherwoodsoho.resizeFooter();
		if ($(window).width() > 767){
			sherwoodsoho.adaptFontSize();
			sherwoodsoho.adaptContentcontainerHeight()
			sherwoodsoho.resizeFooter();
		}
	}, 10);	

})


sherwoodsoho.adaptContentcontainerHeight = function(){

	var newWindowheight =  $(window).height() -  $('footer').height();

	contentContainerHeight = $('#content-container').height();
	var newPos =  newWindowheight/2 + -(contentContainerHeight/2);

	if (newPos < 20)
		newPos = 20;

	$('#content-container').css({
		'top': newPos
	});
}


sherwoodsoho.resizeFooter = function(){
	if ($(window).height() - $("#content-container").outerHeight(true, true) < 150 ) {
	} else {
		$("footer").show().css("height", $(window).height() * 0.2);
	}
}

sherwoodsoho.adaptFontSize = function() {

	var newFontSize = null;


	if ($(window).height() < 600) {
		newFontSize = "12px";

	} else {
		newFontSize = $(window).height() / 45.5;

	}
	$("body").css("font-size", newFontSize);

	$("[max-font-size]").each(function(i, el) {

		el = $(el);
		el.removeAttr("style");

		var maxFontSize = parseInt(el.attr("max-font-size"));

		if (parseInt(el.css("font-size")) > maxFontSize)
			el.css("font-size", maxFontSize);
	})
