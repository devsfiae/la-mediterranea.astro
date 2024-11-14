// puplic/js/slideshow.js
let slideIndex = 1;

function initializeSlides() {
    showSlide(slideIndex);
    autoAdvanceSlides();
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function autoAdvanceSlides() {
    setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 5000);
}

// Manual navigation
window.changeSlide = function(n) {
    slideIndex += n;
    showSlide(slideIndex);
};

// Direct navigation
window.currentSlide = function(n) {
    slideIndex = n;
    showSlide(slideIndex);
};

window.onload = initializeSlides;