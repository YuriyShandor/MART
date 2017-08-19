$(document).ready(function() {
  $('.search-icon').on('click', function() {
    $('.top-menu__input-search').addClass('top-menu__input-search_click');
    $('.search-icon').addClass('search-icon_click');
    $('.close-search-icon').addClass('close-search-icon_click');
  });

  $('.close-search-icon').on('click', function() {
    $('.top-menu__input-search').removeClass('top-menu__input-search_click');
    $('.search-icon').removeClass('search-icon_click');
    $('.close-search-icon').removeClass('close-search-icon_click');
  });

  $('.banner-slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   nextArrow: $(".slider-nav_right"),
   prevArrow: $(".slider-nav_left"),
   autoplay: true,
   autoplaySpeed: 5000,
  });
});
