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
    console.log(slideIndex);




    //   setTimeout(showSlides, 5000); // Change image every 2 seconds
}

var element = document.getElementById('phone');
var maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
}
var mask = new IMask(element, maskOptions);

var element2 = document.getElementById('email');
var maskOptions2 = {
    mask: function(value) {
        if (/^[a-z0-9_\.-]+$/.test(value))
            return true;
        if (/^[a-z0-9_\.-]+@$/.test(value))
            return true;
        if (/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value))
            return true;
        if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value))
            return true;
        if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value))
            return true;
        if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value))
            return true;
        if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
            return true;
        return false;
    },
    lazy: false
}
var mask2 = new IMask(element2, maskOptions2);