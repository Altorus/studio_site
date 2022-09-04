let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

$('.mySlides').click(()=>{
    showSlides(slideIndex+=1)
})

$('.prewSlides').click(()=>{
    showSlides(slideIndex-=1)
})

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('main');
        slides[i].classList.add('hidden');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

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
     