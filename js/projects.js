$(document).ready(function() {
	$('#nav-button').click(function() {
		$(".slide-menu").toggleClass("is-visible");
	})
	$('#button-blue').click(function() {
		$('#form-div').hide();
		$('.thank-you').show();
	})
});