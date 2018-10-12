$(function(){
  var $win = $(window),
      $header = $('header'),
      animationClass = 'is-animation';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 100 ) {
      $header.addClass(animationClass);
    } else {
      $header.removeClass(animationClass);
    }
  });

  $('header a,footer a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html , body').animate({
      'scrollTop':position
    },500);
    return false;
  });
});
