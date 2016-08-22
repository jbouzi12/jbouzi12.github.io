(function($){
	var wow = new WOW(
		{
	  		boxClass:     'wow',      // default
			  animateClass: 'animated', // default
			  offset:       0,          // default
			  mobile:       true,       // default
			  live:         true        // default
		}
	);

	$(document).ready(function() {

		wow.init();

		$('#nav-button').click(function(e) {
			$(".slide-menu").toggleClass("is-visible");
		});

		$('.fadeable').each (function(i, img) {
			$(img).load(function(e) {
				$(this).fadeIn(10000);
			});
		});

		$('.fadeable_last').load(function(e) {
			$(this).fadeIn(14000);
		});

		$('#button-blue').click(function(e) {
			$('#form-div').hide();
			$('.thank-you').show();
		});

		$('#start').click(function(e){
			e.preventDefault();
			$('html, body').animate({
	      scrollTop: $("#about").offset().top
	    }, 2000);		})
	});

})(jQuery);
