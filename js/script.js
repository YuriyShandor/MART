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

  $('.btn-f-p__dresses').click(function(){
    $('.product__all').addClass('product_hide');
    $('.product__dresses').removeClass('product_hide');
  });

  $('.btn-f-p__accessories').click(function(){
    $('.product__all').addClass('product_hide');
    $('.product__accessories').removeClass('product_hide');
  });

  $('.btn-f-p__miscellaneous').click(function(){
    $('.product__all').addClass('product_hide');
    $('.product__miscellaneous').removeClass('product_hide');
  });
});

function productAmount(arr, inner) {
  var count = 0;

  for(var i=0; i <arr.length; i++) {
    count++;
  }

  inner.innerHTML = count;
};


var productAll = document.getElementsByClassName('product__all');

var productAllInner = document.getElementById('f-p__all');

productAmount(productAll, productAllInner);


var productDress = document.getElementsByClassName('product__dresses');

var productDressInner = document.getElementById('f-p__dresses');

productAmount(productDress, productDressInner);


var productAccessories = document.getElementsByClassName('product__accessories');

var productAccessoriesInner = document.getElementById('f-p__accessories');

productAmount(productAccessories, productAccessoriesInner);


// var productMiscellaneous = document.getElementsByClassName('product__miscellaneous');
//
// var productMiscellaneousCount = 0;
//
// for (var i=0; i < productMiscellaneous.length; i++) {
//     productMiscellaneousCount++;
// };
//
// document.getElementById('f-p__miscellaneous').innerHTML = productMiscellaneousCount;


var productMiscellaneous = document.getElementsByClassName('product__miscellaneous');

var productMiscellaneousInner = document.getElementById('f-p__miscellaneous');

productAmount(productMiscellaneous, productMiscellaneousInner);
