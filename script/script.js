$(document).ready(function() {
    $('.slick').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    });
});

$(document).ready(function() {

    if(screen.width > 810){
        $('.slick-products').slick({
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 3,
            slidesToScroll: 3,
            dotsClass: 'products-dots',
        });
    }

    if(screen.width <= 810 && screen.width >= 479){
        $('.slick-products').slick({
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 2,
            slidesToScroll: 2,
            dotsClass: 'products-dots',
        });
    }

    if(screen.width <= 480 && screen.width < 810){
        $('.slick-products').slick({
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dotsClass: 'products-dots',
        });
    }

    if(screen.width <= 480 && screen.width < 810){
        $('.slick-stock').slick({
            autoplay: true,
            arrows: false,
            autoplaySpeed: 3000,
            dots: true,
            dotsClass: 'products-dots',
            fade: true,
        });
    }else{
        $('.slick-stock').slick({
            prevArrow: '<button type = "button" class = "prev-stock"></ button> ',
            nextArrow: '<button type = "button" class = "next-stock"></ button> ',
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            dotsClass: 'products-dots',
            fade: true,
        });
    }
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
    setTimeout(()=>popupBlock(), 2000)
    setInterval(()=>popupBlock(), 300000)

    function popupBlock() {
        $('.b-popup').removeClass('b-popup-hiden')
       
    }

    $('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});

    $('#bntUpload').click(function(){
        $("#photo").click();
    });

    $('.header-burger').click(()=>{
        $('.header-burger, .burger-menu').toggleClass("active")
        $('body').toggleClass('lock')
    })

    $("a.scroll-to").on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('.header-burger, .burger-menu').toggleClass("active")
        $('body').toggleClass('lock')
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
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




    //   setTimeout(showSlides, 5000); // Change image every 2 seconds
}

