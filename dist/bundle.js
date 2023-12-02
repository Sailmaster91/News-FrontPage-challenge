'use strict';

const navMovilBoton = document.querySelector('#nav-mobile__button');
const navMobile = document.querySelector('.nav-mobile');
const closeButton = document.querySelector('.nav-mobile button');

navMovilBoton.addEventListener('click', (e) => {
	e.preventDefault();

	if (e.target.closest('button')) {
		document.querySelector('.overlay').classList.add('overlay--active');

		setTimeout(
			() => (document.querySelector('.overlay--active').style.transform = 'translateX(0%)'),
			10
		);
	}
});
const overlay = document.querySelector('.nav-mobile').parentElement;
overlay.addEventListener('click', (e) => {
	if (!navMobile.contains(e.target) || closeButton.contains(e.target)) {
		document.querySelector('.overlay--active').style.transform = 'translateX(100%)';
		setTimeout(
			() => document.querySelector('.overlay').classList.remove('overlay--active'),

			300
		);
	}
});
