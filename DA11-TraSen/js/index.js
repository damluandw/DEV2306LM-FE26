$(document).ready(function () {
  $(".list-product").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    adaptiveHeight: true,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".list-product .slick-arrow").html("");
});
$(document).ready(function () {
  $(".list-product").on("setPosition", function (event, slick, direction) {
    $(".list-product .slick-arrow").text("");
  });
  $(".slider").slick();
});

// $(document).lis(function () {
//   $(".list-product .slick-arrow").html("");

// });
