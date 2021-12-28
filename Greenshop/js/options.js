$(document).ready(function(){
	$('.js-slider__top').slick({
		arrows: false,
		dots: true,
		autoplay: true,
        autoplaySpeed: 5000
	});
});

//аккордеон, который работает на разрешении экрана от 550px

$(document).ready(function(){	
	$('.categories__title').click(function(event){
		if( $(window).width() <= 550 ){ 
			if($('.footer__categories').hasClass('one')){			
				$('.categories__title').not($(this)).removeClass('active');
				$('.categories__list').not($(this).next()).slideUp(300);
			}
			$(this).toggleClass('active').next().slideToggle(300);
		}		
	});	
});
