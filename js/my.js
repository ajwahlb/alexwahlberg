

// if ($(window).width() < 768) {
// 	$('.new-break').replaceWith('<br>');
// }
$('.btn-nav, .nav-close').click(function(){
	console.log("nav clicked");
	$('.slideout-menu').toggleClass("navtoggle");
	$('.slideout-menu').delay( 300 ).toggleClass("slideout-open");
});
