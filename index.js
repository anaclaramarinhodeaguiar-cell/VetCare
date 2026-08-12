const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;
let autoPlay = null;

function showSlide(index) {
  if (!slides.length) return;

  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function startAutoPlay() {
  autoPlay = setInterval(nextSlide, 5000);
}

if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => {
    nextSlide();
    clearInterval(autoPlay);
    startAutoPlay();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    clearInterval(autoPlay);
    startAutoPlay();
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    clearInterval(autoPlay);
    startAutoPlay();
  });
});

showSlide(0);
startAutoPlay();
