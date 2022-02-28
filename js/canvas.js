
//Константы и переменные для всего документа
const content = document.querySelector('.content');//весь контент страницы, сюда будем вставлять элементы(уроки)

//В матрице содержатся данные о параметрах формирования DOM-дерева
//Определяем массивы. Каждому уроку будет соответствовать элемент массива 1уроку - 0элемент, 2 -1 и т.д...

//_______Основной массив данных
//Структура массива arrLessonTemaTabs[0Номер уч-го материала][1Тип уч-го материала][2Тема уч-го материала]
//[3Количество вкладок(примеров)][4Активная вкладка][5[]живая коллекции вкладок(примеров)]
const arrLessonTemaTabs = [
	[1, "Урок", "Рисование прямоугольников", 7, 0],
	[2, "Урок", "Рисуем линии", 6, 0],
	[3, "Урок", "Paint в Canvas", 2, 0],
	[4, "Урок", "Дуги и круги", 8, 0],
	[5, "Урок", "Анимированый фон", 3, 0],
	[6, "Урок", "Анимированый график", 5, 0],
	[7, "Урок", "Спирограф", 3, 1],
	[8, "Урок", "Игра 'Жизнь'", 2, 0],
	[9, "Урок", "Тема урока", 2, 0],
	[10, "Урок", "Тема урока", 2, 0],
];
//__end__Основной массив данных
//Матрица хранящая названия кнопок в каждом уроке [номер урока][название кнопки1, имя кнопки2] и т.д.
const tabsNameArr = [
	[arrLessonTemaTabs[0][3], "Очистить", "красный прямоугольник", "синий прямогуольник", "очистка облости", "незалитый", "обводка", "заливка"],
	[arrLessonTemaTabs[1][3], "Очистить", "по умолчанию", "цвет / толщина ", "концы линий", "примыкание линий", "треугольник"],
	[arrLessonTemaTabs[2][3], "Очистить", "Рисование"],
	[arrLessonTemaTabs[3][3], "Очистить", "Дуга", "цвет / толщина", "заливка", "окружности", "анимация", "_", "*пакман"],
	[arrLessonTemaTabs[4][3], "Очистить", "Анимация", "21 точка"],
	[arrLessonTemaTabs[5][3], "Очистить", "График синуса", "*Оси X Y 0 в центре", "*Оси X Y 0 внизуслева", "*Разные графики"],
	[arrLessonTemaTabs[6][3], "Очистить", " Спирограф", "*с настройками"],
	[arrLessonTemaTabs[7][3], "Очистить", "Играть"],
	[arrLessonTemaTabs[8][3], "Очистить", " _ "],
	[arrLessonTemaTabs[9][3], "Очистить", " _ "]
];

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
}
//==end==Создаём структуру страницы

//=======Получаем живую коллекцию элементов страницы
const lessonArr = document.querySelectorAll('.lesson');//живая коллекция блок урока
const exampleArr = document.querySelectorAll('.example');//живая коллекция блоков примеров
const canvasArr = document.querySelectorAll('canvas');//живая коллекция элементов canvas
const exampleExplainArr = document.querySelectorAll('.example__explain');//сюда будем вставлять объяснение примера
const jsCodeArr = document.querySelectorAll('.js_code');//сюда будем вставлять js-код примера
const tabsArr = document.querySelectorAll('.tabs');//живая коллекция блоков вкладок в каждый элемент коллекци будем вставлять вкладки

//console.log(tabsArr);
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

//=======Передаем вкладки в основной массив данных
for (let i = 0; i < arrLessonTemaTabs.length; i++) {
	arrLessonTemaTabs[i][5] = tabsArr[i].querySelectorAll('.tab');
};
//==end==Передаум вкладки в основной массив данных

let functionArr = [];//Здесь будем хранить функции(примеры уроков) (functionArr[номер урока][номер выбраной вкладки])
//Заполняем массив функциями вывода текста какая вкладка выбрана(ВРЕМЕННО)

//=======Заполняем массив функциями
for (i = 0; i < arrLessonTemaTabs.length; i++)
	for (i = 0; i < arrLessonTemaTabs.length; i++) {
		functionArr.push([]);
		for (k = 0; k < arrLessonTemaTabs[i][5].length; k++) {
			functionArr[i].push([]);
			functionArr[i][k] = function () {
				console.log(`Вкладке № ${k} в уроке ${i} НЕ назначена функция`);
				exampleExplainArr[i].insertAdjacentHTML(
					'beforeend', `<p>Вкладке № ${k} в уроке ${i} НЕ назначена функция !!! </p>`
				);
			}
			/*
			//console.log(` i = ${i} k = ${k}`);
			functionArr[i][k] = function () {
				console.log(`В примере ${i} выбрана вкладка ${k} под названием ${tabsNameArr[i][k + 1]}`);
			}
			functionArr[i][k]();
			*/
		}
	}
//console.log(functionArr);//ПРОВЕРКА выводит сформированый массив функций
//console.log(functionArr);
//==end==Заполняем массив функциями

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

//Урок 1. Основы canvas
//Константы и переменные для 1 урока
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
//_______Заносим в массив функции(примеры, описания и js-код) которые будем выводить при выборе определённой вкладки
functionArr[0] = [
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)
		jsCodeArr[0].innerHTML = `		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать<br>
		ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)`
	},
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		functionArr[0][0](canvasArr[0]);
		ctx.fillStyle = 'red';  //задаем цвет заливки рисунка
		ctx.fillRect(100, 50, 150, 75);  //рисует прямоугольник по зпданным параметрам (X, Y, ширина, высота)в пикселях X и Y координаты начала рисования (по умолчпнию рисует черным цветом)
		jsCodeArr[0].innerHTML = `const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать<br>
		ctx.fillStyle = 'red';  //задаем цвет заливки рисунка<br>
		ctx.fillRect(100, 50, 150, 75);  //рисует прямоугольник по зпданным параметрам (X, Y, ширина, высота)в пикселях X и Y координаты начала рисования (по умолчпнию рисует черным цветом)<br>`;
	},
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		functionArr[0][0](canvasArr[0]);
		ctx.fillStyle = 'red';  //задаем цвет заливки рисунка
		ctx.fillRect(100, 50, 150, 75);  //рисует прямоугольник по зпданным параметрам (X, Y, ширина, высота)в пикселях X и Y координаты начала рисования (по умолчпнию рисует черным цветом)
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
		functionArr[0][0](canvasArr[0]);
		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
		ctx.rect(50, 10, 100, 100);  //указывает где рисовать прозрачный(не залитый) прямоуголльник
		ctx.strokeStyle = "black";  //цвет обводки
		ctx.lineWidth = "1";  //Ширина линий обводки
		ctx.stroke();  //рисует прозрачный(не залитый) прямоуголльник
		jsCodeArr[0].innerHTML = `		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать<br>
		ctx.rect(50, 10, 100, 100);  //указывает где рисовать прозрачный(не залитый) прямоуголльник<br>
		ctx.stroke();  //рисует прозрачный(не залитый) прямоуголльник<br>`;
	},
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		functionArr[0][0](canvasArr[0]);
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
		functionArr[0][0](canvasArr[0]);
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
//__end__Заносим в массив функции(примеры, описания и js-код) которые будем выводить при выборе определённой вкладки
//__end__Урок 1. Основы canvas



//Урок 2.Рисуем линии  
//Константы и переменные для 2 урока
//Для отрисовки линии мы должны указать координаты(куда передвинуть перо), далее указываем конечную координату и команду рисовать. По умолчанию цвет - черный, толщина 1 пиксель.
//Чтобы изменения стиля линий вступали в силу нужно перед каждым таким изменением начинать новый путь (ctx.beginPath();)
//Можно задавать концы линий по умолчанию (ctx.lineCap = 'butt';) () для соединения линий лучше применять закругленые концы линии (ctx.lineCap = 'round';)

//_______Заносим в массив функции(примеры, описания и js-код) которые будем выводить при выборе определённой вкладки
functionArr[1][0] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)
		jsCodeArr[1].innerHTML = ``
	}

functionArr[1][1] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		functionArr[1][0](canvasArr[1]);//стираем весь canvas
		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)

		ctx.moveTo(50, 50);//устанавливаем кисть на координаты (X, Y)
		ctx.lineTo(100, 150);//указываем конечную точку линии (X, Y) (кисть остается в этой точке)
		ctx.strokeStyle = "black";//определяем цвет заливки
		ctx.lineWidth = '1';//устанавливает ширину линии
		ctx.stroke();//рисует заданный путь
	}
functionArr[1][2] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
		functionArr[1][0](canvasArr[1]);//стираем весь canvas
		ctx.lineWidth = '1';//устанавливает ширину линии
		ctx.strokeStyle = "red";//определяем цвет заливки
		ctx.moveTo(100, 150);//устанавливаем кисть на координаты (X, Y)
		ctx.lineTo(150, 50);//указывает куда рисовать линию
		ctx.stroke();//рисует заданный путь

		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
		ctx.strokeStyle = "orange";//определяем цвет заливки
		ctx.lineWidth = '5';//устанавливает ширину линии
		ctx.moveTo(150, 50);//устанавливаем кисть на координаты (X, Y)
		ctx.lineTo(200, 150);//указывает куда рисовать линию
		ctx.stroke();//рисует заданный путь
	}
functionArr[1][3] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		functionArr[1][0](canvasArr[1]);//стираем весь canvas

		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
		ctx.strokeStyle = "blue";
		ctx.lineWidth = '20';//устанавливает ширину линии
		ctx.moveTo(250, 50);//устанавливаем кисть на координаты (X, Y)
		ctx.lineTo(350, 50);//указывает куда рисовать линию
		ctx.stroke();//рисует заданный путь

		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
		ctx.strokeStyle = "red";
		ctx.lineWidth = '20';//устанавливает ширину линии
		ctx.moveTo(250, 100);//устанавливаем кисть на координаты (X, Y)
		ctx.lineTo(350, 100);//указывает куда рисовать линию
		ctx.lineCap = 'round';//закругленые концы линии
		ctx.stroke();//рисует заданный путь

		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
		ctx.strokeStyle = "green";
		ctx.lineWidth = '20';//устанавливает ширину линии
		ctx.moveTo(250, 150);//устанавливаем кисть на координаты (X, Y)
		ctx.lineTo(350, 150);//указывает куда рисовать линию
		ctx.lineCap = 'square';//квадратные концы линии (наращивает половину толщины линии)
		ctx.stroke();//рисует заданный путь
	}
functionArr[1][4] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		functionArr[1][0](canvasArr[1]);//стираем весь canvas
		//пример примыкания линий с разными концами
		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
		ctx.strokeStyle = "blue";
		ctx.lineWidth = '20';//устанавливает ширину линии
		ctx.lineCap = 'butt';//концы по прямые (по умолчанию)
		ctx.moveTo(50, 50);//устанавливаем кисть на координаты (X, Y)
		ctx.lineTo(125, 50);//указывает куда рисовать линию
		ctx.lineTo(125, 150);//указывает куда рисовать линию
		ctx.lineTo(50, 50);//указывает куда рисовать линию
		ctx.stroke();//рисует заданный путь

		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
		ctx.strokeStyle = '#880065';
		ctx.lineWidth = '20';//устанавливает ширину линии
		ctx.lineCap = 'round';//концы круглые
		ctx.moveTo(175, 50);//устанавливаем кисть на координаты (X, Y)
		ctx.lineTo(250, 50);//указывает куда рисовать линию
		ctx.lineTo(250, 150);//указывает куда рисовать линию
		ctx.lineTo(175, 50);//указывает куда рисовать линию
		ctx.stroke();//рисует заданный путь

		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
		ctx.strokeStyle = 'red';
		ctx.lineWidth = '20';//устанавливает ширину линии
		ctx.lineCap = 'square';//концы по прямые (по умолчанию)
		ctx.moveTo(300, 50);//устанавливаем кисть на координаты (X, Y)
		ctx.lineTo(375, 50);//указывает куда рисовать линию
		ctx.lineTo(375, 150);//указывает куда рисовать линию
		ctx.lineTo(300, 50);//указывает куда рисовать линию
		ctx.stroke();//рисует заданный путь
	}

functionArr[1][5] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		functionArr[1][0](canvasArr[1]);//стираем весь canvas
		//пример рисование треугольника
		//ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)
		ctx.strokeStyle = "blue";
		ctx.lineWidth = '10';//устанавливает ширину линии
		ctx.lineCap = 'round';//концы круглые
		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
		ctx.moveTo(50, 150);
		ctx.lineTo(150, 50);
		ctx.lineTo(200, 150);
		//ctx.lineTo(50, 150);//соеденяем треугольник
		ctx.closePath();//замыкает нарисованный путь
		ctx.stroke();//рисует заданный путь(причем с острыми углами)
		ctx.fillStyle = 'yellow';//выбираем цвет заливки
		ctx.fill();//заливаем нарисованную фигуру
	}
//__end__Урок 2.

//_______Урок 3. Paint в Canvas
//Константы и переменные для урока
let brushSize = 20;//размер кисти в пикселях
let myColor = 'black';
//_______Создаем элемент  управления (цвет)
exampleExplainArr[2].insertAdjacentHTML(
	'beforeend',
	`<div class="options">
	<input type="color" id="L3MyColor" name="Выбрать цвет">
	<input type="range" id="L3brushSize" min="0" max="100" step="1" value="20">
	</div>`
);
//__end__Создаем элемент  управления (цвет)

//_______Получаем цвет из input
document.getElementById('L3MyColor').oninput = function () {
	myColor = this.value;
}
//__end__Получаем цвет из input

functionArr[2] = [
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)
		jsCodeArr[0].innerHTML = `		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать<br>
		ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)`
	},
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		//ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)

		canvas.onmousedown = function (event) {
			canvas.onmousemove = function (event) {//вешаем на canvas событие движение мыши, при событии вызываем функцию
				brushSize = document.getElementById('L3brushSize').value;
				let x = event.offsetX;//получаем положение курсора по X
				let y = event.offsetY;//получаем положение курсора по Y
				ctx.fillRect(x - (brushSize / 2), y - (brushSize / 2), brushSize, brushSize);//рисует прямоугольник в 
				ctx.fillStyle = myColor;
				ctx.fill();
			}
			canvas.onmouseup = function () {
				canvas.onmousemove = null;
			}
		}
		jsCodeArr[2].innerHTML = ``
	}
];
//__end__Урок 3.

//Урок 4. Дуги и круги.
lessonArr[3].insertAdjacentHTML(
	'beforeend',
	``
);
functionArr[3][0] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)
		jsCodeArr[0].innerHTML = `		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать<br>
		ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)`
	}
functionArr[3][1] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		var pi = Math.PI;//заносим число пи в переменную для удобства
		functionArr[3][0](canvasArr[3])
		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)		
		ctx.lineWidth = 1;//толщина линии
		ctx.strokeStyle = "black";//цвет линии
		ctx.arc(100, 100, 75, 0, pi / 2, true);
		ctx.stroke();
		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)		
		ctx.arc(300, 100, 75, 0, pi / 2, false);
		ctx.stroke();

		jsCodeArr[2].innerHTML = ``
	}
functionArr[3][2] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		var pi = Math.PI;//заносим число пи в переменную для удобства
		functionArr[3][0](canvasArr[3]);
		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)		
		ctx.lineWidth = 5;//толщина линии 5px
		ctx.strokeStyle = "red";//цвет линии красный
		ctx.arc(100, 100, 75, 0, pi / 2, true);
		ctx.stroke();

		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)		
		ctx.arc(300, 100, 75, 0, pi / 2, false);
		ctx.stroke();
		jsCodeArr[2].innerHTML = ``
	}
functionArr[3][3] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		var pi = Math.PI;//заносим число пи в переменную для удобства
		functionArr[3][0](canvasArr[3]);
		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)		
		ctx.lineWidth = 5;//толщина линии 5px
		ctx.strokeStyle = "red";//цвет линии красный
		ctx.fillStyle = "yellow";
		ctx.arc(100, 50, 40, 0, 2 * pi, true);
		ctx.stroke();
		ctx.fill();

		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)		
		ctx.lineWidth = 5;//толщина линии 5px
		ctx.strokeStyle = "red";//цвет линии красный
		ctx.fillStyle = "#7eb8e7";
		ctx.arc(100, 150, 40, 0, pi / 2, true);
		ctx.stroke();
		ctx.fill();

		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)		
		ctx.lineWidth = 5;//толщина линии 5px
		ctx.strokeStyle = "red";//цвет линии красный
		ctx.fillStyle = "#770066";
		ctx.arc(200, 50, 40, 0, pi, true);
		ctx.stroke();
		ctx.fill();

		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)		
		ctx.lineWidth = 5;//толщина линии 5px
		ctx.strokeStyle = "red";//цвет линии красный
		ctx.fillStyle = "#000055";
		ctx.arc(200, 150, 40, 0, 3 * pi / 2, true);
		ctx.stroke();
		ctx.fill();

		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)		
		ctx.lineWidth = 5;//толщина линии 5px
		ctx.strokeStyle = "red";//цвет линии красный
		ctx.fillStyle = "#73ffd4";
		ctx.arc(300, 50, 40, 0, pi / 2, true);
		ctx.closePath();//замыкает нарисованный путь
		ctx.stroke();
		ctx.fill();

		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)		
		ctx.lineWidth = 5;//толщина линии 5px
		ctx.strokeStyle = "red";//цвет линии красный
		ctx.fillStyle = "#de6bf5";
		ctx.arc(300, 150, 40, 0, 3 * pi / 2, true);
		ctx.closePath();//замыкает нарисованный путь
		ctx.stroke();
		ctx.fill();
		jsCodeArr[2].innerHTML = ``
	}
functionArr[3][4] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		var pi = Math.PI;//заносим число пи в переменную для удобства
		functionArr[3][0](canvasArr[3]);
		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)		
		ctx.lineWidth = 5;//толщина линии 5px
		ctx.strokeStyle = "#00BFFF";//цвет линии красный
		ctx.arc(150, 100, 75, 0, 2 * pi, false);
		ctx.fillStyle = "#9370DB";
		ctx.stroke();
		ctx.fill();

		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)пути теперь не взаимосвязаны	
		ctx.arc(250, 100, 75, 0, 2 * pi, false);
		ctx.stroke();
		ctx.fillStyle = "#EE82EE";
		ctx.fill();

		jsCodeArr[2].innerHTML = ``
	}

functionArr[3][5] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		var pi = Math.PI;//заносим число пи в переменную для удобства
		functionArr[3][0](canvasArr[3]);
		ctx.lineWidth = 5;//толщина линии 5px
		ctx.strokeStyle = "#00BFFF";//цвет обводки/линии
		ctx.fillStyle = "#9370DB";//Цвет заливки
		canvas.onmousemove = function (event) {
			var x = event.offsetX;//координата X курсора
			var y = event.offsetY;//координата Y курсора
			ctx.clearRect(0, 0, 400, 200);//очищаем поле
			ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)		
			let radius = Math.pow(Math.pow(x - 200, 2) + Math.pow(y - 100, 2), 0.5);//Вычисляем радиус окружности
			ctx.arc(200, 100, radius, 0, 2 * pi, false);//рисуем окружность
			ctx.stroke();//рисует путь
			ctx.fill();//делает заливку
		}
		jsCodeArr[2].innerHTML = ``
	}




functionArr[3][7] =//в этой вкладке нарисуес пакмана и анимируем его
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		var pi = Math.PI;//заносим число пи в переменную для удобства
		var pacmanPosition = [100, 50];//текущее положение пакмана
		var pacmanSize = 25;//размер пакмана в пикселях
		var pacmanEyeOption = [[0, -12], [12, 0], [0, -12], [-12, 0]];//расположение центра глаза пакмана в зависимости от его направления
		const pacmanSpinOption = [0, pi / 2, pi, 3 * pi / 2];//все возможные направления пакмана [0] - вправо, [1] - вниз, [2] - влево [3] - вверх. 
		var pacmanSpin = pacmanSpinOption[0]; //здесь будем хранить текущее направление пакмана (изначально вправо)
		var pacmanMouth =
			functionArr[3][0](canvasArr[3]);
		//_______рисуем пакмана направленого ВПРАВО
		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)		
		ctx.lineWidth = 1;//толщина линии 1px
		ctx.strokeStyle = "#FFF300";//цвет линии красный
		ctx.arc(pacmanPosition[0], pacmanPosition[1], pacmanSize, pacmanSpin - (pi / 6), pacmanSpin + (pi / 6), true);
		ctx.lineTo(pacmanPosition[0], pacmanPosition[1]);//указывает куда рисовать линию
		ctx.closePath();//замыкает нарисованный путь
		ctx.stroke();
		ctx.fillStyle = "#FFF300";
		ctx.fill();

		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
		ctx.strokeStyle = "#000000";//цвет линии красный	
		ctx.arc(pacmanPosition[0] + pacmanEyeOption[0][0], pacmanPosition[1] + pacmanEyeOption[0][1], 3, 0, 2 * pi, false);
		ctx.stroke();
		ctx.fillStyle = "#000000";
		ctx.fill();
		//__end__рисуем пакмана направленого ВПРАВО

		pacmanPosition = [pacmanPosition[0] + 50, pacmanPosition[1]]; //меняем позицию пакмана

		//_______рисуем пакмана направленого ВПРАВО
		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)		
		ctx.lineWidth = 1;//толщина линии 1px
		ctx.strokeStyle = "#000000";//цвет линии
		ctx.arc(pacmanPosition[0], pacmanPosition[1], pacmanSize, pacmanSpin - (pi / 6), pacmanSpin + (pi / 6), true);
		ctx.lineTo(pacmanPosition[0], pacmanPosition[1]);//указывает куда рисовать линию
		ctx.closePath();//замыкает нарисованный путь
		ctx.stroke();
		ctx.fillStyle = "#FFF300";
		ctx.fill();

		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
		ctx.strokeStyle = "#000000";//цвет линии красный	
		ctx.arc(pacmanPosition[0] + pacmanEyeOption[0][0], pacmanPosition[1] + pacmanEyeOption[0][1], 3, 0, 2 * pi, false);
		ctx.stroke();
		ctx.fillStyle = "#000000";
		ctx.fill();
		//__end__рисуем пакмана направленого ВПРАВО
		pacmanPosition = [pacmanPosition[0] + 50, pacmanPosition[1]]; //меняем позицию пакмана

		//_______рисуем пакмана направленого ВПРАВО
		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)		
		ctx.lineWidth = 1;//толщина линии 1px
		ctx.strokeStyle = "#000000";//цвет линии
		ctx.arc(pacmanPosition[0], pacmanPosition[1], pacmanSize, pacmanSpin - (pi / 6), pacmanSpin + (pi / 6), true);
		ctx.lineTo(pacmanPosition[0], pacmanPosition[1]);//указывает куда рисовать линию
		ctx.closePath();//замыкает нарисованный путь
		ctx.stroke();
		ctx.fillStyle = "#FFF300";
		ctx.fill();

		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
		ctx.strokeStyle = "#000000";//цвет линии красный	
		ctx.arc(pacmanPosition[0] + pacmanEyeOption[0][0], pacmanPosition[1] + pacmanEyeOption[0][1], 3, 0, 2 * pi, false);
		ctx.stroke();
		ctx.fillStyle = "#000000";
		ctx.fill();
		jsCodeArr[2].innerHTML = ``
	}
//__end__рисуем пакмана направленого ВПРАВО
//__end__Урок 4. Дуги и круги.

//Урок 5.
functionArr[4][0] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)
		jsCodeArr[4].innerHTML = `		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать<br>
		ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)`;
	}
//Анимируем движение точки на поле и рисуем линию от точки (юнит) до курсора мышки
functionArr[4][1] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		let x = 200;
		let y = 100;
		let myX;
		let myY;
		let stepCount = 0;//Кол-во шагов в одном направлении
		let direction; //направление движения (8 направлений движения)
		let timer;
		let delay = 42;
		function drawDot() {
			ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)
			if (stepCount == 0) {
				stepCount = Math.floor(15 * Math.random());//генерация случайного кол-ва шагов 0 - 15 пикселей
				direction = Math.floor(8 * Math.random()); //генерация случайного направления 0-7
			} else {
				stepCount--;//
			}
			//изменение координат точки:
			switch (direction) {
				case 0:
					y = y - 1;//вверх
					break;
				case 1:
					x = x + 1;//вправо
					break;
				case 2:
					y = y + 1;//вниз
					break;
				case 3:
					x = x - 1;//влево 
					break;
				case 4:
					y = y - 1;//вправо вверх
					x = x + 1;
					break;
				case 5:
					y = y + 1;//вправо вниз
					x = x + 1;
					break;
				case 6:
					y = y + 1;//влево вниз
					x = x - 1;
					break;
				case 7:
					y = y - 1;//влево вверх
					x = x - 1;
					break;
			}
			if (x <= 10 || x >= 390 || y <= 10 || y >= 190) step = 0;//проверка на пересечение границ canvas
			//рисуем прямоугольник:
			ctx.fillRect(x - 3, y - 3, 6, 6);
			ctx.beginPath();
			ctx.moveTo(x, y);
			ctx.lineTo(myX, myY);
			ctx.stroke();
			timer = setTimeout(drawDot, delay);//запускаем функцию с
			if (arrLessonTemaTabs[4][5] === 0) {
				clearTimeout(timer);
				functionArr[4][0]();
			}
		}
		drawDot();

		canvas.onmousemove = function (event) {
			myX = event.offsetX;
			myY = event.offsetY;
		}
	}

//__end__Урок 5.

//Урок 6. Анимированые графики
functionArr[5][0] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)
		jsCodeArr[5].innerHTML = `const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать<br>
		ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)`;
	}
functionArr[5][1] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		let x = 0;
		let y;
		let timer;
		let delay = 10;
		//для лучшей визуализации графика растянем его и сдвинем:
		let shiftY = 100;//сдвинуть Y 
		let stretchY = 50;//растянуть Y
		let shiftX = 100;//сдвинуть X
		let stretchX = 50;//растянуть X
		function drawSin() {
			y = Math.sin(x);
			x = x + 0.01;
			ctx.fillRect(x * stretchX - 1, (y * (-1) * stretchY + shiftY - 1), 2, 2);
			ctx.stroke();
			timer = setTimeout(drawSin, delay)
		}
		jsCodeArr[5].innerHTML = ``;
		drawSin();
	}

functionArr[5][2] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать

		let x = 0;//значение X передаваемое в функцию графика
		let y = 0;//значение Y передаваемое в функцию графика
		let scale = 30;//задает масштаб (сколько пикселей в еденице)
		let shiftX = 200;//сдвинуть X
		let shiftY = 100;//сдвинуть Y 
		let stretchX = scale;//растянуть X
		let stretchY = scale;//растянуть Y
		let homeСore = {
			x0: canvasArr[5].getAttribute('width') / 2,
			y0: canvasArr[5].getAttribute('height') / 2
		};
		console.log(homeСore);
		let timer;//таймер отрисовки графика
		let delay = 1;//задержка между отрисовкой точек графика

		//для лучшей визуализации графика растянем его и сдвинем:
		let inversionX = 1;//инверсия осей (1 - нет инверсии, -1 инвертировать оси)
		let inversionY = -1;//инверсия осей (1 - нет инверсии, -1 инвертировать оси)
		let сorrectedX = x * inversionX * stretchX + shiftX;
		let сorrectedY = y * inversionY * stretchY + shiftY;
		//canvas.backgroundImage.remove();

		//_______рисуем координатные оси с подписями едениц
		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
		ctx.lineWidth = '2';//устанавливает ширину линии
		//_______Рисуем ось Х
		ctx.moveTo(10, homeСore.y0);
		ctx.lineTo(canvasArr[5].getAttribute('width') - 10, homeСore.y0);
		ctx.lineTo(canvasArr[5].getAttribute('width') - 10 - 10, homeСore.y0 - 3);
		ctx.moveTo(canvasArr[5].getAttribute('width') - 10, homeСore.y0);
		ctx.lineTo(canvasArr[5].getAttribute('width') - 10 - 10, homeСore.y0 + 3);
		ctx.stroke();
		//_______Рисуем ось Y
		ctx.moveTo(homeСore.x0, canvasArr[5].getAttribute('height') - 10);
		ctx.lineTo(homeСore.x0, 10);
		ctx.lineTo(homeСore.x0 - 3, 10 + 10);
		ctx.moveTo(homeСore.x0, 10);
		ctx.lineTo(homeСore.x0 + 3, 10 + 10);
		ctx.stroke();
		//Подписываем оси и 0
		ctx.font = "15px Monospace";// Назначаем размер и шрифт текста Tahoma
		ctx.fillText("0", homeСore.x0 + 2, homeСore.y0 + 13);// Пишем сам текст
		ctx.fillText("X", canvasArr[5].getAttribute('width') - 10 + 2, homeСore.y0 + 13);// Пишем сам текст
		ctx.fillText("Y", homeСore.x0 + 2, 10);// Пишем сам текст
		//__end__Рисуем координатные оси

		//_______Рисуем разметку деления осей
		function markingAxes() {
			let sectionLength;//длинна отрезка разметки
			let sumDots;
			let stepX;
			let stepY;

			for (let i = 0; i < 4; i++) { // i - направление 0 - вправо, 1 - вниз, 2 - влево, 3 - вверх
				console.log(i);

				switch (i) {
					case 0://вправо 
						sectionLength = canvasArr[5].getAttribute('width') - homeСore.x0 - 20;
						summDots = Math.floor(sectionLength / scale);
						stepX = scale;
						stepY = 0;
						console.log(sectionLength);
						console.log(summDots);
						break;
					case 1://вниз
						sectionLength = canvasArr[5].getAttribute('height') - homeСore.y0 - 20;
						summDots = Math.floor(sectionLength / scale);
						stepX = 0;
						stepY = -1 * scale;
						console.log(sectionLength);
						console.log(summDots);
						break;
					case 2://влево 
						sectionLength = homeСore.x0 - 20;
						summDots = Math.floor(sectionLength / scale);
						stepX = -1 * scale;
						stepY = 0;
						console.log(sectionLength);
						console.log(summDots);
						break;
					case 3://вверх 
						sectionLength = homeСore.y0 - 20;
						summDots = Math.floor(sectionLength / scale);
						stepX = 0;
						stepY = scale;
						console.log(sectionLength);
						console.log(summDots);
						break;

				}
				console.log(stepX, stepY, summDots, sectionLength);
				drawMarking(stepX, stepY, summDots, sectionLength);
			}
		}
		//_______Функция отрисовки разметки осей (направление(0-3), кол-во точек, шаг деления оси)
		function drawMarking(stepX, stepY, summDots, sectionLength) {
			var pi = Math.PI;//заносим число пи в переменную для удобства
			for (let i = 0; i <= summDots; i++) {
				ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)		
				ctx.lineWidth = 2;//толщина линии
				ctx.strokeStyle = "black";//цвет линии
				ctx.arc((i * stepX) + shiftX, (i * stepY) + shiftY, 2, 0, 2 * pi, false);//задает параметры контура окружности (центрX, центрY, радиус, начало пути в радианах, Конец пути в радианах, направление)
				ctx.stroke();
				ctx.font = "15px Monospace";// Назначаем размер и шрифт текста Tahoma
				ctx.fillText(`${i}`, (i * stepX) + shiftX + 2, (i * stepY) + shiftY + 13);// Пишем сам текст
			}
		}
		markingAxes();

		//__end__Функция отрисовки разметки осей (направление(0-3), кол-во точек, шаг деления оси)
		//__end__Рисуем разметку деления осей

		//__end__подписями едениц


		//_______рисуем график:
		x = -6;
		function drawSchedule() {
			//y = Math.tan(x / 5);
			y = Math.sin(x);
			//y = 2 * x + x * x;// парабола
			//y = 2 / x;
			x = x + 0.002;
			сorrectedX = x * inversionX * stretchX + shiftX;
			сorrectedY = y * inversionY * stretchY + shiftY;
			//console.log(`x =${x} y= ${y}`);
			//console.log(`ОТРИСОВКА x =${сorrectedX} y= ${сorrectedY}`);
			//ctx.fillRect(x * stretchX - 1, (y * (-1) * stretchY + shiftY - 1), 2, 2);
			ctx.fillRect(сorrectedX - 1, сorrectedY - 1, 2, 2);
			ctx.stroke();
			timer = setTimeout(drawSchedule, delay)
		}
		jsCodeArr[5].innerHTML = ``;
		drawSchedule();
		//__end__рисуем график:

	}
functionArr[5][3] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать

		let x = 0;//значение X передаваемое в функцию графика
		let y = 0;//значение Y передаваемое в функцию графика
		let scale = 20;//задает масштаб (сколько пикселей в еденице)
		let homeСore = {
			x0: 15,
			y0: canvasArr[5].getAttribute('height') - 15
		};
		let shiftX = homeСore.x0;//сдвинуть X
		let shiftY = homeСore.y0;//сдвинуть Y
		let stretchX = scale;//растянуть X
		let stretchY = scale;//растянуть Y
		console.log(homeСore);
		let timer;//таймер отрисовки графика
		let delay = 5;//задержка между отрисовкой точек графика

		//для лучшей визуализации графика растянем его и сдвинем:
		let inversionX = 1;//инверсия осей (1 - нет инверсии, -1 инвертировать оси)
		let inversionY = -1;//инверсия осей (1 - нет инверсии, -1 инвертировать оси)
		let сorrectedX = x * inversionX * stretchX + shiftX;
		let сorrectedY = y * inversionY * stretchY + shiftY;
		//canvas.backgroundImage.remove();

		//_______рисуем координатные оси с подписями едениц
		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
		ctx.lineWidth = '2';//устанавливает ширину линии
		//_______Рисуем ось Х
		ctx.moveTo(10, homeСore.y0);
		ctx.lineTo(canvasArr[5].getAttribute('width') - 10, homeСore.y0);
		ctx.lineTo(canvasArr[5].getAttribute('width') - 10 - 10, homeСore.y0 - 3);
		ctx.moveTo(canvasArr[5].getAttribute('width') - 10, homeСore.y0);
		ctx.lineTo(canvasArr[5].getAttribute('width') - 10 - 10, homeСore.y0 + 3);
		ctx.stroke();
		//_______Рисуем ось Y
		ctx.moveTo(homeСore.x0, canvasArr[5].getAttribute('height') - 10);
		ctx.lineTo(homeСore.x0, 10);
		ctx.lineTo(homeСore.x0 - 3, 10 + 10);
		ctx.moveTo(homeСore.x0, 10);
		ctx.lineTo(homeСore.x0 + 3, 10 + 10);
		ctx.stroke();
		//Подписываем оси и 0
		ctx.font = "15px Monospace";// Назначаем размер и шрифт текста Tahoma
		ctx.fillText("0", homeСore.x0 + 2, homeСore.y0 + 13);// Пишем сам текст
		ctx.fillText("X", canvasArr[5].getAttribute('width') - 10 + 2, homeСore.y0 + 13);// Пишем сам текст
		ctx.fillText("Y", homeСore.x0 + 2, 10);// Пишем сам текст
		//__end__Рисуем координатные оси

		//_______Рисуем разметку деления осей
		function markingAxes() {
			let sectionLength;//длинна отрезка разметки
			let sumDots;
			let stepX;
			let stepY;

			for (let i = 0; i < 4; i++) { // i - направление 0 - вправо, 1 - вниз, 2 - влево, 3 - вверх
				console.log(i);

				switch (i) {
					case 0://вправо 
						sectionLength = canvasArr[5].getAttribute('width') - homeСore.x0 - 20;
						if (sectionLength < scale) break;
						summDots = Math.floor(sectionLength / scale);
						stepX = scale;
						stepY = 0;
						console.log(sectionLength);
						console.log(summDots);
						break;
					case 1://вниз
						sectionLength = canvasArr[5].getAttribute('height') - homeСore.y0 - 20;
						if (sectionLength < scale) break;
						summDots = Math.floor(sectionLength / scale);
						stepX = 0;
						stepY = -1 * scale;
						console.log(sectionLength);
						console.log(summDots);
						break;
					case 2://влево 
						sectionLength = homeСore.x0 - 20;
						if (sectionLength < scale) break;
						summDots = Math.floor(sectionLength / scale);
						stepX = -1 * scale;
						stepY = 0;
						console.log(sectionLength);
						console.log(summDots);
						break;
					case 3://вверх 
						sectionLength = homeСore.y0 - 20;
						if (sectionLength < scale) break;
						summDots = Math.floor(sectionLength / scale);
						stepX = 0;
						stepY = scale;
						console.log(sectionLength);
						console.log(summDots);
						break;
				}
				console.log(stepX, stepY, summDots, sectionLength);
				drawMarking(stepX, stepY, summDots, sectionLength);
			}
		}
		//_______Функция отрисовки разметки осей (направление(0-3), кол-во точек, шаг деления оси)
		function drawMarking(stepX, stepY, summDots, sectionLength) {
			var pi = Math.PI;//заносим число пи в переменную для удобства
			for (let i = 0; i <= summDots; i++) {
				ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)		
				ctx.lineWidth = 2;//толщина линии
				ctx.strokeStyle = "black";//цвет линии
				ctx.arc((i * stepX) + shiftX, (i * stepY) + shiftY, 2, 0, 2 * pi, false);//задает параметры контура окружности (центрX, центрY, радиус, начало пути в радианах, Конец пути в радианах, направление)
				ctx.stroke();
				ctx.font = "15px Monospace";// Назначаем размер и шрифт текста Tahoma
				ctx.fillText(`${i}`, (i * stepX) + shiftX + 2, (i * stepY) + shiftY + 13);// Пишем сам текст
			}
		}
		markingAxes();

		//__end__Функция отрисовки разметки осей (направление(0-3), кол-во точек, шаг деления оси)
		//__end__Рисуем разметку деления осей

		//__end__подписями едениц


		//_______рисуем график:
		x = -6;
		function drawSchedule() {
			y = Math.sin(x);
			//y = 2 * x + x * x;// парабола
			//y = 2 / x;
			x = x + 0.01;
			сorrectedX = x * inversionX * stretchX + shiftX;
			сorrectedY = y * inversionY * stretchY + shiftY;
			//console.log(`x =${x} y= ${y}`);
			//console.log(`ОТРИСОВКА x =${сorrectedX} y= ${сorrectedY}`);
			//ctx.fillRect(x * stretchX - 1, (y * (-1) * stretchY + shiftY - 1), 2, 2);
			ctx.fillRect(сorrectedX - 1, сorrectedY - 1, 2, 2);
			ctx.stroke();
			timer = setTimeout(drawSchedule, delay)
		}
		jsCodeArr[5].innerHTML = ``;
		drawSchedule();
		//__end__рисуем график:

	}


//__end__Урок 6.

//_______Урок 7.Спирограф

//console.log(canvasArr[6].getAttribute(`height`));
//console.log(canvasArr[6].getAttribute(`width`));
canvasArr[6].setAttribute(`height`, 600);
canvasArr[6].setAttribute(`width`, 600);
//console.log(canvasArr[6].getAttribute(`height`));
//console.log(canvasArr[6].getAttribute(`width`));

functionArr[6][0] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		ctx.clearRect(0, 0, 600, 600);  //стирает весь canvas (выбран весь canvas)
		jsCodeArr[5].innerHTML = `const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать<br>
		ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)`;
	}
functionArr[6][1] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		//functionArr[6][0]();
		//_______Создаем элемент  управления (цвет)
		exampleExplainArr[6].innerHTML = "";
		exampleExplainArr[6].insertAdjacentHTML(
			'beforeend',
			`<div class="options">
			<span>| Цвет контура: </span><input type="color" id="L7MyColor" name="Выбрать цвет">
			<span>   | Размер кисти: </span><input type="range" id="L7brushSize" min="1" max="30" step="1" value="2"></br>
			<span>| R: </span><input type="range" id="L7R" min="0" max="300" step="5" value="200">
			<span>   | r: </span><input type="range" id="L7r" min="0" max="300" step="5" value="180">
			<span>   | d: </span><input type="range" id="L7d" min="0" max="300" step="5" value="20"></br>
			<span>| Задержка прорисовки: </span><input type="range" id="L7delay" min="1" max="100" step="1" value="1"></br>
			<button class="button" id="L7clear">Очистить поле</button>
			</div>`
		);
		//__end__Создаем элемент  управления (цвет)
		let R = document.getElementById('L7R').value;
		let r = document.getElementById('L7r').value;
		let d = document.getElementById('L7d').value;
		let teta = 0;
		let timer;
		let delay = document.getElementById('L7delay').value;;
		let brushSize = 6;
		let myColor = document.getElementById('L7MyColor').value;
		//_______Получаем переменные из input
		//brushSize = document.getElementById('L7brushSize').value;
		document.getElementById('L7MyColor').onchange = function () {
			myColor = this.value;
		}
		document.getElementById('L7brushSize').onchange = function () {
			brushSize = this.value;
		}
		document.getElementById('L7R').onchange = function () {
			R = this.value;
		}
		document.getElementById('L7r').onchange = function () {
			r = this.value;
		}
		document.getElementById('L7d').onchange = function () {
			d = this.value;
		}
		document.getElementById('L7delay').onchange = function () {
			delay = this.value;
		}
		document.getElementById('L7clear').onclick = function () {
			//	functionArr[6][0]();
			ctx.clearRect(0, 0, 600, 600);  //стирает весь canvas (выбран весь canvas)
		}
		//__end__Получаем переменные из input

		function spiro() {
			let x = (R - r) * Math.cos(teta) + d * Math.cos((R - r) * teta / r);
			let y = (R - r) * Math.sin(teta) + d * Math.sin((R - r) * teta / r);
			console.log(x);
			console.log(y);
			teta = teta + 0.01;
			ctx.fillRect(Math.abs(300 + x), Math.abs(300 + y), brushSize, brushSize);
			ctx.fillStyle = myColor;//выбор цвета заливки
			ctx.fill();  //заливает отрисованную фигуру последним выбраным цветом
			//ctx.stroke();
			timer = setTimeout(spiro, delay);
		}
		spiro();

		jsCodeArr[5].innerHTML = `const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать<br>
		ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)`;
	}
console.log(functionArr[6][1]);
//elem.getAttribute(name)

//__end__Урок 7.

//Урок 8. Игра жизнь.
canvasArr[7].setAttribute(`height`, 700);
canvasArr[7].setAttribute(`width`, 700);

functionArr[7][0] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		ctx.clearRect(0, 0, 600, 600);  //стирает весь canvas (выбран весь canvas)
		jsCodeArr[5].innerHTML = `const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать<br>
		ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)`;
	}

//_______Рисование "новой жизни"
functionArr[7][1] =
	function (canvas) {
		const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
		ctx.clearRect(0, 0, 600, 600);  //стирает весь canvas (выбран весь canvas)
		let mas = [];
		function goLife() {
			let n = 30, m = 30;
			for (let i = 0; i < m; i++) {
				mas[i] = [];
				for (let k = 0; k < n; k++) {
					mas[i][k] = 0;
					console.log(mas[i][k]);
				}
			}
		}

		goLife();
		console.log(mas);
	}

//_______Рисование "новой жизни"

//__end__Урок 8. Игра жизнь.

//Урок 9.
//__end__Урок 9.

//Урок 10.
//__end__Урок 10.

//_______Выбираем пример для показа
document.addEventListener("click", function name(event) {
	//console.log(`Произошло событие "нажатие на вкладку"`);
	//console.log(arrLessonTemaTabs[0][5].length);
	if (event.target.closest('.tab')) {
		//console.log(`запустился цикл изменения активной вкладки. ОМД = ${arrLessonTemaTabs}`);
		for (i = 0; i < arrLessonTemaTabs.length; i++) {
			for (k = 0; k < arrLessonTemaTabs[i][5].length; k++) {
				//console.log(`${event.target} и ${arrLessonTemaTabs[i][5][k]} = ${event.target === arrLessonTemaTabs[i][5][k]}`);
				if (event.target === arrLessonTemaTabs[i][5][k]) {
					arrLessonTemaTabs[i][4] = k;//меняем номер активной вкладки в ОМД
					functionArr[i][k](canvasArr[i]);
					console.log(`В ПРИМЕРЕ ${i} ПЕРЕКЛЮЧИЛИ ВКЛАДКУ НА ${k} "${tabsNameArr[i][k + 1]}"`);
				}
				getActive();
			}
		}

	}
});
		//__end__Выводим выбраный пример

/*
		//=======Итоги уроков (Шпаргалка)
		content.insertAdjacentHTML(
			'beforeend',
			`<h2>Итоги уроков</h2>
		<p>Ниже приведены все изученые команды и комментарий с расшифровкой параметров</p>
		<div class="js_text">
		<p>ctx.arc(координата центра по оси X, координата центра по оси Y, радиус, стартовая точка пути в радианах, конечная точка пути в радианах, направление true/false)</p>
		<p></p>
		<p></p>
		<p></p>
		
		</div>`
		);//==end==Итоги уроков (Шпаргалка)*/