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





let slideIndex = 0;
showSlides();

function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");


  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('main');
    slides[i].classList.add('hidden');
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}

  slides[slideIndex-1].classList.remove('hidden')

  if(slideIndex==slides.length){
    slides[0].classList.remove('hidden')
    slides[0].classList.add('next')
  }else{
    slides[slideIndex].classList.remove('hidden')
    slides[slideIndex].classList.add('next')
  }

  slides[slideIndex-1].classList.remove('next')
  slides[slideIndex-1].classList.add('main')

//   setTimeout(showSlides, 5000); // Change image every 2 seconds
} 