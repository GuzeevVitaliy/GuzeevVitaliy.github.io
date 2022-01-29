$(document).ready(function () {
	$('.header__slider-js').slick({
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 5000
	});
});
$(document).ready(function () {
	$('.header__slider').magnificPopup({
		delegate: 'a',
		type: 'image'
	});
});
