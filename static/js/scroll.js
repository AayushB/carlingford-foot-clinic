
/* 
Smooth scroll to Id
*/
$('a[href^="#"]').on('click', function(event) {

	var target = $( $(this).attr('href') );

	if( target.length ) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top-80
		}, 1000);
	}

});


/*
  Falling logo vs Non Falling logo when scrolled more than 300 px
*/

var $logo = $('#clogo');
$(document).scroll(function() {
  if($(this).scrollTop() > 300)
  {
    $logo.removeClass('logo');
    $logo.addClass('logo-regular');
    $('#foot-img').removeClass('foot-img');
    $('#foot-img').addClass('foot-img-regular');
    $('#hours').slideUp();
  }
  else
  {
    $logo.removeClass('logo-regular');
    $logo.addClass('logo');
    $('#foot-img').removeClass('foot-img-regular');
    $('#foot-img').addClass('foot-img');
    $('#hours').slideDown();

  }
});
$('.nav a').on('click', function(){
    $('.btn-navbar').click(); //bootstrap 2.x
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
  })