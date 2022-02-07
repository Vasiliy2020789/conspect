//20211109-23:30-00:00  ТК 0-2:00 ТОЛЬКО JS без HTML
//0,5ч
console.log('//Пример 1 Синтаксис');
let message = "Привет Фрилансер";
if (2 > 1) { //Код выполняется если значение в скобках вернет true 
	console.log(message);
}

console.log('//Пример 2 В качестве операндов могут быть переменные');
let x = 1;
let y = 10;
if (x === y) { //Код выполняется если значение в скобках вернет true 
	console.log('Условие выполнено');
}

console.log('//Пример 3 Более сложное условие');
if (2 + 1 === 3 && '1' == 1 || 10 > 5 && 10 === 1) { //Код выполняется если значение в скобках вернет true 
	console.log('Условие выполнено');
}
//20211110-01:00-2:30 ТК 2:00-конец ТОЛЬКО JS без HTML
//1,5 часа 
console.log('//Пример 4 Преобразование типов ""');
if ('') { //Пустая строка -  вернет false
	console.log('Условие выполнено');
}
console.log('//Пример 4.1 Преобразование типов " "');
if (' ') { //пробел вернет true 
	console.log('Условие выполнено');
}
console.log('//Пример 4.2 Преобразование типов  0');
if (0) { //0 вернет false
	console.log('Условие выполнено');
}
console.log('//Пример 4.3 Преобразование типов 1');
if (1) { //1 вернет true 
	console.log('Условие выполнено');
}
console.log('//Пример 5 Более короткая запись');
if (2 > 1) console.log(message);
console.log('//Пример 6 Блоки else и else if');
let number = 0;
if (number > 1) {
	console.log(message);
} else {
	console.log('Условие не выполнено');
}

console.log('//Пример 6.1 Проверка нескольких условий');
number = 29.9999999;
if (number > 50) {
	console.log('Число больше 50');
} else if (number > 30) {
	console.log('Число больше 30');
} else if (number > 10) {
	console.log('Число больше 10');
} else if (number > 1) {
	console.log('Число больше 1');
} else {
	console.log('Условие не выполнено');
}

console.log('//Пример 7 Условный оператор  "?"');
message = 'Привет, ';
let messageEnd;
console.log('//Пример 7.1 "?"//Классическая запись');
if (5 > 1) {
	messageEnd = 'Вася!';
} else {
	messageEnd = 'Оля!';
}
message += messageEnd;
console.log(message);
message = 'Привет, ';
messageEnd = ''
console.log('//Пример 7.2 "?"//Сокращенная запись');
messageEnd = (0 > 1) ? 'Вася!' : 'Оля!';
message += messageEnd;
console.log(message);
message = 'Привет, ';
messageEnd = ''
console.log('//Пример 7.3 "?" Более сложное ветвление');
messageEnd = 5 > 50 ? 'Вася!' :
	5 > 30 ? 'Оля!' :
		5 > 10 ? 'Миша!' :
			5 > 1 ? 'Андрей!' : 'Инокентий!'
message += messageEnd;
console.log(message);

//Итого 2часа на JS
//20211110-9:20-9:40 Оформление в HTML
//20211110-9:40-10:20 Конспект из видео в HTML
//Итого: 3 часа на 9 минутный урок