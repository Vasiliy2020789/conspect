//определение констант
//определение переменных
//основной игровой цикл
//функция хода
//смена хода методом смены переменной класса
//функция проверки на победу
//функция начала новой игры
const playngFieldTable = document.querySelector('.playing_field__table');//заносим в переменную таблицу игрового поля
const buttonNewGame = document.querySelector('.new_game');//получаем кнопку в переменную
const currentMoveValue = document.querySelector('.current__move-value');//здесь будет отражаться иконка текущего хода
const fieldLiveCollection = document.getElementsByTagName('td');
const ScoreValueX = document.querySelector('.score__value__x');
const ScoreValueO = document.querySelector('.score__value__o');
//const tableAndTr = document.getElementsByTagName('table');
//определение переменных
let curentMove = "x";
let victoryX = 0;
let victoryO = 0;
//основной игровой цикл
playngFieldTable.addEventListener("click", classSet)//отслеживаем событие клик мыши на игровом поле и запускает функцию установки знака
//playngFieldTable.addEventListener("mouseenter", classSet)//отслеживаем событие наведение курсора

//функция хода
function classSet(event, item) {//выполняется в момент нажатия на свободную клетку
	//код проверки на свободную клетку
	//console.log(event.target);
	if (event.target.matches('[class$="x"]')) {//проверка на наличие селектора класса lesson__item-list_red
		console.log(`${event.target} клетка занята крестиком`);// если истина то выводит в консоль красный
		return
	} else if (event.target.matches('[class$="o"]')) {//проверка на наличие селектора класса lesson__item-list_blue
		console.log(`${event.target} клетка занята ноликом`);//...если истина то выводит в консоль: синий
		return
	} else if (event.target.matches('tr') || event.target.matches('tbody')) {
		console.log(`${event.target} кликнутый элемент не является клеткой`);//...если истина то выводит в консоль: синий
		return
	}
	//...если элемент по которому кликнули клетка и она свободна то продолжаем выполнение кода функции
	console.log(event.target);//вывод в консоль элемента на который кликнули
	event.target.classList.add(curentMove);//присвоение класса элементу на который кликнули
	currentMoveValue.classList.remove(curentMove);//удаление иконки текущего хода
	//смена хода методом смены переменной класса
	if (curentMove === 'x') {
		curentMove = 'o';
	} else if (curentMove === 'o') {
		curentMove = 'x';
	}
	currentMoveValue.classList.add(curentMove);//установка иконки хода соперника
	//console.log(fieldLiveCollection);
	victory(event);//вызов функции проверки на победу
}
//функция проверки на победу
function victory(event) {
	console.log('проверка на победу');
	if (((fieldLiveCollection[0].matches('[class$="x"]')) && (fieldLiveCollection[1].matches('[class$="x"]')) && (fieldLiveCollection[2].matches('[class$="x"]'))) ||
		((fieldLiveCollection[3].matches('[class$="x"]')) && (fieldLiveCollection[4].matches('[class$="x"]')) && (fieldLiveCollection[5].matches('[class$="x"]'))) ||
		((fieldLiveCollection[6].matches('[class$="x"]')) && (fieldLiveCollection[7].matches('[class$="x"]')) && (fieldLiveCollection[8].matches('[class$="x"]'))) ||
		((fieldLiveCollection[0].matches('[class$="x"]')) && (fieldLiveCollection[3].matches('[class$="x"]')) && (fieldLiveCollection[6].matches('[class$="x"]'))) ||
		((fieldLiveCollection[1].matches('[class$="x"]')) && (fieldLiveCollection[4].matches('[class$="x"]')) && (fieldLiveCollection[7].matches('[class$="x"]'))) ||
		((fieldLiveCollection[2].matches('[class$="x"]')) && (fieldLiveCollection[5].matches('[class$="x"]')) && (fieldLiveCollection[8].matches('[class$="x"]'))) ||
		((fieldLiveCollection[0].matches('[class$="x"]')) && (fieldLiveCollection[4].matches('[class$="x"]')) && (fieldLiveCollection[8].matches('[class$="x"]'))) ||
		((fieldLiveCollection[2].matches('[class$="x"]')) && (fieldLiveCollection[4].matches('[class$="x"]')) && (fieldLiveCollection[6].matches('[class$="x"]')))) {
		console.log('Победили крестики');
		victoryX++;
		console.log(ScoreValueX);
		ScoreValueX.innerHTML = `${victoryX}`;
		/*ScoreValueX.insertAdjacentHTML(
			'afterbegin',
			`${victoryX}`
		);*/
		console.log(`Побед крестиков ${victoryX}`);
		console.log(`Побед ноликов: ${victoryO}`);
		newGame();
		return
	} else if (((fieldLiveCollection[0].matches('[class$="o"]')) && (fieldLiveCollection[1].matches('[class$="o"]')) && (fieldLiveCollection[2].matches('[class$="o"]'))) ||
		((fieldLiveCollection[3].matches('[class$="o"]')) && (fieldLiveCollection[4].matches('[class$="o"]')) && (fieldLiveCollection[5].matches('[class$="o"]'))) ||
		((fieldLiveCollection[6].matches('[class$="o"]')) && (fieldLiveCollection[7].matches('[class$="o"]')) && (fieldLiveCollection[8].matches('[class$="o"]'))) ||
		((fieldLiveCollection[0].matches('[class$="o"]')) && (fieldLiveCollection[3].matches('[class$="o"]')) && (fieldLiveCollection[6].matches('[class$="o"]'))) ||
		((fieldLiveCollection[1].matches('[class$="o"]')) && (fieldLiveCollection[4].matches('[class$="o"]')) && (fieldLiveCollection[7].matches('[class$="o"]'))) ||
		((fieldLiveCollection[2].matches('[class$="o"]')) && (fieldLiveCollection[5].matches('[class$="o"]')) && (fieldLiveCollection[8].matches('[class$="o"]'))) ||
		((fieldLiveCollection[0].matches('[class$="o"]')) && (fieldLiveCollection[4].matches('[class$="o"]')) && (fieldLiveCollection[8].matches('[class$="o"]'))) ||
		((fieldLiveCollection[2].matches('[class$="o"]')) && (fieldLiveCollection[4].matches('[class$="o"]')) && (fieldLiveCollection[6].matches('[class$="o"]')))) {
		console.log('Победили НОЛИКИ');
		victoryO++;
		ScoreValueO.innerHTML = `${victoryO}`;
		/*ScoreValueO.insertAdjacentHTML(
			'afterbegin',
			`<div class="score__value__o">${victoryO}</div>`
		);*/
		console.log(`Побед крестиков ${victoryX}`);
		console.log(`Побед ноликов: ${victoryO}`);
		newGame();
		return
	} else if ((fieldLiveCollection[0].matches('[class$="x"]') || fieldLiveCollection[0].matches('[class$="o"]')) &&
		(fieldLiveCollection[1].matches('[class$="x"]') || fieldLiveCollection[1].matches('[class$="o"]')) &&
		(fieldLiveCollection[2].matches('[class$="x"]') || fieldLiveCollection[2].matches('[class$="o"]')) &&
		(fieldLiveCollection[3].matches('[class$="x"]') || fieldLiveCollection[3].matches('[class$="o"]')) &&
		(fieldLiveCollection[4].matches('[class$="x"]') || fieldLiveCollection[4].matches('[class$="o"]')) &&
		(fieldLiveCollection[5].matches('[class$="x"]') || fieldLiveCollection[5].matches('[class$="o"]')) &&
		(fieldLiveCollection[6].matches('[class$="x"]') || fieldLiveCollection[6].matches('[class$="o"]')) &&
		(fieldLiveCollection[7].matches('[class$="x"]') || fieldLiveCollection[7].matches('[class$="o"]')) &&
		(fieldLiveCollection[8].matches('[class$="x"]') || fieldLiveCollection[8].matches('[class$="o"]'))) {
		console.log('Ничья!');
		newGame();
		return
	} else {
		console.log('Пока никто не выйграл');
	}
}
//функция начала новой игры
function newGame() {//функция вывода сообщения о нажатии кнопки
	console.log('Очистка поля и начало новой игры');
	const cellDiv = document.querySelectorAll('tr>td');//выводит дочерние li внутри .lesson__list
	//console.log(cellDiv);
	for (const item of cellDiv) {//перебирает все записи в коллекции...
		item.classList.remove('x');//удаляет класс x
		item.classList.remove('o');//удаляет класс o
	}
}
function clearScore() {
	victoryX = 0;
	victoryO = 0;
	ScoreValueO.innerHTML = `${victoryO}`;
	ScoreValueX.innerHTML = `${victoryX}`;
}
//buttonNewGame.onclick = newGame;
buttonNewGame.addEventListener("click", newGame);
buttonNewGame.addEventListener("click", clearScore);
