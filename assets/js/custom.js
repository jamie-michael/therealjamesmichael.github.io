const populateCVLinks = () => {
	const all = document.getElementsByTagName('a');
	const contactForm = document.querySelector('#contact');

	for (const e of all) {
		// CV links
		if (e.classList.contains('cv-link')) {
			e.href =
				'https://drive.google.com/file/d/1jwUvf38vT_23ET6oLa_Ruyq5HX-hQENU/view?usp=sharing';
		}
		// github links
		if (e.classList.contains('github-link')) {
			e.href = 'https://github.com/therealjamesmichael';
		}
		// Email links
		if (e.classList.contains('email-link')) {
			e.addEventListener('click', () => {
				if (e.classList.contains('email-menu')) {
					// different script for email link which is located in the side menu
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
