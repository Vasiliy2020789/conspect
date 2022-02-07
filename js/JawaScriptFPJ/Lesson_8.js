//20211110-8:30-9:00 ТК 0-3:00 ТОЛЬКО JS
//Синтаксис Объявления функции 
/*
function имя(параметры) {
	//тело (код) функции
}
*/
//Глобальная переменная...
let globalVar = 'Я глобальная переменная';//...это переменная объявленная до всех функций
showMessage(1); //вызывать функцию можно до её объявления
console.log('//Пример 1 Функция вывода сообщения. Синтаксис');
function showMessage(a) { //ключевое слово "function", название ф-ии "showMessage", в скобках(параметр принимаемый функцикй)
	console.log(`Сообщение ${a}`); //в фигурных скобках {выполняемый клд функции}
}
showMessage(2); //в скобках параметр передаваемый функции

console.log('//Пример 2 Вложенность и видимость функций');
function getSumm() {
	let numOne, numTwo;

	function getNumOne() {//Дочернюю функцию можно вызвать только внутри материнской, за её пределами - вызовет ошибку
		numOne = 1;
	}
	function getNumTwo() {
		numTwo = 2;
	}
	getNumOne();
	getNumTwo();
	let numSumm = numOne + numTwo;
	console.log(numSumm);
}

getSumm();
//20211110-8:30-9:00 ТК 0-3:00 ТОЛЬКО JS
//20211112-0:45- ТК 0-3:00 ТОЛЬКО JS
console.log('//Пример 3 использование внешней переменной');
let message;//переменная объявленная  за пределами функции...
function showMessage3() {
	message = ' Сообщение из функции';//...со значением присвоенным в функции...
	console.log(`${message} Внутри функции`);
}
console.log(`${message} за пределами функции`);//до вызова функции
showMessage3();
console.log(`${message} за пределами функции`);//...будет действовать и за пределами функции


console.log('//Пример 4 внешняя и локальная переменные');
let messageP_4 = ' Сообщение в глобальной переменной';
function showMessage4() {
	let messageP_4 = ' Сообщение в локальной переменной';
	console.log(messageP_4);
}

console.log(messageP_4);//вывод глобальной переменной
showMessage4();//вывод локальной переменной
console.log(messageP_4);//снова вывод глобальной переменной

console.log('//Пример 5 параметры функции (аргументы)');
function calcSumm(x = 1, y = 2) {//аргументы которые принимает функция пишутся в скобках через ",", оператором "=" можно указать значение по умолчанию
	console.log(`x = ${x}`);
	console.log(`y = ${y}`);
	let summ = x + y;
	console.log(` Сумма x + y = ${summ}`);//выводит в консоль результат вычисления
}
calcSumm();// если аргументы не указаны то будет использовано значение по умолчанию
calcSumm(3, 4);

console.log('//Пример 6 Функции-колбэки');
function calcSumm2(x, y, more, less) {
	let summ = x + y;
	if (summ < 3) { //если результат < 3...
		less();//...то вызываем эту функцию, которая вызовет эту showLessMessage(), которая выведет "сумма меньше 3"
	} else {//...иначе...
		more();//...вызываем эту функцию more(), которая вызовет эту showMoreMessage(), которая выведет "сумма больше 3"
	}
}
function showLessMessage() {
	console.log(' сумма меньше 3');
}
function showMoreMessage() {
	console.log(' сумма больше 3');
}
calcSumm2(1, 3, showMoreMessage, showLessMessage)//функция принимает 2 числа и 2 другие функции которые будут выводить сообщение

console.log('//Пример 7 Возврат результата');
function calcSummP7(x7, y7) {
	let summX7Y7 = x7 + y7;
	return summX7Y7;//функция прекращает свою работу и возвращает результат, который можно присвоить переменной...
	//дальше код не выполняется
}
calcSummP7(1, 2);//при вызове функции ничего не выведется
let funcRezult = calcSummP7(1, 2);//...присваиваем переменной результат выполнения функции
console.log(`Сумма: ${funcRezult}`);//выводим результат

console.log('//Пример 8 Вызов внутри функции другой функции');

function getSummP8(x8, y8) {
	let summX8Y8 = calcSummP8(x8, y8);//записываем в переменную результат работы функции...
	console.log(summX8Y8);//...и выводим его в консоль.
}
function calcSummP8(x8, y8) {
	return x8 + y8;//Считаем и возвращаем сумму чисел
}

getSummP8(5, 6);

console.log('//Пример 9 Цикл вместо рекурсии');
//Задача умножить x9 на саму себя y9 раз
//Без рекурсии с помощью цикла
function calcSummP9(x9, y9) {
	console.log(`${x9} в степени ${y9} =`);
	let result = 1;
	for (let i = 0; i < y9; i++) {
		result *= x9;
	}
	return result;
}
console.log(calcSummP9(2, 10));//получим 2 в степени 3

console.log('//Пример 10 тот же результат с использованием рекурсии');
function calcSumm10(x10, y10) {
	if (y10 === 1) {
		return x10;
	} else {
		return x10 * calcSumm10(x10, y10 - 1);
	}
}
console.log(`2 в степени 10 = ${calcSumm10(2, 10)}`);

console.log('//Пример 11 Функциональное выражение (function expression)');
let showMessage5 = function () {
	console.log(`Привет!`);
};
showMessage5();//вызвать функциональное выражение можно только после его объявления

console.log('//Пример 11.1 Копирование функции в переменную');
let someVar = getSumm;//присваиваем переменной значение функции из примена 2
//в момент копирования ф-я не выполняется т.к. нет ()
someVar();//...теперь функцию из примера 2 можно вызвать и через переменную...
getSumm();//...и так же по тому же имени функции.

console.log('//Пример 11.2 Функциональное выражение, if и "use strict"');

if (2 > 1) {
	function getSumm5() {
		let summ = 1 + 2;
		console.log(summ);
	};
}
getSumm5();

'use strict'
let getSumm6_1;
if (2 > 1) {
	getSumm6_1 = function () {
		let summ = 1 + 2;
		console.log(summ);
	};
}
getSumm6_1();

console.log('//Пример 12 Однострочная стрелочная функция');
let getMessage = (text, myName) => text + ' ' + myName + '!';
console.log(getMessage('Привет', 'Вася'));

console.log('//Пример 13 Многострочная стрелочная функция');
let getMessageP13 = (text, myName) => {
	let message = text + ' ' + myName + '!';
	return message;
};
console.log(getMessageP13('Привет', 'Вася'));

console.log('//Пример 14 setTimeout - Однократный вызов функции через определенный период времени');
function getMessageP14(text, myName) {
	console.log(`${text}, ${myName}`);
}
setTimeout(getMessageP14, 3000, 'Привет', 'это Вася');

console.log('//Пример 15 setInterval - вызывает функцию регулярно через заданый интервал');
setInterval(getMessageP14, 10000, 'Привет', 'Лена');

console.log('//Пример 16 Более точная задержка Рекурсия+setTimeout');
function showMessageP16(text, name) {
	console.log(`${text}, ${name}`);
	setTimeout(showMessageP16, 5000, text, name);
}

console.log('//Пример 17 Вывод числа с увеличением на 1');
function showNumber(num) {//
	console.log(num);
	if (num < 5) {
		setTimeout(showNumber, 1000, ++num)
	}
}
setTimeout(showNumber, 1000, 1);

console.log('//Пример 18 Сброс clearTimeout()');
let result = 0;
function showNumberP18(num) {
	result += num;
	console.log(num);
	if (result === 7) {
		clearInterval(timeId)
	}
}
let timeId = setInterval(showNumberP18, 1000, 1);
//console.log('//Пример 19 Сброс clearInterval()');
console.log('//Пример 20 Функции должны быть простыми');
//Функция соединения строк
function createMessageP20(text, name) {
	return `${text}, ${name}`;
}
//Функция вывода в консоль
function showMessageP20(messageP20) {
	console.log(messageP20);
}
//Объеденяющая функция, вызывает обе функции
function initMessage(text, name) {
	showMessageP20(createMessageP20(text, name));
}
initMessage('Привет', 'Фрилансер');
//console.log('//Пример 21 ');
//console.log('//Пример 22 ');



















