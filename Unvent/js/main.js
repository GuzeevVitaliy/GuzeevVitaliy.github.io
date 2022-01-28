window.onload = toggle;

function toggle() {
	showSorting();
	search();
	burgerShow();
	sidebarShow();
	popupOpen();
	changeLoginRegister()
}
//sorting
function showSorting() {
	let item = document.querySelector('.main__sorting-item');
	let list = document.querySelector('.sorting__list');
	let arrow = document.querySelector('.arrow-sorting');
	if (item) {
		item.addEventListener('click', (e) => {
			e.stopPropagation();
			list.classList.toggle('show-sorting');
			arrow.classList.toggle('arrow-sorting-move');
		});
		document.addEventListener('click', () => {
			if (list.classList.contains('show-sorting')) {
				list.classList.toggle('show-sorting');
				arrow.classList.toggle('arrow-sorting-move');
			}
		});
	}
}

//Open input search
function search() {
	let adminpanelButton = document.querySelector('.adminpanel__button'),
		adminpanelInput = document.querySelector('.adminpanel__search-input');
	adminpanelButton.addEventListener('click', (e) => {
		e.stopPropagation();
		adminpanelInput.classList.toggle('adminpanel__search-input-active');
	});
	document.addEventListener('click', (e) => {
		const target = e.target;
		const its_adminpanelInput = target == adminpanelInput || adminpanelInput.contains(target);
		if (adminpanelInput.classList.contains('adminpanel__search-input-active') && !its_adminpanelInput) {
			adminpanelInput.classList.toggle('adminpanel__search-input-active');
		}
	});
}
//Burger 1024px
function burgerShow() {
	const burger = document.querySelector('.burger');
	if (burger) {
		const overlay = document.querySelector('.overlay');
		const nav = document.querySelector('.header__nav');
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
//Popup filters 767px
function sidebarShow() {
	const filtersSidebar = document.querySelector('.filters-sidebar');
	if (filtersSidebar) {
		const sidebarClose = document.querySelector('.sidebar__wrap-close');
		const sidebarOverlay = document.querySelector('.sidebar-overlay');
		const sidebarWrap = document.querySelector('.sidebar__wrap');
		filtersSidebar.addEventListener('click', () => {
			document.body.classList.add('lock');
			sidebarOverlay.classList.add('active');
			sidebarWrap.classList.add('active');
			sidebarClose.addEventListener('click', () => {
				sidebarOverlay.classList.remove('active');
				sidebarWrap.classList.remove('active');
				document.body.classList.remove('lock');
			})
		});
		sidebarOverlay.addEventListener('click', (e) => {
			const target = e.target;
			const ItssidebarWrap = target == sidebarWrap || sidebarWrap.contains(target);
			if (sidebarWrap.classList.contains('active') && !ItssidebarWrap) {
				sidebarOverlay.classList.remove('active');
				sidebarWrap.classList.remove('active');
				sidebarClose.classList.remove('active');
				document.body.classList.remove('lock');
			}
		});
	}
}
//Popup Login
function popupOpen() {
	const loginButon = document.querySelector('.login-button');
	const popupWrap = document.querySelector('.login-popup__wrap');
	const popupMain = document.querySelector('.login-popup__main');
	const popupClose = document.querySelector('.login-popup__close');
	if (loginButon) {
		loginButon.addEventListener('click', (e) => {
			e.preventDefault();
			popupWrap.classList.add('open');
			popupMain.classList.add('open');
			document.body.classList.add('lock');
		});
		popupClose.addEventListener('click', (e) => {
			popupWrap.classList.remove('open');
			popupMain.classList.remove('open');
			document.body.classList.remove('lock');
		});
		popupWrap.addEventListener('click', (e) => {
			const target = e.target;
			const ItsPopupMain = target == popupMain || popupMain.contains(target);
			if (popupMain.classList.contains('open') && !ItsPopupMain) {
				popupWrap.classList.remove('open');
				popupMain.classList.remove('open');
				document.body.classList.remove('lock');
			}

		});
	}
}
//Register-login__TABS
function changeLoginRegister() {
	const loginTabs = document.getElementById('register-login__tab');
	const loginPopupContent = document.querySelectorAll('.login-popup__content');
	const changeClass = el => {
		for (let i = 0; i < loginTabs.children.length; i++) {
			loginTabs.children[i].classList.remove('active');
		}
		el.classList.add('active');
	}
	loginTabs.addEventListener('click', (e) => {
		const currTab = e.target.dataset.btn;
		if (!(e.target == loginTabs)) {
			changeClass(e.target);
			for (let i = 0; i < loginPopupContent.length; i++) {
				loginPopupContent[i].classList.remove('active');
				if (loginPopupContent[i].dataset.content === currTab) {
					loginPopupContent[i].classList.add('active');
				}
			}
		}
	});
}


