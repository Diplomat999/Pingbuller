$(document).ready(function () {
  $('.slider').bxSlider({
    auto: true,
    stopAutoOnClick: true,
  });
});

$(document).ready(function () {
  $('.started-slider').bxSlider({
    controls: false,
    auto: true,
  }
  );
});

$(document).ready(function () {
  $('.partners-slider').bxSlider({
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 3,
    slideWidth: 170,
    shrinkItems: true,
}
  );
});