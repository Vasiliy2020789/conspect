(() => {
	const cnv = document.querySelector('canvas');
	const ctx = cnv.getContext('2d');

	//_______подстройка размера canvas по размеру окна
	let cw, ch, cx, cy;//ширина canvas, высота canvas, середина x, середина y
	function resizeCanvas() {
		cw = cnv.width = innerWidth;
		ch = cnv.height = innerHeight;
		cx = cw / 2;
		cy = ch / 2;
	}
	resizeCanvas();
	window.addEventListener('resize', resizeCanvas);//при событии 'изменение размера' запускаем функцию инициализации размеров canvas
	//__end__подстройка размера canvas по размеру окна
	const config = {
		bgFillColor: ' rgba(50, 50, 50, .03)',
		dirsCount: 6,
		stepsToTurn: 12,
		dotSize: 2,
		dotsCount: 120,
		dotVelocity: 2,
		distance: 70,
	}
	function drawRect(color, x, y, w, h, shadowColor, shadowBlur) {
		ctx.shadowColor = shadowColor || 'black';
		ctx.shadowBlur = shadowBlur || 1;
		ctx.fillStyle = color;
		ctx.fillRect(x, y, w, h);
	}

	//_______Класс частица
	class Dot {
		constructor() {
			this.pos = { x: cx, y: cy };
			this.dir = (Math.random() * 3 | 0) * 2; //задаем направление случайным числом и округляем до целых (dirsCount-ГРАННИКИ)
			//this.dir = Math.random() * 6 | 0; //задаем направление случайным числом и округляем до целых (РОМБИКИ)
			this.step = 0;
		}

		redrawDot() {
			let color = 'red';
			let size = config.dotSize;
			let x = this.pos.x - size / 2;
			let y = this.pos.y - size / 2;

			drawRect(color, x, y, size, size);
		}
		moveDot() {
			this.step++;
			console.log(this.step);
			this.pos.x += dirsList[this.dir].x * config.dotVelocity;
			this.pos.y += dirsList[this.dir].y * config.dotVelocity;
			//console.log(this.pos.x);
			//console.log(this.pos.y);
			//console.log(this.dir);
		}

		changeDir() {
			console.log(`1chengeDir(${this.dir})`);
			if (this.step % config.stepsToTurn === 0) {// %-деление по модулю
				this.dir = Math.random() > .5 ? (this.dir + 1) % config.dirsCount : (this.dir + config.dirsCount - 1) % config.dirsCount;
				//console.log(`2chengeDir(${this.dir})`);
			}
		}

		killDot(id) {//метод удаления точки
			//console.log(` id = ${id}`);
			console.log(` БЫЛО `);
			console.log(dotsList);
			console.log(`this.step = ${this.step}`);
			let percent = Math.exp(this.step / config.distance);
			console.log(`percent = ${percent}`);
			if (percent > 100) {
				//console.log(` id = ${id}`);
				dotsList.splice(id, 1);// начиная с id удаляет 1 элемент в массиве
				console.log(` СТАЛО `);
				console.log(dotsList);
			}
		}
	}
	//__end__Класс частица

	let dirsList = [];
	function createDirs() {
		for (let i = 0; i < 360; i += 360 / config.dirsCount) {
			let x = Math.cos(i * Math.PI / 180);
			let y = Math.sin(i * Math.PI / 180);
			dirsList.push({ x: x, y: y });
		}
	}
	createDirs();
	//_______Создаём множество точек

	let dotsList = [];
	function addDot() {
		if (dotsList.length < config.dotsCount && Math.random() > .8) {
			dotsList.push(new Dot());//создаем новую частицу(новый элемент класса Dot)...
		}
	}
	function refreshDots() {
		dotsList.forEach((i, id) => { //перебор массива
			i.moveDot();
			i.redrawDot();
			i.changeDir();
			i.killDot(id);
		})
	}
	//__emd__Создаём множество точек

	function loop() {
		drawRect(config.bgFillColor, 0, 0, cw, ch);
		addDot();
		refreshDots();
		//dot.redrawDot();//...и вызываем её метод
		//dot.moveDot();//...меняем координаты отрисовки
		//dot.changeDir();//...сверяем направление, если требуется меняем

		requestAnimationFrame(loop)
	}
	loop();

})();