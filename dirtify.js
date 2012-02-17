(function($) {
	
	var methods = {
		init: function(options) {
			return this.each(function() {
				$this = $(this);
				$this.find('input')
					.each(function() {
						$(this).data('old-value', $(this).val());
					})
					.on('change', function() {
						if($(this).val() !== $(this).data('old-value')) {
							$(this).addClass('dirty');
						} else if($(this).hasClass('dirty')) {
							$(this).removeClass('dirty');
						}
					});
			});
		},
		isDirty: function() {
			return $(this).find('.dirty').length > 0;
		},
		clean: function() {
			return this.each(function() {
				$this = $(this);
				$this.find('input.dirty')
					.removeClass('dirty')
					.each(function() {
						$(this).val($(this).data('old-value'));
					});

			});
		}
	}
	
	$.fn.dirtify = function(method) {
		
		if(methods[method]) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
	    	return methods.init.apply( this, arguments );
	    }
		
	}
	
}(jQuery))