let priceRange = document.getElementById('priceRange');
if (priceRange){
	noUiSlider.create(priceRange, {
    start: [39, 1230],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 1600
    }
});

const priceRangeItem0 = document.getElementById('priceRangeItem0');
const priceRangeItem1 = document.getElementById('priceRangeItem1');
const priceRangeItems = [priceRangeItem0, priceRangeItem1];

priceRange.noUiSlider.on('update', function(values, handle){
	priceRangeItems[handle].value = Math.round(values[handle]);
	priceRangeItems[handle].innerHTML = priceRangeItems[handle].value;

	});
}