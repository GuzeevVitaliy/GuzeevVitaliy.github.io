window.onload = bgSlider;
function bgSlider() {
	let cls = ['slide-1','slide-2','slide-3'],
	    header = document.getElementsByTagName('header')[0],
	    i = 1,
	    clsLen = cls.length - 1;
		
	setInterval(function(){
		header.className = cls[i];
		i = i == clsLen ? 0 : i + 1;
	},6000);
} 
