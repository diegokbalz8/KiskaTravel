let currentIndex = 0;
const slides = document.querySelectorAll('.slideshow-image');

function showSlides() {
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.opacity = '0';
  });

  // Increment slide index
  currentIndex++;
  if (currentIndex > slides.length) {
    currentIndex = 1;
  }

  // Show the current slide
  slides[currentIndex - 1].style.opacity = '1';

  // Change slide every 5 seconds
  setTimeout(showSlides, 5000);
}

// Start slideshow
showSlides();
