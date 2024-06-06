//   testimonial slider
$(".testimonial-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: true,

  prevArrow: "<button type='button' class='slick-prev pull-left slick-arrows'> <svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36' fill='none'><circle cx='18' cy='18' r='17.25' stroke='#202122' stroke-width='1.5'/><path d='M16.5263 12L11 18M11 18L16.5263 24M11 18H26' stroke='#202122' stroke-width='1.5' stroke-linecap='round'/></svg></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right slick-arrows'><svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36' fill='none'><circle cx='18' cy='18' r='17.25' transform='rotate(180 18 18)' stroke='#202122' stroke-width='1.5'/><path d='M19.4737 24L25 18M25 18L19.4737 12M25 18L10 18' stroke='#202122' stroke-width='1.5' stroke-linecap='round'/></svg></button>",
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// testimonial size adjustment

$(".the-voolt-experience-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,

  prevArrow: "<button type='button' class='slick-prev pull-left slick-arrows'> <svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36' fill='none'><circle cx='18' cy='18' r='17.25' stroke='#202122' stroke-width='1.5'/><path d='M16.5263 12L11 18M11 18L16.5263 24M11 18H26' stroke='#202122' stroke-width='1.5' stroke-linecap='round'/></svg></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right slick-arrows'><svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36' fill='none'><circle cx='18' cy='18' r='17.25' transform='rotate(180 18 18)' stroke='#202122' stroke-width='1.5'/><path d='M19.4737 24L25 18M25 18L19.4737 12M25 18L10 18' stroke='#202122' stroke-width='1.5' stroke-linecap='round'/></svg></button>",
});

$(".service-tag-slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 1500,
  pauseOnHover: false,
  pauseOnFocus: false,
  // slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
});
function initSlickSlider() {
  $(".bullet-list--yellow").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    settings: "unslick",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
          variableWidth: true,
        },
      },
    ],
  });
}

$(document).ready(function () {
  if ($(window).width() <= 1200) {
    initSlickSlider();
  }
  //use if window will be resized and slider will automaticly update
  // $(window).resize(function () {
  //   if ($(window).width() <= 1200) {
  //     initSlickSlider();
  //   } else {
  //     // If the width is greater than 1200, unslick the slider
  //     $(".bullet-list--yellow").slick("unslick");
  //   }
  // });
});

$(document).ready(function () {
  // Function to set the height of testimonials
  function setTestimonialHeight() {
    var maxHeight = 0;
    $(".testimonial-box").each(function () {
      maxHeight = Math.max(maxHeight, $(this).height());
    });
    $(".testimonial-box").height(maxHeight);
  }

  // Initial setup
  setTestimonialHeight();

  // Resize event handler
  $(window).resize(function () {
    setTestimonialHeight();
  });
});

// faq
(function ($) {
  let section = $("section.faq-section");
  if (section.length) {
    $(".qa-item").click(function (e) {
      e.preventDefault();
      if ($(this).hasClass("opened")) {
        $(this).removeClass("opened");
        $(this).find(".answer").slideUp(150);
      } else {
        $(".qa-item").removeClass("opened");
        $(".qa-item .answer").slideUp(150);
        $(this).addClass("opened");
        $(this).find(".answer").slideDown(150);
      }
    });
  }
})(jQuery);

// active tabs
$(".comper-tags a").click(function (e) {
  e.preventDefault();
  $(".activetab").removeClass("activetab");
  $(this).addClass("activetab");
  $(".table-active").removeClass("table-active");
  if ($(this).index() === 0) {
    $(".how-we-compare .table").eq(0).addClass("table-active");
  } else if ($(this).index() === 1) {
    $(".how-we-compare .table").eq(1).addClass("table-active");
  }
});

$(".table .pager .arrow-next").click(function (e) {
  e.preventDefault();
  if (!$(".table .pager .active-dot").is(":last-child")) {
    $(".table th.active-in-slider").addClass("old-active-in");
    $(".table th.old-active-in").next().addClass("active-in-slider");
    $(".table th.old-active-in").removeClass("active-in-slider");
    $(".table th.old-active-in").removeClass("old-active-in");

    $(".table td.active-in-slider").addClass("old-active-in");
    $(".table td.old-active-in").next().addClass("active-in-slider");
    $(".table td.old-active-in").removeClass("active-in-slider");
    $(".table td.old-active-in").removeClass("old-active-in");

    $(".table .pager .active-dot").addClass("old-dot-active");
    $(".table .pager .active-dot").next().addClass("active-dot");
    $(".table .pager .old-dot-active").removeClass("active-dot");
    $(".table .pager .old-dot-active").removeClass("old-dot-active");
  }
});
$(".table .pager .arrow-prev").click(function (e) {
  e.preventDefault();
  if (!$(".table .pager .active-dot").is(":first-child")) {
    $(".table th.active-in-slider").addClass("old-active-in");
    $(".table th.old-active-in").prev().addClass("active-in-slider");
    $(".table th.old-active-in").removeClass("active-in-slider");
    $(".table th.old-active-in").removeClass("old-active-in");

    $(".table td.active-in-slider").addClass("old-active-in");
    $(".table td.old-active-in").prev().addClass("active-in-slider");
    $(".table td.old-active-in").removeClass("active-in-slider");
    $(".table td.old-active-in").removeClass("old-active-in");

    $(".table .pager .active-dot").addClass("old-dot-active");
    $(".table .pager .active-dot").prev().addClass("active-dot");
    $(".table .pager .old-dot-active").removeClass("active-dot");
    $(".table .pager .old-dot-active").removeClass("old-dot-active");
  }
});

//Add UTMS to all links
$("img, button, a").click(function (e) {
  if (!$(this).hasClass("slick-arrow") && !$(this).hasClass("arrow") && !$(this).hasClass("compare-tabs")) {
    e.preventDefault();
    var e = new URL(window.location.href).search;
    window.location.href = "https://app.voolt.com/flow/01/1/" + e;
  }
});
//Add UTMS to all links
