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

	let modal = $('.modal');
	let closeBtn = $('button.close-btn');

	closeBtn.click(function(){
		modal.modal('toggle');
	});

  //Leflet.JS with OpenStreetMap
  var map = L.map('map').setView([25.77427, -80.19366], 10);
  L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
  }).addTo( map );
  L.marker([25.77427, -80.19366]).addTo(map)
		.bindPopup("We're Here.").openPopup();
});
