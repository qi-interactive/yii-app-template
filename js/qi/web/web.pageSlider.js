(function ( $ ) {

	var methods = {
		init : function(options) {
			this.pageSlider("addEventsToPaging");
			$(".paging-btn-circle").first().trigger("click");

			var that = $(this);
			this.find(".page").each(function(i, page) {
				$(page).width(that.width());
			})


			$(window).on("resize", function() {
				that.find(".page").each(function(i, page) {
					$(page).width(that.width());
					that.height(that.find(".page").height())
				})
			})


			$(window).trigger("resize");
		},

		addEventsToPaging: function() {
			$(".paging-btn-circle").on("click", function() {

				if ($(this).hasClass("current-page"))
					return;
				
				var index = $(this).index();

				$(".paging-btn-circle").removeClass("current-page");
				$(this).addClass("current-page");

				$(".page").stop().animate({
					duration: 500
				});


				$(".slider").animate({
					"left":  ($(".page").width() * index) * -1
				})


			});
		},

		adaptContainerWidth : function() {
			that.find(".page").each(function(i, page) {
				$(page).width(that.width());
			});

			
		}


	};

	$.fn.pageSlider = function(methodOrOptions) {
		if ( methods[methodOrOptions] ) {
			return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.pageSlider' );
		}    
	};
	
}( jQuery ));
