(function(jQuery){
	var wow = new WOW(
		{
	  		boxClass:     'wow',      // default
			  animateClass: 'animated', // default
			  offset:       0,          // default
			  mobile:       true,       // default
			  live:         true        // default
		}
	);

	jQuery(document).ready(function() {
		
		wow.init();

		jQuery('#nav-button').click(function() {
			jQuery(".slide-menu").toggleClass("is-visible");
		});

		jQuery('.fadeable').each (function(i, img) {
			jQuery(img).load(function(e) {
				jQuery(this).fadeIn(10000);
			});
		});

		jQuery('.fadeable_last').load(function(e) {
			jQuery(this).fadeIn(14000);
		});

		jQuery('#button-blue').click(function() {
			jQuery('#form-div').hide();
			jQuery('.thank-you').show();
		});
	});

})($);