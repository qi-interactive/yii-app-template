qi = window.qi || {};
qi.widget = qi.widget || {};
qi.widget.web = qi.widget.web || {};
qi.widget.web.slider = {};

var container; 
var leftPaging;
var rightPaging;
var totalWidthOfContent;


$(window).ready(function() {
	qi.widget.web.slider.init()
})

qi.widget.web.slider.init = function() {

	container = $("#yw1");
	slider = container.find(".web-slider-slider")
	leftPaging = container.find(".web-slider-paging.left");
	rightPaging = container.find(".web-slider-paging.right");
	totalWidthOfContent = 0; 

	container.find(".page").each(function(i, el) {
		slider.width(slider.width() + $(el).outerWidth(true, true));

		totalWidthOfContent += $(el).outerWidth(true, true);
		qi.widget.web.slider.adaptContainerWidth($(el).outerHeight(true, true));

		// Adapt the height of the container when images get loaded
		$(el).find("img").on("load", function() {
			qi.widget.web.slider.adaptContainerWidth($(this).outerHeight(true, true));
		})

	});

	qi.widget.web.slider.adjustPagingVisibility();
	leftPaging.on("click", qi.widget.web.slider.navigateLeft)
	rightPaging.on("click", qi.widget.web.slider.navigateRight)
}

qi.widget.web.slider.adaptContainerWidth = function(childHeight) {
	if (childHeight > container.height())
		container.height(childHeight)
}

qi.widget.web.slider.navigateLeft = function() {

	var newPos = slider.position().left + container.find(".page").first().outerWidth(true, true);

	if (newPos > 0)
		newPos = 0;

	slider.css({
		left: newPos
	})

	qi.widget.web.slider.adjustPagingVisibility();
}

qi.widget.web.slider.navigateRight = function() {

	var newPos = slider.position().left - container.find(".page").first().outerWidth(true, true);

	if (newPos < -totalWidthOfContent + container.width()) 
		newPos = -totalWidthOfContent + container.width();

	slider.css({
		left: newPos
	})

	qi.widget.web.slider.adjustPagingVisibility();
}

qi.widget.web.slider.adjustPagingVisibility = function() {
	leftPaging.toggle(slider.position().left != 0)
	rightPaging.toggle(slider.position().left != -totalWidthOfContent + container.width())
}
