$(document).ready(function () {
  $('.slider').bxSlider({
    slideMargin: 40,
  });

  $('.started-slider').bxSlider({
    controls: false,
    auto: true,
  });

  $('.partners-slider').bxSlider({
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 3,
    slideWidth: 170,
    shrinkItems: true,
  });
});