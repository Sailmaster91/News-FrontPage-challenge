'use strict';

const navMovilBoton = document.getElementById('nav-mobile__button');

navMovilBoton.addEventListener('click', (e) => {
	e.preventDefault();

	if (e.target.closest('button')) {
		document.querySelector('.overlay').classList.add('overlay--active');
		const overlay = document.querySelector('.nav-mobile').parentElement;
		setTimeout(
			() => (document.querySelector('.overlay--active').style.transform = 'translateX(0%)'),
			10
		);
		overlay.addEventListener('click', (e) => {
			setTimeout(
				() => (document.querySelector('.overlay--active').style.transform = 'translateX(100%)'),
				10
			);
			setTimeout(
				() => document.querySelector('.overlay').classList.remove('overlay--active'),

				20
			);
		});
	}
});
