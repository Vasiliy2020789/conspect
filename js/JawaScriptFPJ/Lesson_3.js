//ОБЪЯВЛЕНИЕ ПЕРЕМЕННОЙ 
//КОНСТАНТЫ
//пример 10
// имена констант известных до выполнения кода
const BLOCK_SIZE = 25;
const COLOR_RED = '#F00';
//Ключевое слово для объявления переменной

//верное объявление пример 1:
let age;
let info123;
let $size;
let _color;
var _color_1;
//НЕверное объявление пример 2:
//let my-age;
//let 123info;

//Нельзя использовать зарезервированные слова пример 3
//Неправильно, вызовет ошибку:
//let let;
//let break;
//let for;
//Объявление без значений
//let myLifeStyle;
//присвоение значения
//myLifeStyle = 'freelanse';
//Объявление переменной и присвоение значения пример 4
let myLifeStyle = "freelanse";
console.log(myLifeStyle);
//Объявление нескольких переменных пример 5
let myName = 'Фрилансер',
	myAge = 32,
	myMessage = 'Живи, а работай в свободное время';
//Изменение значения переменной пример 6
myLifeStyle = 'Фрилансер по жизни';
console.log(myLifeStyle);
//Присвоение одной переменной значения другой переменной пример 7
myLifeStyle = myMessage;
console.log(myLifeStyle);
//Две одноименные переменные пример 8
function testBlock() {
	let myAge = 24;
	console.log('Возраст внутри функции');
	console.log(myAge);
}
console.log('Возраст:');
console.log(myAge);
testBlock();
//Одноименные переменные в разных блоках
//пример 9
console.log('Цикл 1 с переменной i:');
for (let i = 0; i > 3; i++) {
	console.log(i);

}

console.log('Цикл 2 тоже с переменной i:');
for (let i = 5; i > 8; i++) {
	console.log(i);

}
//КОНСТАНТЫ
//пример 11
const summSize = 25 + 15;
//пример 12
const userProfile = {
	name: 'Фрилансер',
	age: 32,
	message: 'Живи, а работай в свободное время'
}
console.log(userProfile);
userProfile.age = 18;
console.log(userProfile);











