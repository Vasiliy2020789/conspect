(() => {
	const config = {
		dotMinRad: 6,//минимальный радиус частицы
		dotMaxRad: 20,//максимальный радиус частицы
		massFactor: 0.002,//множитель массы для уменьшения скорости
		defColor: `rgba(250, 10, 30, 0.9)`,
	}
	const TWO_PI = 2 * Math.PI;
	//_______Настройка canvas 
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	let w, h, mouse, dots, e;//переменные ширина, высота, состояние ЛКМ, массив с данными всех точек
	//В классе Dot будем хранить параметры частицы
	//_______конструктор объекта "Частица"
	class Dot {
		constructor() {
			this.pos = { x: mouse.x, y: mouse.y }//координаты отрисовки частицы
			this.vel = { x: 0, y: 0 }//скорость частицы
			this.rad = random(config.dotMinRad, config.dotMaxRad);//диаметр частицы
			this.mass = this.rad * config.massFactor;
			this.color = config.defColor;
		}

		draw() {
			this.pos.x += this.vel.x;//прибавляем к координате скорость по x
			this.pos.y += this.vel.y;//прибавляем к координате скорость по y

			createCircle(this.pos.x, this.pos.y, this.rad, true, this.color);//функция отрисовки круга
			createCircle(this.pos.x, this.pos.y, this.rad, false, this.color);//функция отрисовки окружности

		}
	}
	//_______Обновление положения точек(массива dots)
	function updateDots() {
		for (let i = 0; i < dots.length; i++) {
			let acc = { x: 0, y: 0 }

			for (let k = 0; k < dots.length; k++) {
				if (i == k) continue;
				let [a, b] = [dots[i], dots[k]];

				let delta = { x: b.pos.x - a.pos.x, y: b.pos.y - a.pos.y }
				let dist = Math.sqrt(delta.x * delta.x + delta.y * delta.y);
				let force = b.mass;

				acc.x += delta.x * force * config.massFactor;
				acc.y += delta.y * force * config.massFactor;

			}

			dots[i].vel.x = dots[i].vel.x + acc.x * dots[i].mass;
			dots[i].vel.y = dots[i].vel.y + acc.y * dots[i].mass;
		}
	}
	//__end__Обновление положения точек(массива dots)

	function createCircle(x, y, rad, fill, color) {//рисует окружность на основе входных данных
		ctx.fillStyle = ctx.strokeStyle = color;
		ctx.beginPath();
		ctx.arc(x, y, rad, 0, TWO_PI);
		ctx.closePath();
		fill ? ctx.fill() : ctx.stroke();
	}
	//__end__конструктор объекта "Частица"

	function random(min, max) {//возвращает случайное число в заданном промежутке
		return Math.random() * (max - min) + min;
	}

	function init() {
		w = canvas.width = innerWidth;
		h = canvas.height = innerHeight;

		mouse = { x: w / 2, y: h / 2, down: false }
		dots = [];
	}

	function loop() {//перерисовка частиц на странице
		ctx.clearRect(0, 0, w, h);

		if (mouse.down) { dots.push(new Dot()); } //если кнопка мыши нажата добавляет в массив новый элемент класса Dot

		updateDots();
		dots.map(e => e.draw());

		window.requestAnimationFrame(loop);//зацикливаем эту функцию
	}
	init();
	loop();

	function setPos({ layerX, layerY }) {
		[mouse.x, mouse.y] = [layerX, layerY];
		console.log(mouse);
		canvas.innerHTML = `${mouse.x}  ${mouse.y}`;
		console.log(Dot.pos, Dot.vel, Dot.rad, Dot.color);
	}
	function isDown() {
		mouse.down = !mouse.down; //инвертируем состояние ЛКМ
	}

	canvas.addEventListener('mousemove', setPos);
	window.addEventListener('mousedown', isDown);
	window.addEventListener('mouseup', isDown);
	//__end__Настройка canvas
})();

