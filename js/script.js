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

  $('.bnt-f-p__all').click(function(){
    $('.product__all').removeClass('product_hide');
  });

  var products = ['dresses', 'accessories', 'miscellaneous'];

  products.forEach(function(item) {
    $(`.btn-f-p__${item}`).click(function(){
      $('.product__all').addClass('product_hide');
      $(`.product__${item}`).removeClass('product_hide');
    });
  });

  $('.costumer-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.costumer-slider__nav'
  });
  
  $('.costumer-slider__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.costumer-slider',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
});

function productAmount(arr, inner) {
  inner.innerHTML = arr.length;
};

var productsCount = ['all', 'dresses', 'accessories', 'miscellaneous'];

productsCount.forEach(function(item){
  var productsForCount = document.getElementsByClassName(`product__${item}`);
  var productsCountForInner = document.getElementById(`f-p__${item}`);
  productAmount(productsForCount, productsCountForInner);
});
