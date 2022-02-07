//ТИПЫ ДАННЫХ
//Undefined пример 1
console.log('Undefined пример 1');
let userName;
console.log(userName);
console.log(typeof userName);
//Null () пример 2 пробуем найти объект которого не существует
console.log('//Null () пример 2 пробуем найти объект которого не существует');
const block = document.querySelector('.dom');
console.log(block);
console.log(typeof block);
//Boolean () пример 3
console.log('//Boolean () пример 3');
let willYouMarryMe = true;
if (willYouMarryMe) {
	console.log(':)');
} else {
	console.log(':(');
}
console.log(typeof willYouMarryMe);
console.log('Меняем на ложь');
willYouMarryMe = false;
if (willYouMarryMe) {
	console.log(':)');
} else {
	console.log(':(');
}
console.log('// можно так же использовать с оператором сравнения:');
let trueOrFalse = 58 < 18;
console.log('58 < 18 ?');
console.log(trueOrFalse);
//Number () пример 4
//Числовой тип данных целые значения а так же числа с плавающей запятой
console.log('//Number () пример 4');
let userAge = 20;
let userHeight = 1.83;
console.log(userAge);
console.log(typeof userAge);
console.log(userHeight);
console.log(typeof userHeight);
//Infinity пример 4.1
console.log('//Infinity и -Infinity пример 4.1');
let getInfinity = 58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);
getInfinity = - 58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);
//NaN - результат математической ошибки пример 4.2
let getNan = 'Фрилансер' / 10;
console.log(getNan);
console.log(typeof getNan);
//Bigint (число большее чем 9007199254740991 и) пример 5
const bigInt = 123456789123456789123456789n;
console.log(bigInt);
console.log(typeof bigInt);
//String (строка - текстовое значение любой длинны) пример 6
console.log('String (строка - текстовое значение любой длинны) пример 6');
console.log('в "" ');
let userNameV1 = "Фрилансер по жизни";
console.log(userNameV1);
console.log(typeof userNameV1);
console.log("пример 6.1 в '' ");
let userNameV2 = 'Фрилансер по жизни';
console.log(userNameV2);
console.log(typeof userNameV2);
console.log('пример 6.2 в `` ');
let userNameV3 = "Фрилансер по жизни";
console.log(userNameV3);
console.log(typeof userNameV3);
//`` - можно встраивать переменные пример 6.3
console.log('пример 6.3');
let userAgeInfo = `Возраст: ${userAge} лет`;
console.log(userAgeInfo);
console.log(typeof userAgeInfo);
//Symbol (Уникальный идентификатор обекта) пример 7
console.log('//Symbol (Уникальный идентификатор обекта) пример 7');
let id = Symbol("id");
console.log(id);
console.log(typeof id);
//Object (Свойство - это пара ключ и значение) пример 8
let userInfo = {
	name: 'Фрилансер по жизни! ',
	age: 36
}
console.log(userInfo);
console.log(typeof userInfo);
console.log(userInfo.name);
//Function (похож на Object) пример 9
console.log('//Function (похож на Object) пример 9');
let functionVariable = function funcName() {
	// код функции...
	for (var i = 0; i > 2; i++) {
		console.log(i);
	}
}
console.log(functionVariable);
console.log(typeof functionVariable);
//Преобразование типов
//Строковое преобразование пример 10
console.log('//Преобразование типов');
console.log('//Строковое преобразование пример 10');
console.log(userAge);
console.log(typeof userAge);
userAge = String(userAge);
console.log(userAge);
console.log(typeof userAge);
console.log('Boolean => String');
console.log(trueOrFalse);
console.log(typeof trueOrFalse);
let trueOrFalseString = String(trueOrFalse)
console.log(trueOrFalseString);
console.log(typeof trueOrFalseString);
console.log('//Числовое преобразование пример 10.1 Boolean => Number');
let trueOrFalseNumber = Number(trueOrFalse);
console.log(trueOrFalseNumber);
console.log(typeof trueOrFalseNumber);

console.log('//Автоматическое числовое преобразование пример 10.2');
let stringToNumber = '72' / '2';
console.log(stringToNumber);
console.log(typeof stringToNumber);
console.log('Попытка преобразовать строку в которой нет цифр в число10.3');

let userNameToNumber = Number(userName);
console.log(userNameToNumber);
console.log(typeof userNameToNumber);
console.log('Логическое преобразование пример 10.4');
console.log(userAge);
let userAgeBoolean = Boolean(userAge);
console.log(userAgeBoolean);
console.log(typeof userAgeBoolean);
console.log('//Boolean(0)');
let x = 0;
let xToBoolean = Boolean(x);
console.log(x);
console.log(typeof x);
console.log(xToBoolean);
console.log(typeof xToBoolean);

console.log('//Boolean("0") возвращает true если строка не пуста');
let y = '0';
let yToBoolean = Boolean(y);
console.log(y);
console.log(typeof y);
console.log(yToBoolean);
console.log(typeof yToBoolean);
/*
x = 3;
y = 4;
let operator = '+'
let resolt = x operator y;
*/