(function ( $ ) {

	var methods = {
		init : function(options) {
			this.slider = this.find(".web-slider-slider");
			this.leftPaging = this.find(".web-slider-paging.left");
			this.rightPaging = this.find(".web-slider-paging.right");
			totalWidthOfContent = 0; 
			var that = this;
			this.find(".page").each(function(i, el) {
				that.slider.width(that.slider.width() + $(el).outerWidth(true, true));

				totalWidthOfContent += $(el).outerWidth(true, true);
				that.webSlider("adaptContainerWidth", $(el).outerHeight(true, true));

							// Adapt the height of the container when images get loaded
							$(el).find("img").on("load", function() {
								this.webSlider.adaptContainerWidth($(this).outerHeight(true, true));
							})

						});

			this.webSlider("adjustPagingVisibility");
			this.leftPaging.on("click", function() {
				that.webSlider("left")
			});

			this.rightPaging.on("click", function() {
				that.webSlider("right")
			});
		},
		adaptContainerWidth : function(childHeight) {
			if (childHeight > this.height())
				this.height(childHeight)
		},
		adjustPagingVisibility : function() {
			this.leftPaging.toggle(this.slider.position().left != 0)
			this.rightPaging.toggle(this.slider.position().left != -totalWidthOfContent + this.width())
		},
		left : function() {
			var newPos = this.slider.position().left + this.find(".page").first().outerWidth(true, true);

			if (newPos > 0)
				newPos = 0;

			this.slider.css({
				left: newPos
			})

			this.webSlider("adjustPagingVisibility");
		},
		right : function() {

			var newPos = this.slider.position().left - this.find(".page").first().outerWidth(true, true);

			if (newPos < -totalWidthOfContent + this.width()) 
				newPos = -totalWidthOfContent + this.width();

			this.slider.css({
				left: newPos
			})

			this.webSlider("adjustPagingVisibility");
		}
	};

	$.fn.webSlider = function(methodOrOptions) {
		if ( methods[methodOrOptions] ) {
			return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
		}    
	};
	
}( jQuery ));
