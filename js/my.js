

// if ($(window).width() < 768) {
// 	$('.new-break').replaceWith('<br>');
// }
$('.btn-nav, .nav-close').click(function(){
	console.log("nav clicked");
	$('.slideout-menu').toggleClass("navtoggle");
	$('.slideout-menu').delay( 300 ).toggleClass("slideout-open");
});

// filter
$('#filter li.fl').click(function(){
	$('#thumbnails .project').hide();
	$('#thumbnails .project.logo').show();
});
$('#filter li.fp').click(function(){
	$('#thumbnails .project').hide();
	$('#thumbnails .project.painting').show();
});
$('#filter li.fi').click(function(){
	$('#thumbnails .project').hide();
	$('#thumbnails .project.illustration').show();
});
$('#filter li.fw').click(function(){
	$('#thumbnails .project').hide();
	$('#thumbnails .project.web').show();
});
$('#filter li.fa').click(function(){
	$('#thumbnails .project').show();
});
