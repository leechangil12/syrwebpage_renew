$(document).ready(function() {
  var $menu = $('nav li'),  $contents = $('.scroll'),
	$nav = $('nav'), $header = $('header');
  $(window).bind('scroll', function() {
    var navHeight = $('#screen0').height() - $nav.height() - $header.height();
    if ($(window).scrollTop() > navHeight) {
      $nav.addClass('fixed');
    } else {
      $nav.removeClass('fixed');
    }
    var scltop = $(window).scrollTop();
    $.each($contents, function(idx, item) {

      var $target = $contents.eq(idx),
      targetTop = $target.offset().top - $nav.height() - $header.height();
      if (targetTop < scltop) {
        $menu.removeClass('on');
        $menu.eq(idx).addClass('on');
      }
      if(scltop==0){
        $menu.removeClass('on');
      }
    })
  });
  $('nav li').click(function(e) {
    var scrollPosition = $("#" + $(this).data("gotosection")).offset().top - $nav.height() - $header.height();
    $('html,body').animate({
      scrollTop: scrollPosition
    }, 1500);
    //$('nav li').removeClass('on');
    //$(this).addClass('on');
  });
  $('nav li a').click(function(e) {
    e.preventDefault();
  });
});
