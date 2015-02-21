$(document).ready(function() {
	$('#nav-button').click(function() {
		$(".slide-menu").addClass("is-visible");
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