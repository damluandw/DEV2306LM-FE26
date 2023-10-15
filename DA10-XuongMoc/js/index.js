$(".list-product").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
//   fade: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".list-product .slick-arrow").html("");
$(".list-product .slick-prev").html(
  '<span><i class="fa-solid fa-angle-left"></i></span>'
);
$(".list-product .slick-next").html(
  '<span><i class="fa-solid fa-angle-right"></i></span>'
);
