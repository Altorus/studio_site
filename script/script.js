$(document).ready(function(){
    $('.slick').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false,
    });
});

$(document).ready(function(){
    $('.slick-products').slick({
        dots: true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        dotsClass: 'products-dots',
    });
});

$(document).ready(function(){
    $('.slick-stock').slick({
        prevArrow: '<button type = "button" class = "prev-stock"></ button> ',
        nextArrow: '<button type = "button" class = "next-stock"></ button> ',

        dots: true,
        dotsClass: 'products-dots',
        fade:true,
    });
});

$(document).ready(function(){
    $('.slick-about').slick({
        
    });
});