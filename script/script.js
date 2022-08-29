$(document).ready(function() {
    $('.slick').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    });
});

$(document).ready(function() {
    $('.slick-products').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        dotsClass: 'products-dots',
    });
});

$(document).ready(function() {
    $('.slick-stock').slick({
        prevArrow: '<button type = "button" class = "prev-stock"></ button> ',
        nextArrow: '<button type = "button" class = "next-stock"></ button> ',
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        dotsClass: 'products-dots',
        fade: true,
    });
});

$(document).ready(function() {
    $('.slick-review').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: 'reviews-dots',
    });
});

$(document).ready(function() {
    $('.slick-product').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: 'products-dots',
    });
});

$(document).ready(function() {
    $('.slick-more-products').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type = "button" class = "prev-stock"></ button> ',
        nextArrow: '<button type = "button" class = "next-stock"></ button> ',
        dotsClass: 'products-dots',
    });

    // pop up

    $('.close').click(()=>{
        $('.b-popup').toggleClass('b-popup-hiden')
    })
    setInterval(()=>popupBlock(), 120000)

    function popupBlock() {
        $('.b-popup').removeClass('b-popup-hiden')
       
    }

});





let slideIndex = 0;
showSlides();

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");


    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('main');
        slides[i].classList.add('hidden');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].classList.remove('hidden')

    if (slideIndex == slides.length) {
        slides[0].classList.remove('hidden')
        slides[0].classList.add('next')
    } else {
        slides[slideIndex].classList.remove('hidden')
        slides[slideIndex].classList.add('next')
    }

    slides[slideIndex - 1].classList.remove('next')
    slides[slideIndex - 1].classList.add('main')
    dots[slideIndex - 1].className += " active";




    //   setTimeout(showSlides, 5000); // Change image every 2 seconds
}

$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});

