var container = document.querySelector('#project-gallery');
var msnry = new Masonry( container, {
	// options
	columnWidth: 500,
	itemSelector: ".project-box"
});
console.log(msnry);