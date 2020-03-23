$(document).ready(function() {
	$('#link_1').click(function() {
		$('#link_1').toggleClass('active');
		$('#link_2').toggleClass('active',false);
		$('#link_3').toggleClass('active',false);
		$('#link_4').toggleClass('active',false);
		$('#link_5').toggleClass('active',false);
	})

	$('#link_2').click(function() {
		$('#link_2').toggleClass('active');
		$('#link_1').toggleClass('active',false);
		$('#link_3').toggleClass('active',false);
		$('#link_4').toggleClass('active',false);
		$('#link_5').toggleClass('active',false);
	})

	$('#link_3').click(function() {
		$('#link_3').toggleClass('active');
		$('#link_2').toggleClass('active',false);
		$('#link_1').toggleClass('active',false);
		$('#link_4').toggleClass('active',false);
		$('#link_5').toggleClass('active',false);
	})

	$('#link_4').click(function() {
		$('#link_4').toggleClass('active');
		$('#link_2').toggleClass('active',false);
		$('#link_3').toggleClass('active',false);
		$('#link_1').toggleClass('active',false);
		$('#link_5').toggleClass('active',false);
	})

	$('#link_5').click(function() {
		$('#link_5').toggleClass('active');
		$('#link_2').toggleClass('active',false);
		$('#link_3').toggleClass('active',false);
		$('#link_4').toggleClass('active',false);
		$('#link_1').toggleClass('active',false);
	})

	$(function(){
  $('.s2__list a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    
    $('html, body').animate({scrollTop: dn}, 500);
  });
});
})