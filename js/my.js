

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
	$('#filter li').removeClass('selected');
	$('#thumbnails .project').hide();
	$(this).addClass('selected');
	$('#thumbnails .project.logo').show();
});
$('#filter li.fp').click(function(){
	$('#filter li').removeClass('selected');
	$('#thumbnails .project').hide();
	$(this).addClass('selected');
	$('#thumbnails .project.painting').show();
});
$('#filter li.fi').click(function(){
	$('#filter li').removeClass('selected');
	$('#thumbnails .project').hide();
	$(this).addClass('selected');
	$('#thumbnails .project.illustration').show();
});
$('#filter li.fw').click(function(){
	$('#filter li').removeClass('selected');
	$('#thumbnails .project').hide();
	$(this).addClass('selected');
	$('#thumbnails .project.web').show();
});
$('#filter li.fa').click(function(){
	$('#filter li').removeClass('selected');
	$(this).addClass('selected');
	$('#thumbnails .project').show();
});
