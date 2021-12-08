const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const subTab = document.getElementById('subtabs');
const subContent = document.querySelectorAll('.sub-content')

const changeClass = el => {
	for (let i = 0; i < tabs.children.length; i++) {
		tabs.children[i].classList.remove('active');		
	}	
	el.classList.add('active');	
}
tabs.addEventListener('click', e => {
	const currTab = e.target.dataset.btn;
	changeClass(e.target);
	for(let i = 0; i < content.length; i++) {
		content[i].classList.remove('active');
		if(content[i].dataset.content === currTab) {
			content[i].classList.add('active');			
		}
	}
})
const changeClass2= el => {
	for (let i = 0; i < subTab.children.length; i++) {
		subTab.children[i].classList.remove('sub-active');		
	}	
	el.classList.add('sub-active');	
}
subTab.addEventListener('click', e => {
	const currTabS = e.target.dataset.btn2;
	changeClass2(e.target);
	for(let i = 0; i < subContent.length; i++) {
		subContent[i].classList.remove('sub-active');
		if(subContent[i].dataset.content2 === currTabS) {
			subContent[i].classList.add('sub-active');			
		}
	}
})