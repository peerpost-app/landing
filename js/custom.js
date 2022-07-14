if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {


  } else {

  window.onload = function() {
      lax.setup() // init

      const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
      }

          window.requestAnimationFrame(updateLax)
  }

}

//remove loader after ALL images are loaded
window.addEventListener("load", event => {

  var image = document.querySelector('img');
  var load = image.complete;
  $('.obscurer').addClass('close');

  //aminations in hero header

  setTimeout(function(){
    $('.big-logo').addClass('in');
  }, 300);

  setTimeout(function(){
    $('#social-fixed').addClass('in');
    $('.burger').addClass('in');
    $('.top-button').addClass('in');
    $('.bottom-hero').addClass('in');
  }, 700);

});


jQuery(document).ready(function( $ ){


    //activate the parallax on the home header
    $('#top-hero').parallax({imageSrc: 'img/background-lh.jpg' , speed:0.6});


    //anchor link smooth scroll
    $('a[href^="#"]').click(function(event) {
        var id = $(this).attr("href");
        var offset = 0;
        var target = $(id).offset().top - offset;
        $('html, body').animate({scrollTop:target}, 1000);
        event.preventDefault();
    });





    //menu animations
    $('.burger').click(function(){
      $(this).toggleClass('close-icon');
      $('header').toggleClass('expand');
    });

    $('header ul li a').click(function(){
      setTimeout(function(){
        $('.burger').toggleClass('close-icon');
        $('header').toggleClass('expand');
      }, 1000);
    });


    // animations on scroll trigger
    function reveal() {
        var reveals = document.querySelectorAll(".animate");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 10;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("inview");
          } else {
            reveals[i].classList.remove("inview");
          }
        }
      }

      window.addEventListener("scroll", reveal);
      reveal();



        //key benefits slider animations trigger
        window.addEventListener('scroll', function() {
        	var element1 = document.querySelector('.kb1');
          var imm1 = document.querySelector('#s-img-1');
          var position = element1.getBoundingClientRect();
          var positionz = imm1.getBoundingClientRect();

          var element2 = document.querySelector('.kb2');
          var imm2 = document.querySelector('#s-img-2');
          var position2 = element2.getBoundingClientRect();

          var element3 = document.querySelector('.kb3');
          var imm3 = document.querySelector('#s-img-3');
          var position3 = element3.getBoundingClientRect();

        	// first slide
        	if(position.top >= 0 && position.bottom <= window.innerHeight) {

            imm1.classList.add("inview");
        	} else {
            imm1.classList.remove("inview");
          }

          if(positionz.top < window.innerHeight && position.bottom >= 0) {

            imm1.classList.add("inview");
        	} else {
            imm1.classList.remove("inview");
          }

          // second slide
          if(position2.top >= 0 && position2.bottom <= window.innerHeight) {

            imm2.classList.add("inview");
          } else {
            imm2.classList.remove("inview");
          }

          // third slide
          if(position3.top >= 0 && position3.bottom <= window.innerHeight) {

            imm3.classList.add("inview");
          } else {
            imm3.classList.remove("inview");
          }


        });


        // Roadmap carousel

        $(".owl-carousel").owlCarousel({
          loop:false,
          margin:26,
          nav:true,
          dots:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:4
              }
          }
        });


        // prevent X scroll
        $(function() {

          var $body = $(document);
          $body.bind('scroll', function() {
              // "Disable" the horizontal scroll.
              if ($body.scrollLeft() !== 0) {
                  $body.scrollLeft(0);
              }
          });

      });

});
