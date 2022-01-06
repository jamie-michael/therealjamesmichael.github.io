const emailMenu = document.querySelector('.email-menu');
const contactForm = document.querySelector('#contact');



const populateCVLinks = () => {
    const menu = document.querySelector('.cv-menu');
    const one = document.querySelector('.cv-one');
    const footer = document.querySelector('.cv-footer');

    const arr = [menu, one, footer]; 
    
    for (const i of arr) {
        if (i === true) {
            i.href = 'https://drive.google.com/file/d/1a7jjoGlXV6kz1vg9djFi49S8d7zdIP28/view?usp=sharing';

        }
    }
    
    
}



populateCVLinks();


// scroll to contact form from menu
emailMenu.addEventListener('click', () => {
    const cancelSidebarBtn = document.querySelector('.close');
    
    // close menu
    cancelSidebarBtn.click();
    setTimeout( () => {
        contactForm.scrollIntoView({behavior: 'smooth'})
    },500);
    
    
});