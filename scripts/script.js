// JavaScript Document
console.log("hi");





let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    document.querySelector('.carousel-container').style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.querySelectorAll('.carousel-slide')[currentSlide].classList.add('active');
