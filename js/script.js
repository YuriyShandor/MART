$(document).ready(function(){
  $('.navbar-btn').on('click', function() {
    $('.navbar-inner').toggleClass('in');
  });

  $('.slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   nextArrow: $("#right_arrow"),
    prevArrow: $("#left_arrow"),
   focusOnSelect: true,
   centerMode: true,
   centerPadding: true,
   initialSlide: 3,
   dots: true,
   dotsClass: "my_slick-dots",
  });

  $('.center').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 4,
    speed: 500,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
