const visionsLink = document.querySelector('.visions-link')

document.querySelector('.visions-toggler').addEventListener('click', () => {
    visionsLink.classList.toggle('hidden');
    visionsLink.classList.toggle('visible');
})


// ** S L I D E R **
const slides = [
    '/assets/ISP_BERLIN_290.jpg',
    '/assets/ISP_BERLIN_487.jpg',
    '/assets/ISP_BERLIN_929.jpg',
    '/assets/ISP_BERLIN_331.jpg',
    '/assets/ISP_BERLIN_1577.jpg'
];

let currentSlide = 0;
let autoSlideInterval;

const slidesContainer = document.querySelector('.image');

slides.forEach((src, index) =>{
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Street photography ${index + 1}`;
    img.classList.add('slide');

    if (index === 0) img.classList.add('active');
    slidesContainer.appendChild(img);
});

const displaySlide = (index) => {
    const slides = document.querySelectorAll('.slide');

    // Hides actual active slide
    slides[currentSlide].classList.remove('active');

    // Finds out next index using module to control an infinite loop
    currentSlide = (index + slides.length) % slides.length;

    // Displays new slider
    slides[currentSlide].classList.add('active');
};

const nextSlide = () => displaySlide(currentSlide + 1);
const prevSlide = () => displaySlide(currentSlide - 1);


// Automatic slides
const startInterval = () => {
    autoSlideInterval = setInterval(nextSlide, 2500);
};

const resetInterval = () => {
    clearInterval(autoSlideInterval);
    startInterval();
};

startInterval();