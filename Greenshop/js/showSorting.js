window.onload = toggle;

function toggle(){
	showSorting();
	search();
	burgerShow();
	 sidebarShow();		
}
function showSorting() {	
	let item = document.querySelector('.main__sorting-item');
	let list = document.querySelector('.sorting__list');
	let arrow = document.querySelector('.arrow-sorting');	
	item.addEventListener('click', (e) => {
		e.stopPropagation();
		list.classList.toggle('show-sorting');
		arrow.classList.toggle('arrow-sorting-move');		
	});
	document.addEventListener('click', ()=>{			   			  			  			   		
			if(list.classList.contains('show-sorting')){
				list.classList.toggle('show-sorting');
				arrow.classList.toggle('arrow-sorting-move');
			}
	});	
}
function search() {
	let adminpanelButton = document.querySelector('.adminpanel__button'),
		adminpanelInput = document.querySelector('.adminpanel__search-input');	
		adminpanelButton.addEventListener('click', (e) => {
			e.stopPropagation();
			adminpanelInput.classList.toggle('adminpanel__search-input-active');			
		});
		document.addEventListener('click', (e)=>{
			const target = e.target;
   			const its_adminpanelInput = target == adminpanelInput || adminpanelInput.contains(target);   			  			   		
			if(adminpanelInput.classList.contains('adminpanel__search-input-active') && !its_adminpanelInput){
				adminpanelInput.classList.toggle('adminpanel__search-input-active');
			}
		});
}
function burgerShow(){
		const burger = document.querySelector('.burger');
		if (burger)	{
		const overlay = document.querySelector('.overlay');	
		const  nav = document.querySelector('.header__nav');				
		burger.addEventListener('click', ()=>{		
		document.body.classList.toggle('lock');
		burger.classList.toggle('active');		
		nav.classList.toggle('active');
		overlay.classList.toggle('active');		
	});
}
}
function sidebarShow(){
		const filtersSidebar = document.querySelector('.filters-sidebar');
		if (filtersSidebar)	{
		const sidebarClose = document.querySelector('.sidebar__wrap-close');
		const sidebarOverlay = document.querySelector('.sidebar-overlay');	
		const  sidebarWrap = document.querySelector('.sidebar__wrap');				
		filtersSidebar.addEventListener('click', ()=>{		
		document.body.classList.toggle('lock');				
		sidebarOverlay.classList.add('active');
		sidebarWrap.classList.add('active');
		sidebarClose.addEventListener('click', ()=>{
			sidebarOverlay.classList.remove('active');
			sidebarWrap.classList.remove('active');
			document.body.classList.remove('lock');
		})		
	});
}
}

