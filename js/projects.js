$(document).ready(function() {
	$('#nav-button').click(function() {
		$(".slide-menu").toggleClass("is-visible");
	})
	$('.fadeable').each (function(i, img) {
		$(img).load(function(e) {
			$(this).fadeIn(10000);
		})
	});

	$('.fadeable_last').load(function(e) {
		$(this).fadeIn(14000);
	})
})
	$('#button-blue').click(function() {
		$('#form-div').hide();
		$('.thank-you').show();
	})
});
