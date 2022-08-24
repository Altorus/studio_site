$(document).ready(function(){
    $('.slick').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

$(document).ready(function(){
    $('.slick-products').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        dotsClass: 'products-dots',
    });
});