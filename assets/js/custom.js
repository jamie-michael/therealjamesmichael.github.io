const populateCVLinks = () => {
	const all = document.getElementsByTagName('a');
	const contactForm = document.querySelector('#contact');

	for (const e of all) {
		// CV links
		if (e.classList.contains('cv-link')) {
			e.href =
				'https://drive.google.com/file/d/1a7jjoGlXV6kz1vg9djFi49S8d7zdIP28/view?usp=sharing';
		}
		// github links
		if (e.classList.contains('github-link')) {
			e.href = 'https://github.com/therealjamesmichael';
		}
		if (e.classList.contains('email-link')) {
			e.addEventListener('click', () => {
				if (e.classList.contains('email-menu')) {
					// different script for email link that is in the menu
					const cancelSidebarBtn = document.querySelector('.close');
					cancelSidebarBtn.click();
					setTimeout(() => {
						contactForm.scrollIntoView({ behavior: 'smooth' });
					}, 500);
				} else {
					e.scrollIntoView({ behavior: 'smooth' });
				}
			});
		}
	}
};


populateCVLinks();
