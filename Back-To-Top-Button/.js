var $j = jQuery.noConflict();

$j(function () {
        // hide #back-top first
	$j("#back-top").hide();
});
	
	// fade in #back-top
	$j(function () {
		$j(window).scroll(function () {
			if ($j(this).scrollTop() > 100) {
				$j('#back-top').fadeIn();
			} else {
				$j('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$j('#back-top a').click(function () {
			$j('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
