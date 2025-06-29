const visionsLink = document.querySelector('.visions-link')
const interval = 50000

document.querySelector('.visions-toggler').addEventListener('click', () => {
    visionsLink.classList.toggle('hidden');
    visionsLink.classList.toggle('visible');
})


// ** S L I D E R **
const slides = [
    '/assets/ISP_BERGAMO_470.jpg',
    '/assets/ISP_BERLIN_290.jpg',
    '/assets/ISP_MUSEOS_122_Edit.jpg',
    '/assets/ISP_BERLIN_487.jpg',
    '/assets/ISP_BERLIN_929.jpg',
    '/assets/ISP_BERLIN_331.jpg',
    '/assets/ISP_kaunas_446.jpg',
    '/assets/ISP_STREET_HAPPENS_3596.jpg',
    '/assets/ISP_BERLIN_1577.jpg',
    '/assets/ISP_STREET_HAPPENS_783.jpg ',
    '/assets/ISP_NORVILISKES_112.jpg',
    '/assets/ISP_9253.jpg',
    '/assets/ISP_BLACK_SEA_4206.jpg',
    '/assets/ISP_1731.jpg'
];

let currentSlide = 0;
let autoSlideInterval;

const slidesContainer = document.querySelector('.image-container');

slides.forEach((src, index) =>{
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Ivan Sanczewski photography ${index + 1}`;
    img.classList.add('slide');

    if (index === 0) img.classList.add('active');
    slidesContainer.appendChild(img);

    img.onload = function (){
        if (img.naturalHeight > img.naturalWidth) {
            img.classList.add('vertical');
        }
    }

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
    autoSlideInterval = setInterval(nextSlide, interval);
};

const resetInterval = () => {
    clearInterval(autoSlideInterval);
    startInterval();
};

// Slide control with arrows keys
document.addEventListener('keydown', (e) =>{
    if(e.key === 'ArrowLeft') prevSlide();
    if(e.key === 'ArrowRight') nextSlide();
    resetInterval();
});

// Cursor keys slides controls
document.querySelector('.left').addEventListener('click', () => {
    prevSlide();
    resetInterval();
})

document.querySelector('.right').addEventListener('click', () => {
    nextSlide();
    resetInterval();
})



startInterval();