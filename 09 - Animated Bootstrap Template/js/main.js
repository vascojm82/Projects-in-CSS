$(document).ready(function(){
  $('.main-image').addClass('animate-in');

  $(window).resize(function(){
    var y = $(this).width();
    console.log("width: " + y);
  });

  $(window).scroll(function(){
    var y = $(this).scrollTop();

    if(y >= 500){
      console.log(y);
      $('.laptop').addClass('animate-in');
      $('.mobile-devices').addClass('animate-in');
      $('.laptop').removeClass('animate-out');
      $('.mobile-devices').removeClass('animate-out');
    }else if(y < 1500){
      console.log(y);
      $('.laptop').addClass('animate-out');
      $('.mobile-devices').addClass('animate-out');
      $('.laptop').removeClass('animate-in');
      $('.mobile-devices').removeClass('animate-in');
    }
  });

  $( ".dropdown" ).mouseleave(function() {
    $( ".dropdown" ).removeClass( "open" );
  });

  $( ".show-tooltip" ).tooltip({
      show: {
        effect: "slideDown",
        delay: 250
      },
      track:true
    });

    $( ".hide-tooltip" ).tooltip({
      hide: {
        effect: "explode",
        delay: 0
      },
      track:true
    });
});