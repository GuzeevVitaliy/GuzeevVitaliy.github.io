window.onload = toggle;
function toggle() {
	burgerShow();
	popupOpen();
}
//Burger 
function burgerShow() {
	const burger = document.querySelector('.burger');
	if (burger) {
		const overlay = document.querySelector('.header__nav');
		const nav = document.querySelector('.header__nav-wrap');
		burger.addEventListener('click', () => {
			document.body.classList.toggle('lock');
			burger.classList.toggle('active');
			nav.classList.toggle('active');
			overlay.classList.toggle('active');
		});
		overlay.addEventListener('click', (e) => {
			const target = e.target;
			const Itsnav = target == nav || nav.contains(target);
			if (nav.classList.contains('active') && !Itsnav) {
				burger.classList.remove('active');
				nav.classList.remove('active');
				overlay.classList.remove('active');
				document.body.classList.remove('lock');
			}
		});

	}
}
//Popup map
function popupOpen() {
	const Buton = document.querySelector('.header__where-wrap');
	const popupWrap = document.querySelector('.map-popup');
	const popupMain = document.querySelector('.map-popup__main');
	const popupCont = document.querySelector('.map-popup__content');
	const popupClose = document.querySelector('.close-popup');
	if (Buton) {
		Buton.addEventListener('click', (e) => {
			e.preventDefault();
			popupWrap.classList.add('open');
			popupMain.classList.add('open');
			popupCont.classList.add('open');
			document.body.classList.add('lock');
		});
		popupClose.addEventListener('click', (e) => {
			popupWrap.classList.remove('open');
			popupMain.classList.remove('open');
			popupCont.classList.remove('open');
			document.body.classList.remove('lock');
		});
		popupMain.addEventListener('click', (e) => {
			const target = e.target;
			const ItsPopupMain = target == popupCont || popupCont.contains(target);
			if (popupCont.classList.contains('open') && !ItsPopupMain) {
				popupWrap.classList.remove('open');
				popupMain.classList.remove('open');
				popupCont.classList.remove('open');
				document.body.classList.remove('lock');
			}

		});
	}
}


