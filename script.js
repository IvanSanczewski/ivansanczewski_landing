const visionsLink = document.querySelector('.visions-link')

document.querySelector('.visions-toggler').addEventListener('click', () => {
    visionsLink.classList.toggle('hidden');
    visionsLink.classList.toggle('visible');
})

