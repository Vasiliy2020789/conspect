/*
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

console.log(windowHeight);
console.log(windowWidth);


const canvas = document.getElementById("c_1");
constctx
console.log(canvas);
//_______Задаем стили css
canvas.setAttribute(`height`, windowHeight);
canvas.setAttribute(`width`, windowWidth);
canvas.setAttribute(`backgroundColor:`, windowWidth);
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
document.insertAdjacentHTML(
	'beforeend',
	`<canvas id="c_1" height="${windowHeight}" width="${windowWidth}"></canvas>`
);
*/


(() => {
	//_______Настройка canvas 
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	let w, h, mouse;//переменные ширина, высота, состояние ЛКМ
	//В классе Dot будем хранить параметры частицы
	class Dot {
		//конструктор объекта "Частица"
		constructor() {
			this.pos = { x: mouse.x, y: mouse.y }//координаты отрисовки частицы
			this.vel = { x: 0, y: 0 }//скорость частицы
			this.rad = random(6, 20);//диаметр частицы
		}
	}

	function random(min, max) {
		return Math.random() * (max - min) + min;
	}

	function init() {
		w = canvas.width = innerWidth;
		h = canvas.height = innerHeight;

		mouse = { x: w / 2, y: h / 2, down: false }
	}
	init();

	function setPos({ layerX, layerY }) {
		[mouse.x, mouse.y] = [layerX, layerY];
	}

	function isDown() {
		mouse.down = !mouse.down; //инвертируем состояние ЛКМ
	}
	canvas.addEventListener('mousemove', setPos);
	//__end__Настройка canvas
})();



//_______Задаем стили css
