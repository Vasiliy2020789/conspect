//20211214 - ТК 0- ТОЛЬКО JS
//js + html + домашка + задачи + проект(в часах)
//2 + 0 + 0 + 0 + 0
console.log("// Пример 1 .clientWidth и .clientHeight");
const docElement = document.documentElement;//Получаем в переменную всю страницу
const docElementWidth = docElement.clientWidth;//Получаем в переменную доступную ширину окна
const docElementHeight = docElement.clientHeight;//Получаем в переменную доступную высоту окна

console.log(docElementWidth);
console.log(docElementHeight);
console.log("// Пример 1.1 window.innerWidth и window.innerHeight Ширина и высота вместе с полосами прокрутки");
const windowWidth = window.innerWidth;
const windowHight = window.innerHeight;

console.log(windowWidth);
console.log(windowHight);

console.log("// Пример 2 Получение ширины и высоты всего документа");
let scrollWidth = Math.max(
	document.body.scrollWidth, document.documentElement.scrollWidth,
	document.body.offsetWidth, document.documentElement.offsetWidth,
	document.body.clientWidth, document.documentElement.clientWidth
);

let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);

console.log(`Ширина документа = ${scrollWidth}`);
console.log(`Высота документа = ${scrollHeight}`);

console.log("// Пример 3 window.pageYOffset и window.pageXOffset получение прокрученных пиксилей работает только для чтения");
const windowScrollTop = window.pageYOffset;//получаем кол-во прокрученных пикселей по вертикали
const windowScrollLeft = window.pageXOffset;//получаем кол-во прокрученных пикселей по горизонтали

console.log(`Прокручено пикселей сверху: ${windowScrollTop}`);
console.log(`Прокручено пикселей снизу: ${windowScrollLeft}`);

console.log("// Пример 3 .scrollBy управление прокруткой");
function setScrollBy() {
	window.scrollBy(0, 50);//прокручиваем странице на 50px по вертикали относительно текущего положения
	const windowScrollTopP3 = window.pageYOffset;//получаем количество прокрученных пикселей...
	console.log(windowScrollTopP3);//...и выводим их в консоль
}
console.log("// Пример 3.1 управление прокруткой. .scrollTo(x, y)");
function setScrollTo() {
	window.scrollTo(0, 50);
	const windowScrollTopP3_1 = window.pageYOffset;
	console.log(windowScrollTopP3_1);
}

console.log("// Пример 3.2 управление прокруткой. .scrollTo(x, y) с опцией.");
function setScrollToOptions() {
	window.scrollTo({
		top: 500,//прокрутка сверху 500px...
		left: 0,//...прокрутка слева 0px
		behavior: "smooth"//тип прокрутки: auto(по умолчанию), smooth(плавная), instant
	});
}
// Опции не работают в Safari
console.log("// Пример 3.3 управление прокруткой. elem.scrollIntoView(top) ");
function setScrollIntoViev(top) {
	const lessonSelected = document.querySelector('.lesson__text_P3')
	lessonSelected.scrollIntoView(top);
}
console.log("// Пример 3.4 управление прокруткой. elem.scrollIntoView(top) с опциями (НЕ РАБОТАЕТ В Safari) ");
function setScrollIntoVievOptions(top) {
	const lessonSelected = document.querySelector('.lesson__text_P3')
	lessonSelected.scrollIntoView({
		block: "center",//"start", "center"(по умолчанию), "end", "nearst"
		inline: "end",//"start", "center", "end", "nearst"(по умолчанию)
		behavior: "smooth"//"auto"(по умолчанию), "smoth"
	});
}
console.log("// Пример 3.5 управление прокруткой. Запрет прокрутки.");
function setEnableDisableScroll() {
	//ocument.body.overflow = "hidden";
	document.body.classList.toggle('scroll-lock');
}




console.log("// Пример 4 Метрики элементов на странице. Прокрутка отдельных элементов на странице");

const block = document.querySelector('.lesson__text_P4 .lesson__block');//получаем элемент

console.log("// Пример 4.1 block.offsetLeft и block.offsetTop - положение объекта слева и сверху ");
const blockOffsetParent = block.offsetParent;//получаем родительский элемент, относительно которого позиционирован наш объект
console.log(blockOffsetParent);//...выведем его в консоль
console.log(block);
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;
console.log(`Позиция блока lesson__block относительно body:
Сверху : ${elementOffsetTop};
Слева : ${elementOffsetLeft}`);

console.log("// Пример 4.2 block.offsetWidth и block.offsetHeight - горизонтальный и вертикальный размер объекта");
//Получаем размеры объекта
const elementOffsetWidth = block.offsetWidth;//...по горизонтали
const elementOffsetHeight = block.offsetHeight;//...по вертикали

console.log(`Внешний размер блока lesson__block 
Высота : ${elementOffsetHeight};
Ширина : ${elementOffsetWidth}`);

console.log("// Пример 4.3 block.clientLeft и block.clientTop - отступы внутренней части от внешней слева сверху");

const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;
console.log(`Отступы внутренней части от внешней (border+полоса прокрутки(если она слева))
Слева: ${elementClientLeft};
Сверху: ${elementClientTop};`);

console.log("// Пример 4.4 block.clientWeidth и block.clienthight - внутренние горизонтальный и вертикальный размер объекта");

const elementClientWidth = block.clientWidth;//300-20-20
const elementClientHeight = block.clientHeight;//500-20-20-17
console.log(`Внутренний размер блока lesson__block 
Высота : ${elementClientHeight};
Ширина : ${elementClientWidth}`);

console.log("// Пример 4.5 block.scrollWeidth и block.scrollHight - внутренние горизонтальный и вертикальный размер объекта с учетом невидимой(прокрученной части)");

const elementScrollWidth = block.scrollWidth;//300-20-20
const elementScrollHeight = block.scrollHeight;//500-20-20-17
console.log(`Внутренний размер блока lesson__block с учетом невидимой(прокрученной части)
Высота : ${elementScrollHeight};
Ширина : ${elementScrollWidth}`);

console.log("// Пример 4.5 block.scrollTop и block.scrollLeft - размер прокрученной облости");
block.scrollTop = 150;//прокручивает элемент на заданное число пикселей. т. е. свойство можно изменять!
const elementScrollLeft = block.scrollLeft;//получаем размер прокрученной облости слева
const elementScrollTop = block.scrollTop;//получаем размер прокрученной облости сверху
console.log(`Размер прокрученной облости)
Слева: ${elementScrollLeft};
Сверху: ${elementScrollTop};`);

console.log("// Пример 4.6 ");
function setElementScrollBy() {
	block.scrollBy({
		top: 20,
		left: 0,
		behavior: 'smooth'
	})
}

console.log("// Пример 5 Координаты");
console.log("// Пример 5.1 Координаты относительно окна браузера");

const item = document.querySelector('.lesson__item');//получаем объект
const getItemCords = item.getBoundingClientRect();//получаем координаты относительно окна браузера
console.log(getItemCords);
console.log("// Пример 5.1 item.getBoundingClientRect().left и item.getBoundingClientRect().top - получаем координату X и Y");
const getItemCordsLeft = item.getBoundingClientRect().left;
console.log(getItemCordsLeft);

const getItemCordsTop = item.getBoundingClientRect().top;
console.log("// Пример 5.2 item.getBoundingClientRect().top + window.pageYOffset - получаем координату Y относительно документа");
const getItemCordsTopDocument = item.getBoundingClientRect().top + window.pageYOffset;//получаем координату Y относительно всего документа

console.log(getItemCordsTopDocument);

console.log("// Пример 5.3 - получаем объект по координатам");
const elemP5_3 = document.elementFromPoint(400, 200);//получаем объект находящийсяя в заданных координатах(X, Y)
console.log(elemP5_3);

















