// $('.multiple-items').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });

$(document).ready(function () {
  $(".img-banner").slick({
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

$(".btn-menu").click(function () {
  $(this).each(function () {
    let ktClass = $(this).hasClass("bg-red");
    if (!ktClass) {
      $(this).addClass("bg-red");
      $(".list-nav-header-mobile").addClass("active-mobile");
    } else {
      $(this).removeClass("bg-red");
      $(".list-nav-header-mobile").removeClass("active-mobile");
    }
  });
});

$(".list-nav-header-mobile li").click(function () {
  $(this).each(function () {
    let ktClass = $(this).hasClass("bg-red");
    // let ktClass2 = $(this).children(".menu-lv2-mobile").hasClass(".menu-lv2-mobile");
    
    
    $(this).siblings("li").removeClass("bg-red");
    $(this).siblings("li").children(".menu-lv2-mobile").removeClass("active-mobile");
    if (!ktClass ) {
      $(this).addClass("bg-red");
      $(this).children(".menu-lv2-mobile").addClass("active-mobile");
    } else {
      $(this).removeClass("bg-red");
      $(this).children(".menu-lv2-mobile").removeClass("active-mobile");
    }
  });
});






