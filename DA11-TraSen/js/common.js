// $('.multiple-items').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });

$(document).ready(function () {
  $(".imgs-banner-header").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: false,
  });

});

// Cách 2 lấy ảnh
// $(document).ready(function () {
//   $(".imgs-banner-header ul li button").html("");

// });
