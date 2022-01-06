$(document).ready(function () {
	$('.js-slider__top').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000
	});
});

//аккордеон, который работает на разрешении экрана от 550px

$(document).ready(function () {
	$('.categories__title').click(function (event) {
		if ($(window).width() <= 550) {
			if ($('.footer__categories').hasClass('one')) {
				$('.categories__title').not($(this)).removeClass('active');
				$('.categories__list').not($(this).next()).slideUp(300);
			}
			$(this).toggleClass('active').next().slideToggle(300);
		}
	});
});

// cards Shop page
$('.shop-main__slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.shop-main__slider-nav',
	waitForAnimate: false
});
$('.shop-main__slider-nav').slick({
	vertical: true,
	slidesToShow: 4,
	arrows: false,
	slidesToScroll: 1,
	asNavFor: '.shop-main__slider-for',
	dots: false,
	focusOnSelect: true,
	verticalSwiping: true,
	waitForAnimate: false,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				vertical: false,
				verticalSwiping: false
			}
		},
		{
			breakpoint: 550,
			settings: {
				vertical: false,
				verticalSwiping: false,
				slidesToShow: 3
			}
		},
		{
			breakpoint: 426,
			settings: {
				vertical: false,
				verticalSwiping: false,
				slidesToShow: 2
			}
		}
	]
});
//second slider bottom 
$('.releted-products__slider-js').slick({
	slidesToShow: 5,
	arrows: false,
	slidesToScroll: 3,
	dots: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		}
	]
});