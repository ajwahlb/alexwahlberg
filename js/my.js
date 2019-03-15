

// if ($(window).width() < 768) {
// 	$('.new-break').replaceWith('<br>');
// }
$('.btn-nav, .nav-close').click(function(){
	console.log("nav clicked");
	$('.slideout-menu').toggleClass("navtoggle");
	$('.slideout-menu').delay( 300 ).toggleClass("slideout-open");
});

// filter
$('#filter li').click(function() {
	if ($(this).hasClass('all')){
		$('#filter li').removeClass('selected');
		$(this).addClass('selected');
		$('#thumbnails .project').addClass('slide-in-fwd-center');
	} else {
		var filterWork = $(this).data('filter');
		$('#filter li').removeClass('selected');
		$('#thumbnails .project').hide();
		$(this).addClass('selected');
		$('#thumbnails .project[data-filter=' + filterWork + ']').addClass('slide-in-fwd-center');
	}
});
