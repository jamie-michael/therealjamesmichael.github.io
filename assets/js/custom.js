const contactForm = document.querySelector('#contact');
const emailOne = document.querySelector('.email-one');
const emailMenu = document.querySelector('.email-menu');



const populateCVLinks = () => {
    const menu = document.querySelector('.cv-menu');
    const one = document.querySelector('.cv-one');
    const footer = document.querySelector('.cv-footer');

    const arr = [menu, one, footer]; 
    
    for (const i of arr) {
        i.href = 'https://docs.google.com/document/d/1oIiKnTZu_8qQHep2UesHzmUz0fO8Qb52PuXk2M1G48U/edit?usp=sharing';
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
// scroll to contact box from ONE banner
emailOne.addEventListener('click', () => {
    console.log('click');
    
    contactForm.scrollIntoView({behavior: 'smooth'});
});





