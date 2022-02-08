
//Константы и переменные для всего документа
const delay = 3;
//Определяем массивы. Каждому уроку будет соответствовать элемент массива 1уроку - 0элемент, 2 -1 и т.д...
//В матрице содержатся данные о параметрах формирования DOM-дерева  0 - номер урока, 1 - пип(урок/пример), 2 - тема урока, 3 - кол-во примеров(вкладок) графики canvas, 
//4 - номер активной вкладки, 5 - массив состоящий из живой коллекции вкладок для данного урока(добавится позже)
const content = document.querySelector('.content');//весь контент страницы, сюда будем вставлять элементы(уроки)
const arrLessonTemaTabs = [
	[1, "Урок", "Рисование прямоугольников", 7, 0],
	[2, "Урок", "Тема урока", 2, 0],
	[3, "Урок", "Тема урока", 3, 0],
	[4, "Урок", "Тема урока", 2, 0],
	[5, "Урок", "Тема урока", 2, 0],
	[6, "Урок", "Тема урока", 2, 0],
	[7, "Урок", "Тема урока", 2, 0],
	[8, "Урок", "Тема урока", 2, 0],
	[9, "Урок", "Тема урока", 2, 0],
	[10, "Урок", "Тема урока", 2, 0],
];
//==end==Создаем нужное количество элементов во вложенном массиве

//console.log(arrLessonTemaTabs);
console.log(`Число элементов массива: ${arrLessonTemaTabs.length}`);

//Матрица хранящая названия кнопок в каждом уроке [номер урока][название кнопки1, имя кнопки2] и т.д.
const tabsNameArr = [
	[arrLessonTemaTabs[0][3], "Очистить", "красный прямоугольник", "синий прямогуольник", "очистка облости", "незалитый", "обводка", "заливка"],
	[arrLessonTemaTabs[1][3], "Очистить", " _ "],
	[arrLessonTemaTabs[2][3], "Очистить", " _ ", " _ "],
	[arrLessonTemaTabs[3][3], "Очистить", " _ "],
	[arrLessonTemaTabs[4][3], "Очистить", " _ "],
	[arrLessonTemaTabs[5][3], "Очистить", " _ "],
	[arrLessonTemaTabs[6][3], "Очистить", " _ "],
	[arrLessonTemaTabs[7][3], "Очистить", " _ "],
	[arrLessonTemaTabs[8][3], "Очистить", " _ "],
	[arrLessonTemaTabs[9][3], "Очистить", " _ "]
];//определяем количество примеров в каждом уроке(столько же будет кнопок в tabs)

//=======Создаём структуру страницы
for (i = 0; i < arrLessonTemaTabs.length; i++) {// присваивается начальное значение i, условие при котором цикл повторяется, шаг цикла
	content.insertAdjacentHTML(
		'beforeend',
		`<div class="lesson lesson_${arrLessonTemaTabs[i][0]}">
	<h2>${arrLessonTemaTabs[i][1]}№ ${arrLessonTemaTabs[i][0]}.</h2>
	<h3>${arrLessonTemaTabs[i][2]}</h3>
	
	<nav class="tabs"></nav>
	<div class="example example_${arrLessonTemaTabs[i][0]}">
	<div class="example__explain">здесь будет текст по уроку(объяснение примера)</div>
	<div class="canvas-and-code">
		<canvas id="c_${arrLessonTemaTabs[i][0]}" height="200" width="400"></canvas>
		<div class="js_code">
			<p>здесь будет js_code</p>
		</div>
	</div>
	</div>
	</div>`
	);
	//console.log(`html для урока ${i} создан!!`);//проверка итераций цикла
}
//==end==Создаём структуру страницы

const lessonArr = document.querySelectorAll('.lesson');
const exampleArr = document.querySelectorAll('.example');
const exampleExplainArr = document.querySelectorAll('.example__explain');//сюда будем вставлять объяснение примера
const canvasArr = document.querySelectorAll('canvas')//
const jsCodeArr = document.querySelectorAll('.js_code');//сюда будем вставлять объяснение примера
const tabsArr = document.querySelectorAll('.tabs');//массив элементов с вкладками в каждый элемент массива будем добавлять столько кнопок сколько будет примеров в уроке
//=======Cоздаем нужное количество вкладок для каждого урока
for (let i = 0; i < arrLessonTemaTabs.length; i++) {// присваивается начальное значение i, условие при котором цикл повторяется, шаг цикла
	//	console.log(i);
	for (let k = 0; k < arrLessonTemaTabs[i][3]; k++) {
		tabsArr[i].insertAdjacentHTML(
			'beforeend',
			`<button class="tab">${tabsNameArr[i][k + 1]}</button>
			`
		);
	};
};
//==end==Cоздаем нужное количество кнопок для каждого урока

//=======Создаем нужное количество элементов во вложенном массиве
for (let i = 0; i < arrLessonTemaTabs.length; i++) {
	arrLessonTemaTabs[i][5] = tabsArr[i].querySelectorAll('.tab');
	//console.log(arrLessonTemaTabs[i][5]);//Проверка
};
//==end==Создаем нужное количество элементов во вложенном массиве

//=======Присваиваим клас _active соответствующей кнопке
function getActive() {
	for (let i = 0; i < arrLessonTemaTabs.length; i++) {// присваивается начальное значение i, условие при котором цикл повторяется, шаг цикла
		for (let k = 0; k < arrLessonTemaTabs[i][3]; k++) {
			if (k === arrLessonTemaTabs[i][4]) {
				arrLessonTemaTabs[i][5][k].classList.add('_active');
				//console.log(arrLessonTemaTabs[i][5][k]);
			} else {
				arrLessonTemaTabs[i][5][k].classList.remove('_active');
			}
		}
	}
}
getActive();
//==end==Присваиваим клас _active соответствующей кнопке

/*Вывод основного массива данных:
console.log('==============================================================');
console.log(arrLessonTemaTabs);
console.log('----------------------------------------------------------------');
*/

//выведем что получилось:
//console.log("lessonArr ==", lessonArr, "exampleArr==", exampleArr, "tabsArr==", tabsArr, "exampleExplainArr==", exampleExplainArr, "canvasArr==", canvasArr, "jsCodeArr==", jsCodeArr);//выводим в консоль живую коллекцию элементов на странице

//=======Получаем в константу массив из живой коллекции вкладок
//const tabsElementsArr
/*
for (let i = 0; i < arrLessonTemaTabs.length; i++) {// цикл перебирает все примеры(уроки) на странице
	for (let k = 0; k < arrLessonTemaTabs[i][3]) {//цикл перебирает все кнопки в [i]-ом примере
	
	};
};
*/
//==end==Получаем в константу массив из живой коллекции вкладок

//Урок 1. Основы canvas
//Константы и переменные для 1 урока

//Объявление canvas в html, css и js 
const htmlText = document.querySelector('.html_text');
const cssText = document.querySelector('.css_text');
const jsText = document.querySelector('.js_text');

htmlText.textContent = `<canvas id="c_1" height="200" width="400"></canvas>`;
cssText.textContent = `canvas {
	width: 400px;
	height: 200px;
	border: 3px solid #000;
	background-image: url(../img/setka.png);
}`;
jsText.textContent = `const canvas = document.querySelector('.lesson_1 canvas');//получаем в переменную элемент canvas находящийся в блоке .lesson_1
const ctx = canvas.getContext('2d');//получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать `;
//__end__Объявление canvas в html, css и js 
//const canvas = document.querySelector('.lesson_1 canvas');//получаем в переменную элемент canvas находящийся в блоке .lesson_1

const functionArr = [
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)
		jsCodeArr[0].innerHTML = `		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать<br>
		ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)`
	},
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		ctx.fillStyle = 'red';  //задаем цвет заливки рисунка
		ctx.fillRect(100, 50, 150, 75);  //рисует прямоугольник по зпданным параметрам (X, Y, ширина, высота)в пикселях X и Y координаты начала рисования (по умолчпнию рисует черным цветом)
		jsCodeArr[0].innerHTML = `const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать<br>
		ctx.fillStyle = 'red';  //задаем цвет заливки рисунка<br>
		ctx.fillRect(100, 50, 150, 75);  //рисует прямоугольник по зпданным параметрам (X, Y, ширина, высота)в пикселях X и Y координаты начала рисования (по умолчпнию рисует черным цветом)<br>`;
	},
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		ctx.fillStyle = 'blue';  //задаем цвет заливки рисунка
		ctx.fillRect(150, 100, 100, 50);  //рисует залитый прямоугольникбез обводки по зпданным параметрам (X, Y, ширина, высота)в пикселях X и Y координаты начала рисования (по умолчпнию рисует черным цветом)
		jsCodeArr[0].innerHTML = `const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать<br>
		ctx.fillStyle = 'blue';  //задаем цвет заливки рисунка<br>
		ctx.fillRect(150, 100, 100, 50);  //рисует залитый прямоугольникбез обводки по зпданным параметрам (X, Y, ширина, высота)в пикселях X и Y координаты начала рисования (по умолчпнию рисует черным цветом)<br>`;
	},
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		ctx.clearRect(200, 75, 400, 200);  //стирает выбранную область(ластик) (X, Y, ширина, высота)
		jsCodeArr[0].innerHTML = `const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать<br>
		ctx.clearRect(200, 75, 400, 200);  //стирает выбранную область(ластик) (X, Y, ширина, высота)<br>`;
	},
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		ctx.rect(50, 10, 100, 100);  //указывает где рисовать прозрачный(не залитый) прямоуголльник
		ctx.stroke();  //рисует прозрачный(не залитый) прямоуголльник
		jsCodeArr[0].innerHTML = `		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать<br>
		ctx.rect(50, 10, 100, 100);  //указывает где рисовать прозрачный(не залитый) прямоуголльник<br>
		ctx.stroke();  //рисует прозрачный(не залитый) прямоуголльник<br>`;
	},
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		ctx.strokeStyle = "green";  //цвет обводки
		ctx.lineWidth = "10";  //Ширина линий обводки
		ctx.rect(50, 10, 100, 100);  //указывает где рисовать прозрачный(не залитый) прямоуголльник
		ctx.stroke();  //рисует прямоугольник
		jsCodeArr[0].innerHTML = `const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать<br>
		ctx.strokeStyle = "green";  //цвет обводки<br>
		ctx.lineWidth = "10";  //Ширина линий обводки<br>
		ctx.rect(50, 10, 100, 100);  //указывает где рисовать прозрачный(не залитый) прямоуголльник<br>
		ctx.stroke();  //рисует прямоугольник<br>`;
	},
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		ctx.strokeStyle = "green";  //цвет обводки
		ctx.lineWidth = "10";  //Ширина линий обводки
		ctx.rect(50, 10, 100, 100);  //указывает где рисовать прозрачный(не залитый) прямоуголльник
		ctx.stroke();  //рисует прямоугольник
		ctx.fillStyle = "purple";  //выбор цвета заливки
		ctx.fill();  //заливает отрисованную фигуру последним выбраным цветом
		jsCodeArr[0].innerHTML = `		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать<br>
		ctx.strokeStyle = "green";  //цвет обводки<br>
		ctx.lineWidth = "10";  //Ширина линий обводки<br>
		ctx.rect(50, 10, 100, 100);  //указывает где рисовать прозрачный(не залитый) прямоуголльник<br>
		ctx.stroke();  //рисует прямоугольник<br>
		ctx.fillStyle = "purple";  //выбор цвета заливки<br>
		ctx.fill();  //заливает отрисованную фигуру последним выбраным цветом<br>`;
	},
];
//_______Выбираем пример для показа
document.addEventListener("click", function name(event) {
	console.log(arrLessonTemaTabs[0][5].length);
	if (event.target.closest('.tab')) {
		for (i = 0; i < arrLessonTemaTabs[0][5].length; i++) {
			console.log(`${event.target} и ${arrLessonTemaTabs[0][5][i]} = ${event.target === arrLessonTemaTabs[0][5][i]}`);
			if (event.target === arrLessonTemaTabs[0][5][i]) {
				arrLessonTemaTabs[0][4] = i;
			}
			//event.target.classList.add('_active');
			//console.log(event);
			//console.log(event.target);
			//console.log(arrLessonTemaTabs);
			getActive();
		}
	}
	//_______Выводим выбраный пример
	switch (arrLessonTemaTabs[0][4]) {
		case 0:
			functionArr[0](canvasArr[0]);
			break;
		case 1:
			functionArr[1](canvasArr[0]);
			break;
		case 2:
			functionArr[2](canvasArr[0]);
			break;
		case 3:
			functionArr[3](canvasArr[0]);
			break;
		case 4:
			functionArr[0](canvasArr[0]);
			functionArr[4](canvasArr[0]);
			break;
		case 5:
			functionArr[0](canvasArr[0]);
			functionArr[5](canvasArr[0]);
			break;
		case 6:
			functionArr[6](canvasArr[0]);
			break;
	};
	//__end__Выводим выбраный пример
});
//__end__Выбираем пример для показа



//__end__Урок 1. Основы canvas

//Урок 2.
//__end__Урок 2.


//Урок 3.
//__end__Урок 3.


//Урок 5.
//__end__Урок 5.

//Урок 6.
//__end__Урок 6.

//Урок 7.
//__end__Урок 7.

//Урок 8.
//__end__Урок 8.

//Урок 9.
//__end__Урок 9.

//Урок 10.
//__end__Урок 10.