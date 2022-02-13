
//Константы и переменные для всего документа
const content = document.querySelector('.content');//весь контент страницы, сюда будем вставлять элементы(уроки)


//В матрице содержатся данные о параметрах формирования DOM-дерева
//Определяем массивы. Каждому уроку будет соответствовать элемент массива 1уроку - 0элемент, 2 -1 и т.д...

//_______Основной массив данных
//Структура массива arrLessonTemaTabs[0Номер уч-го материала][1Тип уч-го материала][2Тема уч-го материала][3Количество вкладок(примеров)][4Активная вкладка][5[]живая коллекции вкладок(примеров)]
const arrLessonTemaTabs = [
	[1, "Урок", "Рисование прямоугольников", 7, 0],
	[2, "Урок", "Рисуем линии", 6, 0],
	[3, "Урок", "Paint в Canvas", 2, 1],
	[4, "Урок", "Тема урока", 2, 0],
	[5, "Урок", "Тема урока", 2, 0],
	[6, "Урок", "Тема урока", 2, 0],
	[7, "Урок", "Тема урока", 2, 0],
	[8, "Урок", "Тема урока", 2, 0],
	[9, "Урок", "Тема урока", 2, 0],
	[10, "Урок", "Тема урока", 2, 0],
];
//__end__Основной массив данных

//Матрица хранящая названия кнопок в каждом уроке [номер урока][название кнопки1, имя кнопки2] и т.д.
const tabsNameArr = [
	[arrLessonTemaTabs[0][3], "Очистить", "красный прямоугольник", "синий прямогуольник", "очистка облости", "незалитый", "обводка", "заливка"],
	[arrLessonTemaTabs[1][3], "Очистить", "по умолчанию", "цвет", "концы линий", "примыкание линий", "треугольник"],
	[arrLessonTemaTabs[2][3], "Очистить", "Рисование"],
	[arrLessonTemaTabs[3][3], "Очистить", " _ "],
	[arrLessonTemaTabs[4][3], "Очистить", " _ "],
	[arrLessonTemaTabs[5][3], "Очистить", " _ "],
	[arrLessonTemaTabs[6][3], "Очистить", " _ "],
	[arrLessonTemaTabs[7][3], "Очистить", " _ "],
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

console.log(tabsArr);
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

//=======Передаум вкладки в основной массив данных
for (let i = 0; i < arrLessonTemaTabs.length; i++) {
	arrLessonTemaTabs[i][5] = tabsArr[i].querySelectorAll('.tab');
};
//==end==Передаум вкладки в основной массив данных

let functionArr = [[], []];//Здесь будем хранить функции(примеры уроков) (functionArr[номер урока][номер выбраной вкладки])
//Заполняем массив функциями вывода текста какая вкладка выбрана(ВРЕМЕННО)

//=======Заполняем массив функциями
console.log(arrLessonTemaTabs[0][5].length);
functionArr[0][1] = [
	function (canvas) {
		console.log(`В примере ${0} выбрана вкладка ${1} под названием ${tabsNameArr[0][2]}`);
	},
];
console.log(functionArr[0][1]);
functionArr[0][1](canvasArr[0]);
/*for (i = 0; i < arrLessonTemaTabs.length; i++) {
	for (k = 0; k < arrLessonTemaTabs[i][5].length; k++) {
		functionArr[i][k] = [
			function () {
				console.log(`В примере ${i} выбрана вкладка ${k} под названием ${tabsNameArr[i][k + 1]}`);
			}];
	}
}
*/
//=======Заполняем массив функциями
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
		functionArr[0][0](canvasArr[0]);
		ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
		ctx.rect(50, 10, 100, 100);  //указывает где рисовать прозрачный(не залитый) прямоуголльник
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

/*
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
*/

/*
//_______Выводим выбраный пример
switch (arrLessonTemaTabs[0][4]) {
	case 0:
		functionArr[0][0](canvasArr[0]);
		break;
	case 1:
		functionArr[0][1](canvasArr[0]);
		break;
	case 2:
		functionArr[0][2](canvasArr[0]);
		break;
	case 3:
		functionArr[0][3](canvasArr[0]);
		break;
	case 4:
		functionArr[0][0](canvasArr[0]);
		functionArr[0][4](canvasArr[0]);
		break;
	case 5:
		functionArr[0][0](canvasArr[0]);
		functionArr[0][5](canvasArr[0]);
		break;
	case 6:
		functionArr[0][6](canvasArr[0]);
		break;
};
*/
//__end__Выводим выбраный пример

//__end__Выбираем пример для показа
//__end__Урок 1. Основы canvas



//Урок 2.Рисуем линии  
//Константы и переменные для 2 урока
//Для отрисовки линии мы должны указать координаты(куда передвинуть перо), далее указываем конечную координату и команду рисовать. По умолчанию цвет - черный, толщина 1 пиксель.
//Чтобы изменения стиля линий вступали в силу нужно перед каждым таким изменением начинать новый путь (ctx.beginPath();)
//Можно задавать концы линий по умолчанию (ctx.lineCap = 'butt';) () для соединения линий лучше применять закругленые концы линии (ctx.lineCap = 'round';)
function сanvas_2(canvas) {
	const ctx = canvas.getContext('2d');  //получаем в переменную контекст канваса('2d'), с этой переменнной и будем работать
	//ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)
	ctx.moveTo(50, 50);//устанавливаем кисть на координаты (X, Y)
	ctx.lineTo(100, 150);//указываем конечную точку линии (X, Y) (кисть остается в этой точке)
	ctx.stroke();//рисует заданный путь

	ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
	ctx.strokeStyle = "red";
	ctx.moveTo(100, 150);//устанавливаем кисть на координаты (X, Y)
	ctx.lineTo(150, 50);//указывает куда рисовать линию
	ctx.stroke();//рисует заданный путь

	ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
	ctx.strokeStyle = "orange";
	ctx.lineWidth = '5';//устанавливает ширину линии
	ctx.moveTo(150, 50);//устанавливаем кисть на координаты (X, Y)
	ctx.lineTo(200, 150);//указывает куда рисовать линию
	ctx.stroke();//рисует заданный путь

	ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
	ctx.strokeStyle = "blue";
	ctx.lineWidth = '20';//устанавливает ширину линии
	ctx.moveTo(250, 50);//устанавливаем кисть на координаты (X, Y)
	ctx.lineTo(350, 50);//указывает куда рисовать линию
	ctx.stroke();//рисует заданный путь

	ctx.beginPath();//начинает новый путь(сбрасывает стили и положение кисти)
	ctx.strokeStyle = "yellow";
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

	//ctx.clearRect(0, 0, 400, 200);  //стирает весь canvas (выбран весь canvas)

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

	jsCodeArr[0].innerHTML = ``
}
сanvas_2(canvasArr[1]);
//__end__Урок 2.


//Урок 3. Paint в Canvas
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
]
/*
//_______Выводим выбраный пример
switch (arrLessonTemaTabs[2][4]) {
	case 0:
		functionArr[2][0](canvasArr[2]);
		break;
	case 1:
		functionArr[2][1](canvasArr[2]);
		break;
};
	//__end__Выводим выбраный пример
	*/
//__end__Выбираем пример для показа

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

//_______Выбираем пример для показа
document.addEventListener("click", function name(event) {
	//console.log(arrLessonTemaTabs[0][5].length);
	if (event.target.closest('.tab')) {
		for (k = 0; k < arrLessonTemaTabs.length; k++) {
			for (i = 0; i < arrLessonTemaTabs[k][5].length; i++) {
				//console.log(`${event.target} и ${arrLessonTemaTabs[k][5][i]} = ${event.target === arrLessonTemaTabs[k][5][i]}`);
				if (event.target === arrLessonTemaTabs[k][5][i]) {
					arrLessonTemaTabs[k][4] = i;
				}
				//event.target.classList.add('_active');
				//console.log(event);
				//console.log(event.target);
				//console.log(arrLessonTemaTabs);
				getActive();
			}
		}
	}
	//_______Выводим выбраный пример
	for (i = 0; i < arrLessonTemaTabs.length; i++) {
		console.log(` i = ${i}`);
		for (k = 0; k < arrLessonTemaTabs[i][5].length; k++) {
			console.log(` i = ${i},  k = ${k}`);
			console.log(`arrLessonTemaTabs[i][5].length = ${arrLessonTemaTabs[i][5].length}`);
			console.log(functionArr[i][k](canvasArr[i]));
			if (arrLessonTemaTabs[i][4] === k) {
				functionArr[i][k](canvasArr[i]);
				break;
			}
		}
	}
});
	//__end__Выводим выбраный пример