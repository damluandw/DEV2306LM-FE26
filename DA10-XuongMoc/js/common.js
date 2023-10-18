$(document).ready(function () {
    $("header li").hover(function () {
      $("header li").each(function () {
        $(this).removeClass("active");
      });
      $(this).addClass("active");
    });
  });
  
  $(window).scroll(function () {
    let header = $("header").height();
    if ($(window).scrollTop() > 20) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });