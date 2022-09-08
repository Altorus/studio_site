$(document).ready(function () {
  $(".slick").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });
});

// загрузка фото
$(".label-form input[type=file]").on("change", function () {
  let file = this.files[0];
  $(this).closest(".input-file").find(".input-file-text").html(file.name);
});

$(function () {
  let header = $("header");
  let hederHeight = header.height(); // вычисляем высоту шапки

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("header_fixed");
      $("body").css({
        paddingTop: hederHeight + "px", // делаем отступ у body, равный высоте шапки
      });
    } else {
      header.removeClass("header_fixed");
      $("body").css({
        paddingTop: 0, // удаляю отступ у body, равный высоте шапки
      });
    }
  });
});

$(document).ready(function () {
  if (screen.width > 810) {
    $(".slick-products").slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 3,
      dotsClass: "products-dots",
    });
  }

  if (screen.width <= 810 && screen.width >= 479) {
    $(".slick-products").slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 2,
      slidesToScroll: 2,
      dotsClass: "products-dots",
    });
  }

  if (screen.width <= 480 && screen.width < 810) {
    $(".slick-products").slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: "products-dots",
    });
  }

  if (screen.width <= 480 && screen.width < 810) {
    $(".slick-stock").slick({
      autoplay: true,
      arrows: false,
      autoplaySpeed: 3000,
      dots: true,
      dotsClass: "products-dots",
      fade: true,
    });
  } else {
    $(".slick-stock").slick({
      prevArrow: '<button type = "button" class = "prev-stock"></ button> ',
      nextArrow: '<button type = "button" class = "next-stock"></ button> ',
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      dotsClass: "products-dots",
      fade: true,
    });
  }
});

$(document).ready(function () {
  $(".slick-review").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "reviews-dots",
  });
});

$(document).ready(function () {
  $(".slick-product").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "products-dots",
  });
});

$(".slick-img-review").slick({
  dots: true,
  arrows: false,
  // autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  dotsClass: "products-dots",
  responsive: [
    {
      breakpoint: 811,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(document).ready(function () {
  $(".slick-more-products").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type = "button" class = "prev-stock"></ button> ',
    nextArrow: '<button type = "button" class = "next-stock"></ button> ',
    dotsClass: "products-dots",
  });

  // pop up

  $(".close").click(() => {
    $(".b-popup").toggleClass("b-popup-hiden");
  });
  setTimeout(() => popupBlock(), 2000);
  setInterval(() => popupBlock(), 300000);

  function popupBlock() {
    $(".b-popup").removeClass("b-popup-hiden");
  }

  $(".popup-open").click(function () {
    $(".popup-fade").fadeIn();
    return false;
  });

  $(".popup-close").click(function () {
    $(this).parents(".popup-fade").fadeOut();
    return false;
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $(".popup-fade").fadeOut();
    }
  });

  $(".popup-fade").click(function (e) {
    if ($(e.target).closest(".popup").length == 0) {
      $(this).fadeOut();
    }
  });

  // pop up отзывы

  $(".close").click(() => {
    $(".b-popup").toggleClass("b-popup-hiden");
  });
  setTimeout(() => popupBlock(), 2000);
  setInterval(() => popupBlock(), 300000);

  function popupBlock() {
    $(".b-popup").removeClass("b-popup-hiden");
  }

  $(".popup-open-review").click(function () {
    $(".popup-fade-review").fadeIn();
    return false;
  });

  $(".popup-close").click(function () {
    $(this).parents(".popup-fade-review").fadeOut();
    return false;
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $(".popup-fade-review").fadeOut();
    }
  });

  $(".popup-fade-review").click(function (e) {
    if ($(e.target).closest(".popup").length == 0) {
      $(this).fadeOut();
    }
  });

  //
  // pop up заказа

  $(".close").click(() => {
    $(".b-popup").toggleClass("b-popup-hiden");
  });
  setTimeout(() => popupBlock(), 2000);
  setInterval(() => popupBlock(), 300000);

  function popupBlock() {
    $(".b-popup").removeClass("b-popup-hiden");
  }

  $(".popup-open-order").click(function () {
    $(".popup-fade-order").fadeIn();
    return false;
  });

  $(".popup-close").click(function () {
    $(this).parents(".popup-fade-order").fadeOut();
    return false;
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $(".popup-fade-order").fadeOut();
    }
  });

  $(".popup-fade-order").click(function (e) {
    if ($(e.target).closest(".popup").length == 0) {
      $(this).fadeOut();
    }
  });

  //

  $("#bntUpload").click(function () {
    $("#photo").click();
  });

  $(".header-burger").click(() => {
    $(".header-burger, .burger-menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $("a.scroll-to").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr("href");
    $(".header-burger, .burger-menu").toggleClass("active");
    // $('body').toggleClass('lock')
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor).offset().top - 60,
        },
        800
      );
  });

  // рейтинг
  // Получение значения рейтинга по клику
  $("input[name=rating]").click(function () {
    let value = $('input[name="rating"]:checked').val();
    let labels = $(".rating-label");

    for (let i = 0; i < value; i++) {
      labels.eq(i).addClass("select");
    }
  });

  $('input[name="color"]').click(() => {
    var value = $('input[name="color"]:checked').val();
  });

  $("#menu").click(function () {
    // Тут класс твоей кнопки
    $(".sub-menu").slideToggle(300); // Тут класс твоего меню, предварительно оно "display:none"
  });

  // Увеличение

  $(function () {
    $(".minimized").click(function (event) {
      var i_path = $(this).children().attr("src");
      $("body").append(
        '<div id="overlay"></div><div id="magnify"><img src="' +
          i_path +
          '"><div id="close-popup"><i></i></div></div>'
      );
      function leftTop() {
        $("#magnify").css({
          top: ($(window).height() - $("#magnify").outerHeight()) / 2,
        });
      }
      $(window).resize(function () {
        leftTop();
      });
      leftTop();
      $("#overlay, #magnify").fadeIn("fast");
    });

    $("body").on("click", "#close-popup, #overlay", function (event) {
      event.preventDefault();
      $("#overlay, #magnify").fadeOut("fast", function () {
        $("#close-popup, #magnify, #overlay").remove();
      });
    });
  });
});

let page = window.location.pathname;
console.log(window.location.pathname);

switch (page) {
  case "/catalog/product/":
    $(".page")[4].classList.add("active-page");
    $(".page")[8].classList.add("active-page");
    $(".page")[0].classList.add("active-page");
    break;
  case "/catalog/":
    $(".page")[4].classList.add("active-page");
    $(".page")[8].classList.add("active-page");
    $(".page")[0].classList.add("active-page");
    break;
  case "/contact.html":
    $(".page")[6].classList.add("active-page");
    $(".page")[2].classList.add("active-page");
    $(".page")[10].classList.add("active-page");
    break;
  case "/review.html":
    $(".page")[7].classList.add("active-page");
    $(".page")[11].classList.add("active-page");
    $(".page")[3].classList.add("active-page");
    break;
  default:
    break;
}

let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

// let body=document.querySelector('body');

// if(isMobile.any()){
// 		body.classList.add('touch');
// 		let arrow=document.querySelectorAll('.arrow');
//         let menu = document.querySelectorAll('#menu');

// }else{
// 	body.classList.add('mouse');
// }
