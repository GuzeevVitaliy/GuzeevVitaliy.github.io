$(document).ready(function(){
	$('.top__burger').click(function(event){
		$('.top__burger,.top__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});