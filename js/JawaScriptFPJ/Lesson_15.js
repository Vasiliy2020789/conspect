//20212212 - ТК 0- ТОЛЬКО JS
//js + html + домашка + задачи + проект(в часах)
//0 + 0 + 0 + 0 + 0
console.log("// Пример 1 Обработка событий");


console.log("// Пример 1.2 button.onclick - обработчик нажатия использование DOM-объекта");
const buttonP1_2 = document.querySelector('.button__1_2');//получаем кнопку в константу

buttonP1_2.onclick = function () {//отслеживаем событие нажатия, при нажатии выполняем функцию
	console.log('Клик по кнопке 1.2');
}

console.log("// Пример 1.3 button.onclick - использование DOM-объекта отдельная функция и вызов");
function showConsoleP1_3() {//функция вывода сообщения о нажатии кнопки
	console.log('Клик по кнопке 1.3');
}
const buttonP1_3 = document.querySelector('.button__1_3');//получаем кнопку в переменную
buttonP1_3.onclick = showConsoleP1_3;//отслеживаем событие нажатия, при нажатии выполняем функцию название Ф-ии обязательно без ()!!!

//недостаток выше рассмотренных методов - невозможность повесить несколько обработчиков на одно и тоже событие
//например:
const buttonP1_4 = document.querySelector('.button__1_4');//получаем кнопку в переменную

buttonP1_4.onclick = function () {//отслеживаем событие нажатия, при нажатии выполняем функцию...
	console.log('Клик!');
}
buttonP1_4.onclick = function () {//...видим что последний обработчик перезапишет значение и 1й код не выполнится
	console.log('Клак!');
}
console.log("// Пример 1.5 .addEventListener() - отслеживание событий");
const buttonP1_5 = document.querySelector('.button__1_5');
buttonP1_5.addEventListener("click", function (e) {//при событии "click" выполняем функцию
	console.log('Клик!');
});
buttonP1_5.addEventListener("click", function (e) {//при событии "click" выполняем функцию
	console.log('Клак!');
});

console.log("// Пример 1.6 .addEventListener() с отдельной функцией и вызовом");

const buttonP1_6 = document.querySelector('.button__1_6');

function sowConsoleP1_6() {//исполняемый код вынесен в отдельную функцию
	console.log('Клик по кнопке 1.6');
}
buttonP1_6.addEventListener("click", sowConsoleP1_6);//вешаем обработчик событий на кнопку и по событию клик "click" запускаем функцию sowConsoleP1_6

console.log("// Пример 1.7 .removeEventListener() - отключение отслеживания событий");
const buttonP1_7 = document.querySelector('.button__1_7');

function sowConsoleP1_7() {//исполняемый код вынесен в отдельную функцию
	console.log('Клик по кнопке 1.7');
	buttonP1_7.removeEventListener("click", sowConsoleP1_7);
}
buttonP1_7.addEventListener("click", sowConsoleP1_7);

console.log("// Пример 1.8 .addEventListener() опции");
const options = {
	"capture": true,//фаза на которой должен сработать обработчик
	"once": false,//если true то обработчик будет автоматически удален после выполнения
	"passive": false,//если true то указывает что обработчик никогда не вызовет preventDefault()
}
const buttonP1_8 = document.querySelector('.button__1_8');

function sowConsoleP1_8() {//исполняемый код вынесен в отдельную функцию
	console.log('Клик по кнопке 1.8');
}
buttonP1_8.addEventListener("click", sowConsoleP1_8, options);


console.log("// Пример 2 Объект событие");
//const buttonP3 = document.querySelector('.button__2');
const buttonP2 = document.querySelector('.button__2');
function showConsoleP2(event) {
	console.log('Объект event:');
	console.log(event);
	console.log('Тип события:');
	console.log(event.type);
	console.log('Объект на котором сработал обработчик:');
	console.log(event.target);
	console.log('Объект к которому назначен обработчик:');
	console.log(event.currentTarget);
	console.log('Координаты курсора мыши в момент сработки обработчика');
	console.log(`Положение по X: ${event.clientX}
	Положение по Y: ${event.clientY}`);

}
buttonP2.addEventListener("click", showConsoleP2)//отслеживаем событие клик мыши
buttonP2.addEventListener("mouseenter", showConsoleP2)//отслеживаем событие наведение курсора



console.log("// Пример 3 Всплытие");
const blockP3Level1 = document.querySelector('.lesson__text_P3 .blockP3__level_1');
const blockP3Level2 = document.querySelector('.lesson__text_P3 .blockP3__level_2');
const blockP3Level3 = document.querySelector('.lesson__text_P3 .blockP3__level_3');


blockP3Level1.addEventListener("click", function (event) {
	console.log('Клик на блок');
});

blockP3Level2.addEventListener("click", function (event) {
	console.log('Клик на блок 2 уровня');
});

blockP3Level3.addEventListener("click", function (event) {
	console.log('Клик на блок 3 уровня');
});

console.log("// Пример 3.1 Препятствие всплытию");
const blockLevel1 = document.querySelector('.lesson__text_P3 .block__level_1');
const blockLevel2 = document.querySelector('.lesson__text_P3 .block__level_2');
const blockLevel3 = document.querySelector('.lesson__text_P3 .block__level_3');


blockLevel1.addEventListener("click", function (event) {
	console.log('Клик на блок');
});

blockLevel2.addEventListener("click", function (event) {
	console.log('Клик на блок 2 уровня');
	event.stopPropagation();//останавливает всплытие, срабатывает только обработчик текущего элемента, событие на его родителях не срабатывает

});

blockLevel3.addEventListener("click", function (event) {
	console.log('Клик на блок 3 уровня');
	event.stopPropagation();//останавливает всплытие, срабатывает только обработчик текущего элемента, событие на его родителях не срабатывает
});

console.log("// Пример 3.2 Погружение");
const blockP3_2Level1 = document.querySelector('.lesson__text_P3 .blockP3_2__level_1');
const blockP3_2Level2 = document.querySelector('.lesson__text_P3 .blockP3_2__level_2');
const blockP3_2Level3 = document.querySelector('.lesson__text_P3 .blockP3_2__level_3');


blockP3_2Level1.addEventListener("click", function (event) {
	console.log('Клик на блок');
});

blockP3_2Level2.addEventListener("click", function (event) {
	console.log('Клик на блок 2 уровня');
}, { "capture": true });//при погружении дает приоритет выполнения данному обработчику, если false то сначала сработает обработчик элемента самого нижнего уровня вложенности

blockP3_2Level3.addEventListener("click", function (event) {
	console.log('Клик на блок 3 уровня');
});

console.log("// Пример 3.3");
const buttonP3_3All = document.querySelectorAll('.button__P3_3');

function showConsoleP3_3() {
	console.log('Ура!');
}
buttonP3_3All.forEach(buttonItem => {
	buttonItem.addEventListener("click", showConsoleP3_3);
});

console.log('// Пример 4 Делегирование событий');
const buttonArrP4 = document.querySelector('.buttonArr__P4');//получаем в константу блок который включает все наши кнопки
function showConsole() {//функция вызываемая при возникновении события
	console.log('Ура!');//код исполняемый при нажатии на любую кнопку
}

buttonArrP4.addEventListener("click", function (event) { //вешаем обработчик на весь родительский элемент в котором находятся кнопки
	if (event.target.closest('.button')) {//если событие произошло на элементе кнопка (class="button")...
		showConsole();//...то выполняем этот код вызываем функцию
	}
});
console.log('// Пример 4.1 Пример использования делегирования событий');
const menuBody = document.querySelector('.menu');//получаем в константу меню
document.addEventListener("click", menu); //вешаем обработчик КЛИК на весь документ и запускаем функцию menu при возникновении события

function menu(event) {
	if (event.target.closest('.menu__button')) {//если кликнули на кнопку вызова меню...
		menuBody.classList.toggle('_active');//...то нашему меню (.menu) добавляем или отбираем класс _active
	}
	if (!event.target.closest('.menu')) {
		menuBody.classList.remove('_active');
	}
}

console.log("// Пример 5 Действие браузера по умолчанию и их отмена");
const linkP5 = document.querySelector('.link_P5');//получаем ссылку, для которой отменим переход, в константу

//если используем .addEventListener:
linkP5.addEventListener("click", function (event) {
	console.log('Наши действия .addEventListener');//Код выполнится при клике на элемент..
	event.preventDefault();//отменяет действие браузера по умолчанию
});
//если используем .onclick:
const linkP5OnClick = document.querySelector(".link_P5_onclick");
linkP5OnClick.onclick = function () {
	console.log('Наши действия .onclick');
	return false;//отменяет действие браузера по умолчанию
}

console.log("// Пример 5.1 необязательная опция 'passive'");
const linkP5_1 = document.querySelector('.link_P5_1');

linkP5_1.addEventListener("click", function (event) {
	console.log("Наши действия");
	event.preventDefault();
}, { "passive": true });

console.log("// Пример 6 Основы событий мыши");
const buttonP6 = document.querySelector('.button__P6');
const buttonP6Db = document.querySelector('.button__P6_db');

buttonP6.addEventListener("mousedown", function (event) {
	console.log('//Пример 6 Cобытия мыши');
	console.log(`Нажата кнопка ${event.which}`);
	event.preventDefault();
});
buttonP6.addEventListener("click", function (event) {
	console.log('//Пример 6 Cобытия мыши');
	console.log(`Нажата ЛКМ`);
	event.preventDefault();
});
buttonP6.addEventListener("contextmenu", function (event) {
	console.log('//Пример 6 Cобытия мыши');
	console.log(`Нажата кнопка вызова контекстного меню`);
	event.preventDefault();
});
buttonP6Db.addEventListener("dblclick", function (event) {
	console.log(`Двойной клик по ЛКМ`);
	event.preventDefault();
});

console.log("// Пример 6.1 Движение мыши.");
const blockForMouse = document.querySelector('.block-for-mouse');
const blockForMouseStatus = document.querySelector('.block-for-mouse-status');

blockForMouse.addEventListener("mousemove", function (event) {
	/*	blockForMouse.insertAdjacentHTML(
			'afterbegin',
			`Координаты мыши относительно окна браузера: <br> clientX: ${event.clientX} / clientY: ${event.clientY}<br>`
		);
		*/
	blockForMouse.innerHTML = `Координаты мыши относительно окна браузера: <br> clientX: ${event.clientX} / clientY: ${event.clientY}<br>`;
});
console.log("// Пример 6.2 События mouseover / mouseout");

blockForMouse.addEventListener("mouseover", function (event) {
	blockForMouseStatus.innerHTML = `Курсор над полем <br>`
});
blockForMouse.addEventListener("mouseout", function (event) {
	blockForMouseStatus.innerHTML = `Курсор уходит с поля <br>`
});
console.log("// Пример 6.3 Свойство event.target и event.relatedTarget.");

const blockForMouseStatusP6_3 = document.querySelector('.block-for-mouse-status-P6_3')

blockForMouse.addEventListener("mouseover", function (event) {//при наведении на элемент..
	console.log(`Курсор ушел с объекта:`, event.relatedTarget);//...выводим в консоль элемент с которого курсор ушел и...
	console.log(`Курсор над объектом:`, event.target);//...выводим в консоль элемент на который курсор перешел...
});
blockForMouse.addEventListener("mouseout", function (event) {//...при отведении курсора от элемента...
	console.log(`Курсор ушел с объекта:`, event.target);//...выводим в консоль элемент с которого курсор ушел и...
	console.log(`Курсор над объектом:`, event.relatedTarget);//...выводим в консоль элемент на который курсор перешел...
});
console.log("// Пример 6.4 Дочерние элемента, всплытие");

const blockForMouseP6_4 = document.querySelector('.block-for-mouse_P6_4');
const blockForMouseStatusP6_4 = document.querySelector('.block-for-mouse-status_P6_4');

blockForMouseP6_4.addEventListener("mouseover", function (event) {
	blockForMouseStatusP6_4.innerHTML = `Курсор над полем <br>`
	console.log('Курсор над полем');
});
blockForMouseP6_4.addEventListener("mouseout", function (event) {
	blockForMouseStatusP6_4.innerHTML = `Курсор уходит с поля <br>`
	console.log('Курсор уходит с поля');
});

console.log("// Пример 6.5 События mouseenter / mouseleave");

const blockForMouseP6_5 = document.querySelector('.block-for-mouse_P6_5');
const blockForMouseStatusP6_5 = document.querySelector('.block-for-mouse-status_P6_5');

blockForMouseP6_5.addEventListener("mouseenter", function (event) {
	blockForMouseStatusP6_5.innerHTML = `Курсор над полем <br>`
	console.log('Курсор над полем');
});
blockForMouseP6_5.addEventListener("mouseleave", function (event) {
	blockForMouseStatusP6_5.innerHTML = `Курсор уходит с поля <br>`
	console.log('Курсор уходит с поля');
});


const numberKey = document.querySelector('.number-key');

numberKey.addEventListener("mouseover", function (event) {
	let target = event.target.closest('span');
	if (!target) return;
	target.style.cssText = 'background-color: #FFFF00;';
});
numberKey.addEventListener("mouseout", function (event) {
	let target = event.target.closest('span');
	if (!target) return;
	target.style.cssText = '';
});

const numberKey_2 = document.querySelector('.number-key_2');

numberKey_2.addEventListener("mouseenter", function (event) {
	let target = event.target.closest('span');
	if (!target) return;
	target.style.cssText = 'background-color: #FFFF00;';
});
numberKey_2.addEventListener("mouseleave", function (event) {
	let target = event.target.closest('span');
	if (!target) return;
	target.style.cssText = '';
});

console.log('//Пример 7 События клавиатуры');
const keyCode = document.querySelector('.key-code');
const keyKey = document.querySelector('.key-key');
const keyKeyCode = document.querySelector('.key-keyCode')

document.addEventListener("keydown", function (event) {
	console.log(`Нажата клавиша ${event.code} (${event.key})`);
	keyCode.innerHTML = event.code;
	keyKeyCode.innerHTML = event.keyCode;
	keyKey.innerHTML = event.key;
});

document.addEventListener("keyup", function (event) {
	console.log(`Отпущена клавиша ${event.code} (${event.keyCode})(${event.key})`);
	keyCode.innerHTML = event.code;
	keyKeyCode.innerHTML = event.keyCode;
	keyKey.innerHTML = event.key;
	//console.log(event);
});

console.log('//Пример 7.1 Сочетание клавиш');

document.addEventListener('keydown', function (event) {
	if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
		console.log('Отмена действия');
		console.clear();
	}
});

console.log('//Пример 7.2 атоповтор event.repeat');
document.addEventListener('keydown', function (event) {
	console.log(`Нажата клавиша ${event.code} (${event.keyCode})(${event.key})`);
	console.log(event.repeat);
})

console.log('//Пример 7.3 Счетчик символов');

const txtItem = document.querySelector('.textarea__item');//получаем текстовое поле в переменную
const txtItemLimit = txtItem.getAttribute('maxlength');//получаем в переменную свойство текстового поля (максимальное число символов)
const txtCounter = document.querySelector('.textarea__counter span');//получаем в переменную спан в который будем вносить число оставшихся символов
txtCounter.innerHTML = txtItemLimit;//...выводим в спан свойство текстового поля (максимальное число символов)

txtItem.addEventListener("keyup", txtSetCounter);// вешаем на текстовое поле событие, по отпусканию клавиши запускаем функцию txtSetCounter

txtItem.addEventListener("keydown", function (event) {//функция для коректной работы счетчика во время автоповтора
	if (event.repeat) {//если символ введен повторно в результате автповтора, то...
		txtSetCounter();//...снова вызываем функцию обновления и вывода счетчика оставшихся символов
	}
});

function txtSetCounter() {//функция обновления и вывода счетчика оставшихся символов
	const txtSetCounterResult = txtItemLimit - txtItem.value.length; //вычисляем в константу разность между макс. числом символов и длинной уже написаного текста и...
	txtCounter.innerHTML = txtSetCounterResult;//...выводим результат в span
}

console.log("//Пример 7.4 Закрывание выпадающего меню из примера 4.1 кнопкой Esc");


document.addEventListener('keyup', function (event) {//вешаем на весь документ событие нажатие клавиши > по событию запускаем функцию...
	if (event.code === 'Escape') {//если нажата клавиша Escape то выполняем код в {}...
		menuBody.classList.remove('_active')//...удаляем класс _active у меню
	}
})

console.log('//Пример 8 События при прокрутке (скролле)');

window.addEventListener('scroll', function (event) {
	console.log(`Прокручено ${scrollY}px`);
});
