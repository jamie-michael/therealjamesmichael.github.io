const contactForm = document.querySelector('#contact');
const emailOne = document.querySelector('.email-one');


emailOne.addEventListener('click', () => {
    console.log('click');
    
    contactForm.scrollIntoView({behavior: 'smooth'});
});





