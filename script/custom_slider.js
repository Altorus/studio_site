let slideIndex = 0;
showSlides();

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

$('.mySlides').click(()=>{
    showSlides(slideIndex=3)
})

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    console.log(slideIndex);
    if (n > slides.length) { slideIndex = 1 }

    console.log(n);
    if (n < 1) { slideIndex = slides.length
         console.log(1);
        }

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
}
     