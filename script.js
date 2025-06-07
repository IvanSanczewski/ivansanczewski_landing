const image = document.querySelector('.slides-container');
const title = document.querySelector('.title');

const contact = document.querySelector('.contact');
const about = document.querySelector('.about');
const form = document.querySelector('.form')
const workshops = document.querySelector('.workshops')

const menuItemList = document.querySelectorAll('.menu-item');

menuItemList.forEach( item => {
    item.addEventListener('click', () => {
            const menuItem = item.textContent;
            console.log(menuItem); 


            switch (menuItem) {
                case ('contact'):
                    if (!image.classList.contains('dimmed')) {
                        image.classList.add('dimmed');
                        console.log('ON CONTACT');
                        toggleTitle();
                        toggleContact();
                        break;
                    }
                    
                    if ((image.classList.contains('dimmed')) && (
                        (about.classList.contains('hidden')) &&
                        (form.classList.contains('hidden')) &&
                        (workshops.classList.contains('hidden')))) {
                        console.log('OFF CONTACT');
                        image.classList.remove('dimmed');
                        toggleTitle();  
                        toggleContact();
                        break;
                    }
                    
                    if ((image.classList.contains('dimmed')) && (
                        (!about.classList.contains('hidden')) ||
                        (!form.classList.contains('hidden')) ||
                        (!workshops.classList.contains('hidden')))) {
                        console.log('OTHER(S) REMAINS');
                        toggleContact();
                        }
                    break;
                        
                case ('about kokedama'):
                    if (!image.classList.contains('dimmed')) {
                        image.classList.add('dimmed');
                        toggleTitle();  
                        toggleAbout();
                        break;
                    }

                    if ((image.classList.contains('dimmed')) && (
                        (contact.classList.contains('hidden')) &&
                        (form.classList.contains('hidden')) &&
                        (workshops.classList.contains('hidden')))) {
                        image.classList.remove('dimmed');
                        toggleTitle();
                        toggleAbout();
                        break;
                    }

                    if ((image.classList.contains('dimmed')) && (
                        (!contact.classList.contains('hidden')) ||
                        (!form.classList.contains('hidden')) ||
                        (!workshops.classList.contains('hidden')))) {
                        toggleAbout();
                    }
                break;

                case ('organise a workshop'):
                    if (!image.classList.contains('dimmed')) {
                        image.classList.add('dimmed');
                        toggleTitle();
                        toggleForm();
                        break;
                    }
                    
                    if ((image.classList.contains('dimmed')) && (
                        (contact.classList.contains('hidden')) &&
                        (about.classList.contains('hidden')) &&
                        (workshops.classList.contains('hidden')))) {
                        image.classList.remove('dimmed');
                        toggleTitle();
                        toggleForm();
                        break;
                    }
                        
                    if ((image.classList.contains('dimmed')) && (
                        (!contact.classList.contains('hidden')) ||
                        (!about.classList.contains('hidden')) ||
                        (!workshops.classList.contains('hidden')))) {
                        toggleForm();
                    }
                break;

                case ('workshops'):
                    if (!image.classList.contains('dimmed')) {
                        image.classList.add('dimmed');
                        toggleTitle();  
                        toggleWorkshops();
                        break;
                    }

                    if ((image.classList.contains('dimmed')) && (
                        (contact.classList.contains('hidden')) &&
                        (about.classList.contains('hidden')) &&
                        (form.classList.contains('hidden')))) {
                        image.classList.remove('dimmed');
                        toggleTitle();
                        toggleWorkshops();
                        break;
                    }

                    if ((image.classList.contains('dimmed')) && (
                        (!contact.classList.contains('hidden')) ||
                        (!about.classList.contains('hidden')) ||
                        (!form.classList.contains('hidden')))) {
                        toggleWorkshops();
                    }
            }
        })
})


document.querySelector('.close-contact').addEventListener('click', ()=>{
    if ((workshops.classList.contains('hidden')) &&
        (form.classList.contains('hidden'))){
        image.classList.remove('dimmed');               
        toggleTitle();
        toggleContact();
    } 

    if ((!workshops.classList.contains('hidden')) ||
        (!form.classList.contains('hidden'))){
        toggleContact();
    }
});


document.querySelector('.close-about').addEventListener('click', ()=>{
    if ((contact.classList.contains('hidden')) &&
        (form.classList.contains('hidden')) &&
        (workshops.classList.contains('hidden'))){
        image.classList.remove('dimmed');               
        toggleTitle();
        toggleAbout();
    }
    
    if ((!contact.classList.contains('hidden')) ||
        (!form.classList.contains('hidden')) ||
        (!workshops.classList.contains('hidden'))){
        toggleAbout();
    } 
});


document.querySelector('.close-form').addEventListener('click', ()=>{
    if ((contact.classList.contains('hidden')) &&
        (workshops.classList.contains('hidden'))){
        image.classList.remove('dimmed');               
        toggleTitle();
        toggleForm();
    } 

    if ((!contact.classList.contains('hidden')) ||
        (!form.classList.contains('hidden'))){
        toggleForm();
    }
});


document.querySelector('.close-workshops').addEventListener('click', ()=>{
    if ((contact.classList.contains('hidden')) &&
        (form.classList.contains('hidden'))){
        image.classList.remove('dimmed');               
        toggleTitle();
        toggleWorkshops();
    }
    
    if ((!contact.classList.contains('hidden')) ||
        (!form.classList.contains('hidden'))){
        toggleWorkshops();
    } 
});



function toggleTitle (){
    title.classList.toggle('hidden');
    title.classList.toggle('visible');    
}

function toggleContact (){
    contact.classList.toggle('hidden');
    contact.classList.toggle('visible');    
}

function toggleAbout (){
    about.classList.toggle('hidden');
    about.classList.toggle('visible');    
}

function toggleForm (){
    form.classList.toggle('hidden');
    form.classList.toggle('visible');    
}

function toggleWorkshops (){
    workshops.classList.toggle('hidden');
    workshops.classList.toggle('visible');    
}










// S L I D E R S

const slides = [
    '/assets/ISP_KOKEDAMA_3.png',
    '/assets/ISP_KOKEDAMA_test.jpg',
    '/assets/ISP_KOKEDAMA_WSP_389.jpg',
    '/assets/ISP_KOKEDAMA_WSP_394.jpg',
    '/assets/ISP_KOKEDAMA_WSP_405.jpg'
];

let currentSlide = 0;
let autoSlideInterval;

const slidesContainer = document.querySelector('.slides-container');

slides.forEach((src, index) =>{
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Kokedama ${index + 1}`;
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


// Slide control with icon arrows
document.querySelector('.left').addEventListener('click', () => {
    prevSlide();
    resetInterval();
})

document.querySelector('.right').addEventListener('click', () => {
    nextSlide();
    resetInterval();
})


// Slide control with arrows keys
document.addEventListener('keydown', (e) =>{
    if(e.key === 'ArrowLeft') prevSlide();
    if(e.key === 'ArrowRight') nextSlide();
    resetInterval();
});


// Automatic slides
const startInterval = () => {
    autoSlideInterval = setInterval(nextSlide, 7500);
};

const resetInterval = () => {
    clearInterval(autoSlideInterval);
    startInterval();
};

startInterval();

document.addEventListener('keydown', (e)=> {
    if (e.key === 'Escape') {
        image.classList.remove('dimmed');
        title.classList.remove('visible');
        title.classList.add('hidden');
        contact.classList.remove('visible');
        contact.classList.add('hidden');
        about.classList.remove('visible');
        about.classList.add('hidden');
        form.classList.remove('visible');
        form.classList.add('hidden');
        workshops.classList.remove('visible');
        workshops.classList.add('hidden');
    } 
});






// F O R M    V A L I D A T I O N

const formData = { 
    company: document.getElementById('company'),
    participants: document.getElementById('participants'),
    city: document.getElementById('city'),
    phone: document.getElementById('telephone'),
    date: document.getElementById('date'),
    email: document.getElementById('email'),
    mailRegEx: /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
};
const participants = document.getElementById('participants'); // Hardcoded workaround, it should work using the object formData

const error = {
    companyErr: false,
    participantsErr: false,
    cityErr: false,
    phoneErr: false,
    dateErr: false,
    emailErr: false
}

const errorMsg = {
    companyErrMsg: 'Please, enter a valid name for you or your company.',
    participantsErrMsg: 'Please, enter a positive number between 4 and 22.',
    cityErrMsg: 'Please, choose a city.',
    phoneErrMsg: 'Please, enter a valid telephone number, including the country code.',
    dateErrMsg: 'Please, enter at least one date for your workshop.',
    emailErrMsg: 'Please, enter a correct valid email'
}


function validateForm(formField) {
    console.log(error.participantsErr);
    console.log(formField);
    if (!formField || formField <= 4 || formField >= 23) error.participantsErr = true;
    if (error.participantsErr) formData.participants.classList.add('error');
    console.log(error.participantsErr);
}

document.addEventListener('focusout', (participants) => { //The second parameter should not be hardcoded, but differentiated according to wich field is used form the object formData
    console.log(`FOCUS OUT FROM ${participants}`);
    // if (formData == formData.participants) validateForm(formData.participants); // 
    validateForm(participants);
});