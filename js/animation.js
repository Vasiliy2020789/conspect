(() => {
	const config = {
		dotMinRad: 1,//минимальный радиус частицы
		dotMaxRad: 20,//максимальный радиус частицы
		massFactor: 0.002,//множитель массы для уменьшения скорости
		defColor: `rgba(250, 10, 30, 0.9)`,//цвет частиц
		smooth: 0.95,//сила трения 1 - трения нет
		sphereRad: 300, //радиус сферы отталкивания если 0 то соберуться в точку
		bigDotRad: 35, //диаметр частицы-курсора
		mouseSize: 120,
	}
	const TWO_PI = 2 * Math.PI;
	//_______Настройка canvas 
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	let w, h, mouse, dots, e;//переменные ширина, высота, состояние ЛКМ, массив с данными всех точек
	//В классе Dot будем хранить параметры частицы
	//_______конструктор объекта "Частица"
	class Dot {
		constructor(r) {
			this.pos = { x: mouse.x, y: mouse.y }//координаты отрисовки частицы
			this.vel = { x: 0, y: 0 }//скорость частицы
			this.rad = r || random(config.dotMinRad, config.dotMaxRad); //диаметр частицы r - диаметр курсора(если значение пустое то диаметр случайный)
			this.mass = this.rad * config.massFactor;//масса зависит от размера, множитель для уменьшения скорости
			this.color = config.defColor;//цвет всегда задаётся конфигурацией
			//this.color = `rgba(${Math.round(random(0, 255))}, ${Math.round(random(0, 255))}, ${Math.round(random(0, 255))}, 0.9)`;//цвета каждой частицы случайны
			//console.log(this.color);
		}

		draw(x, y) {
			this.pos.x = x || this.pos.x + this.vel.x;//если координата x получена то используем её, если нет то прибавляем к координате скорость по x
			this.pos.y = y || this.pos.y + this.vel.y;//если координата y получена то используем её, если нет то прибавляем к координате скорость по y

			createCircle(this.pos.x, this.pos.y, this.rad, true, this.color);//функция отрисовки круга
			createCircle(this.pos.x, this.pos.y, this.rad, false, this.color);//функция отрисовки окружности

		}
	}
	//_______Обновление положения точек(массива dots)
	function updateDots() {
		for (let i = 1; i < dots.length; i++) {
			let acc = { x: 0, y: 0 }

			for (let k = 0; k < dots.length; k++) {
				if (i == k) continue;
				let [a, b] = [dots[i], dots[k]];

				let delta = { x: b.pos.x - a.pos.x, y: b.pos.y - a.pos.y }
				let dist = Math.sqrt(delta.x * delta.x + delta.y * delta.y) || 1;//если частицы создавать не двигая курсор то dist = 0, в этом случае dist = 1
				let force = (dist - config.sphereRad) / dist * b.mass;

				if (k == 0) {
					let alpha = config.mouseSize / dist;//прозрачность частиц чем дальше - тем прозрачнее
					//a.color = `rgba(${Math.round(random(0, 255))}, ${Math.round(random(0, 255))}, ${Math.round(random(0, 255))}, ${alpha})`
					a.color = `rgba(250, 10, 30, ${alpha})`
					dist < config.mouseSize ? force = (dist - config.mouseSize) * b.mass : force = a.mass;
				}
				acc.x += delta.x * force;
				acc.y += delta.y * force;

			}

			dots[i].vel.x = dots[i].vel.x * config.smooth + acc.x * dots[i].mass;
			dots[i].vel.y = dots[i].vel.y * config.smooth + acc.y * dots[i].mass;
		}
		dots.map(e => e == dots[0] ? e.draw(mouse.x, mouse.y) : e.draw());

	}
	//__end__Обновление положения точек(массива dots)

	function createCircle(x, y, rad, fill, color) {//рисует окружность на основе входных данных
		//console.log(color);
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

		dots.push(new Dot(config.bigDotRad));
	}

	function loop() {//перерисовка частиц на странице
		ctx.clearRect(0, 0, w, h);

		if (mouse.down) { dots.push(new Dot()); } //если кнопка мыши нажата добавляет в массив новый элемент класса Dot

		updateDots();

		window.requestAnimationFrame(loop);//зацикливаем эту функцию
	}
	init();
	loop();

	function setPos({ layerX, layerY }) {
		//	canvas.addEventListener('pointermove',);
		[mouse.x, mouse.y] = [layerX, layerY];


		//[mouse.x, mouse.y] = [layerX, layerY];
		//console.log(mouse);
		//canvas.innerHTML = `${mouse.x}  ${mouse.y}`;
		//console.log(Dot.pos, Dot.vel, Dot.rad, Dot.color);
	}


	function isDown() {
		mouse.down = !mouse.down; //инвертируем состояние ЛКМ
	}

	//canvas.addEventListener('mousemove', setPos);
	//window.addEventListener('mousedown', isDown);
	//window.addEventListener('mouseup', isDown);

	canvas.addEventListener('pointermove', setPos);
	window.addEventListener('pointerdown', isDown);
	window.addEventListener('pointerup', isDown);



	//__end__Настройка canvas
})();

