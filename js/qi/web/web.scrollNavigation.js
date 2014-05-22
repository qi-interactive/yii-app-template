(function ( $ ) {

	var methods = {
		init : function(options) {
			$(this).each(function(i, el) {
				$(el).on("click", function() {

					var selector = $(this).attr("data-scroll-navigation")

					$("html, body").animate({
						scrollTop: $(selector).offset().top
					},1500);
				})
			})
		},
		adaptContainerWidth : function() {

		}
	};

	$.fn.scrollNavigation = function(methodOrOptions) {
		if ( methods[methodOrOptions] ) {
			return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.scrollNavigation' );
		}    
	};

}( jQuery ));
