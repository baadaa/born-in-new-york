$(document).ready(function() {
  $('.year').text(new Date().getFullYear());

    // Click Top Menu
  $(".toggle_menu").click(function() {
  	if ($(".top_menu").is(":visible")) {
  		$(".top_menu").fadeOut(200);
      $(".sandwich").css('opacity', '0.6');
  	} else {
  		$(".top_menu").fadeIn(200);
      $(".sandwich").css('opacity', '1');
  	}
  });


  $(".top_menu ul a").click(function() {
  	$(".top_menu").fadeOut(200);
  });
  // Top Menu End

  $(".toggle_menu").click(function() {
    $(".sandwich").toggleClass("active");
  });

});
