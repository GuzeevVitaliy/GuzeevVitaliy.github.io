window.onload = showSorting;
function showSorting() {
	let item = document.querySelector('.main__sorting-item');
	let list = document.querySelector('.sorting__list');
	let arrow = document.querySelector('.arrow-sorting');
	item.addEventListener('click', () => {
		list.classList.toggle('show-sorting');
		arrow.classList.toggle('arrow-sorting-move');
	});
}