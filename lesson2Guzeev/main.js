//1

for (let i = 10; i <= 50; i+=2) {		
	console.log(i);	
}
//2

const im = {
	name : 'Vitaly',
	surname : 'Guzeev',	
	age : 34,
	pet : true
};

//3

const array = [
        'я в Симбирск,',
        'в трактире.',
        'с утра',
        'В ту же ночь',
        'Я остановился',
        'для закупки', 
        'что и было поручено Савельичу.',
        'приехал',
        'где должен был',
        'нужных вещей',
        'отправился по лавкам',
        'пробыть сутки',
        'Савельич'
    ];
let result = array[3]+ " " + array[7]+ " " + array[0] + " " + array[8] + " " + array[11] + " " + array[5] + " " + array[9] + ", "+ array[6] + " " + array[4] + " " + array[1] + " " + array[12] + " " + array[2] + " " + array[10];
console.log(result);

//4

function myName(firstName, lastName) {
	const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}
myName("Vitaly","Guzeev");

//5

let i = 21;
while (i <= 67) {
	i += 2;
	console.log(i);			
}		
