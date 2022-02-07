//20211121- ТК 0-ТОЛЬКО JS
//js + html + домашка + задачи + проект(в часах)
//4 + 
console.log("//Пример 1");
let arr = new Array();//используется редко
let arrP1 = [];
console.log(arrP1);
arrP1 = [ //Заполнение массива значениями...
	'Ваня',//0 позиция
	'Вася',//1 позиция
	'Оля',//висячая запятая
]
arrP1 = ['Ваня', 'Вася', 'Оля',]//...так тоже правильно
console.log(arrP1);


console.log("//Пример 2 Массив из разных элементов");
let arrP2 = [
	"Коля",
	{
		type: "JS",
		age: 32,
	},
	true,
	function () {
		console.log("Привет, я Коля!");
	},
]
console.log(arrP2);
console.log("//Пример 3 Многомерный массив");
let matrix = [
	[0, 1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log(matrix);//вывод матрицы (массива из массивов)
console.log("//Пример 4 Получение значений");
console.log(arrP1[0]);//выводит 0-й элемент массива
console.log(arrP1[6]);//несуществующий элемент массива
console.log(arrP2[1].type);//вывод значения свойства объекта
console.log(matrix[0][1]);//вывод элемента матрицы
arrP2[3]();//вызывакт выполнение функции

console.log("//Пример 5 Длинна массива");
console.log(matrix);
console.log(matrix.length);//вернет длинну массива
console.log(matrix[0].length);//вернет длинну вложенного массива
console.log(arrP2[1].length);//Свойство не применимо к объекту

console.log("//Пример 6 Копирование массива");
let arrNew = arrP1;//Присваиваем переменной массив...
console.log(arrNew);//...выводим его
arrNew.length = 2;//...укорачиваем...
console.log(arrNew);//...новый массив это просто ссылка на изначальный массив...
console.log(arrP1);//...видим что изначальный массив так-же изменился

console.log("//Пример 7 изменение значения массива");
arrP1[0] = 'Коля';//Меняем Вася на Коля...
console.log(arrP1);//...смотрим..
arrP1[2] = "Оля";//..Добавляем Олю
console.log(arrP1);//..смотрим

console.log("//Пример 8 Методы массива, очередь");
arrP1.push("Иштван");//Добавляем элемент в конец массива
console.log(arrP1);//..смотрим
arrP1.push("Дима", "Катя");//добавляем 2 элемента в конец массива
console.log(arrP1);//..смотрим
arrP1.shift();//удаляем 1й элемент массива
console.log(arrP1);//..смотрим
arrP1.pop();//удаляет последний элемент массива
console.log(arrP1);//..смотрим
arrP1.unshift("Дима", "Кристина");//добавляет 2 элемента в начало массива
console.log(arrP1);//..смотрим

console.log("//Пример 9 Удаление, добавление и изменение конкретного элемента массива");
delete arrP1[1];//удаляет 1й элемент
console.log(arrP1);//..смотрим
console.log(arrP1[1]);//..смотрим
console.log(arrP1.length);//..число элементов не меняется

console.log("//Пример 10 Метод splice.");
console.log(arrP1);
arrP1.splice(1, 2);//начиная с первой позиции удаляет 2 элемента
console.log(arrP1);

let removed = arrP1.splice(1, 1);//начиная с первой позиции удаляет 1 элеменn и возвращает его в переменную
console.log(removed);
console.log(arrP1);

arrP1.splice(2, 1, "Катя");//начиная со 2 позиции меняет 1у позицию на указанное значение
console.log(arrP1);

arrP1.splice(1, 0, "Коля", "Оля");//перед 1й позицией добавляет 2 элемента
console.log(arrP1);

arrP1.splice(-1, 1);//Начиная с последней позиции удаляет 1 элемент (вправо)
console.log(arrP1);

console.log("//Пример 11 Метод slice");

let arrCopy1 = arrP1.slice(1, 3);//копирует позиции с 1 по 3(не включая 3)
console.log(arrCopy1);//...смотрим скопированный массив
console.log(arrP1);//юююизначальный массив при этом не изменился

let arrCopy2 = arrP1.slice(-3, -1);//Копирует позиции от 3й с конца до 1й с конца(исключая 1ю)
console.log(arrCopy2);

let arrCopyAll = arrP1.slice();
console.log(arrCopyAll);
if (arrCopyAll = arrP1) {
	console.log('arrCopyAll = arrP1');
}

console.log("//Пример 12 Метод concat");

let arrCopyConcat = arrP1.concat();//создает дубль массива
console.log(arrCopyConcat);

let arrCopyConcatPetya = arrP1.concat("Петя");//создает дубль массива и добавляет в конец массива дубля новый элемент
console.log(arrCopyConcatPetya);


console.log("//Пример 13 indexOf и includes поиск в массиве");
console.log(arrP1.indexOf("Оля"));//возвращает номер позиции которая равна искомому значению...
console.log(arrP1.indexOf("Поля"));//...если искомого знечения нет - возвращает -1
console.log(arrP1.indexOf("Коля", 1));//...начинает поиск с 1й позиции, возвращает номер позиции которая равна искомому значению
console.log(arrP1.indexOf("Коля", 2));//...Коля расположен до 2й позиции поэтому -1

console.log(arrP1.includes("Оля"));//возвращает true если значение найдено
console.log(arrP1.includes("Поля"));//...если искомого знечения нет -false
console.log(arrP1.includes("Коля", 1));//...начинает поиск с 1й позиции, возвращает true если значение найдено
console.log(arrP1.includes("Коля", 2));//...Коля расположен до 2й позиции поэтому false

console.log("//Пример 14 find и findIndex Поиск в массиве объектов");
let arrP14 = [
	{ name: "Вася", age: 36 },
	{ name: "Коля", age: 18 },
	{ name: "Поля", age: 2 },
	{ name: "Оля", age: "Не скажу" },
]
let resultOne = arrP14.find(function (item, index, array) {//функция выполняется для каждого элемента(item) массива(array), позиция(index)..
	return item.age === 18;//возвращает 1й элемент удовлетворяющий условие
});
console.log(resultOne);//выводим результат

let resultOneStrel = arrP14.find(item => item.age === 36);
console.log(resultOneStrel);


let resultTwo = arrP14.findIndex(item => item.age === 18);//возвращает индекс 1го элемента удовлетворяющим условие
console.log(resultTwo);

console.log("//Пример 15 .filter ");
let resultP15 = arrP14.filter(function (item, index, array) {//перебирает массиви возвращает...
	return item.age >= 18;//...все элементы удовлетворяющие условие
});
console.log(resultP15);

console.log("//Пример 16 sort(fn) сортировка массивов");
console.log(arrP1);
console.log(arrP1.sort());// распологает в алфавитном порядке

let arrP16 = [9, 2, 4, 44, 42, 8,]
console.log(arrP16);
console.log(arrP16.sort());//перед сортировкой переводит числа в строку(по умолчанию сортирует как строки)
console.log("//Пример 17 Функция сортировки");
function compareNumeric(a, b) {
	console.log(`Сравниваем${a} и ${b}`);
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;
}
console.log(arrP16.sort(compareNumeric));
arrP17 = [98, 56, 1, 3, 33, 34, 32, 2, 8, 7]
console.log(arrP17);
console.log(arrP17.sort((a, b) => a - b));

console.log("//Пример 18 .reverse меняет поряжок элементов на обратный");
console.log(arrP17.reverse());

console.log("//Пример 19 .map вызывает функцию для элементов массива ");
let result = arrP17.map(function (item, index, array) {
	return item = ++item;
});
console.log(arrP17);
console.log(result);

console.log("//Пример 20 .split и .join ");

let str = "Ваня, Вася, Оля, Лена";
let arrP20 = str.split(",");//Создает массив из строки разделитель в скодках в кавычках
console.log(arrP20);
let arrP20_2item = str.split(",", 2);//создает массив из строки, кол-во элементов - 2 
console.log(arrP20_2item);

console.log('//обратное пребразование');
let toString = arrP20.join(", ");
console.log(toString);

console.log("//Пример 21 Проверка на массив");
let obj = {};
let arrP21 = [];
console.log(typeof obj);
console.log(typeof arrP21);

if (Array.isArray(obj)) {
	console.log("Это массив!");
} else {
	console.log("Это не массив");
}

console.log("//Пример 22 Перебор элементов массива");
let arrP22 = ["Ваня", "Вася", "Оля"];
console.log(arr.length);

console.log("//Пример 23 цикл for ");
console.log(arrP1);
for (let i = 0; i < arrP1.length; i++) {//перебирает массив и...
	console.log(arrP1[i]);//...выводит значения
}

//сокращенная запись
for (let arrItem of arrP1) {//пока значение не равно ложь
	console.log(arrItem);//выводит значение массива
}

let arrP23 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arrP23.length; i++) {
	console.log(2 ** arrP23[i]);//возводит 2 в степень элемента массива
}
let factorial = 0;
for (let i = 0; i < arrP23.length; i++) {
	factorial = factorial + arrP23[i];
	if (i === arrP23.length - 1) {
		console.log(factorial);//выводит сумму когда все элементы проссумированы
	}
}

console.log("//Пример 24 .forEach метод перебора");
arrP1.forEach(function (item, index, array) {//перебираем элементы массива...
	console.log(`${item} находится на ${index} позиции в массиве ${array}`);//...и выполняем действие с каждым элементом
});
console.log("//Стрелочная ф-я:");
arrP1.forEach((item, index, array) => {//перебираем элементы массива...
	console.log(`${item} находится на ${index} позиции в массиве ${array}`);//...и выполняем действие с каждым элементом
});
console.log('//через функцию');

arrP1.forEach(show);
function show(item) {
	console.log(item);
}

console.log("//Пример 21 .reduce и .reduceRight для вычисления единого значения на основе всеж элементов массива");
let reduceValueOne = arrP23.reduce(function (previousValue, item, index, array) {//ф-ия перебора массива с результатом работы предыдущего шага(previousValue)
	return item + previousValue;//суммируем текущее значение элемента(item) с предыдущем
}, 0);//начальное значение для previousValue (по умолчанию 1й элемент массива)
console.log(reduceValueOne);
console.log(arrP20);
let reduceValueTwo = arrP20.reduce(function (previousValue, item, index, array) {//ф-ия перебора массива с результатом работы предыдущего шага(previousValue)
	console.log(`Шаг№ ${index}:`);
	console.log(`previousValue = ${previousValue}`);
	console.log(`item = ${item}`);
	return `${item}, ${previousValue}`
});

console.log(`Пользователи: ${reduceValueTwo} `);



console.log("//Пример 21");
console.log("//Пример 21");
console.log("//Пример 21");

