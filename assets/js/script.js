(function($) {

	var $window = $(window);

	// Parallax background effect
	$('section[data-type="background"]').each(function() {
		
		var $obj = $(this);  // assigning the object

		$(window).scroll(function() {

			var yPos = -( $window.scrollTop() / $obj.data('speed') );

			var coords = '50% ' + yPos + 'px';

			$obj.css({ backgroundPosition: coords });

		});

	});

}(jQuery));