$(document).ready(function(){

	/*$(window).scroll(function() {
		$('#pic_holder').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("fadeIn");
			}
		});
	}); //WINDOW SCROLL ANIMATION */

	$('a[href^="#"]').on('click', function(event) {
	    var target = $(this.href);
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

})