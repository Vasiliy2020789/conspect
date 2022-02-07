//20211116-22:30- ТК 0-3:00 ТОЛЬКО JS
//Тип данных - объекты - содержит коллекцию значений
console.log('//Пример 1 создание объекта');
let userInfo1 = new Object();// синтаксис "конструктор объекта"
let userInfo2 = {// синтаксис "литерал объекта" исп-я чаще
	name: "Вася",//свойство объекта название: значение
	age: 30,// последняя (висячая) запятая 
};

console.log('//Пример 2 Выводим весь объект');
console.log(userInfo2);

console.log('//Пример 3 Выводим свойство объекта');
console.log(userInfo2.name);//выводим значение name объекта userInfo2
console.log(`Возраст: ${userInfo2.age}`);

console.log('//Пример 4 имена свойств');
let userInfoP4 = {
	name: "Лена",
	age: 32,
	"likes javascript": true,
};
console.log(userInfoP4);
console.log(userInfoP4.name);
console.log(userInfoP4["likes javascript"]);
console.log(userInfoP4['name']);

console.log('//Пример 5 Вычисляем передаём имя свойства');
let firstPart = "likes"
let yar = "Год рождения"
let userInfoP5 = {
	name: 'Полина',
	age: 2,
	[yar]: 2019,//принимаем значение имени из переменной
	[firstPart + " javascript"]: true, //Вычисляем значение имени склеиванием строк
	//"likesd javascript": true,
};
console.log(userInfoP5);
console.log(userInfoP5["likes javascript"]);
console.log(userInfoP5["Год рождения"]);
let key = "name"
console.log(userInfoP5.name);
console.log(userInfoP5[key]);
console.log('//Пример 6 В именах свойств объектов можно использовать зарезервированые имена');
let userInfoP6 = {
	for: 'Полина',
	let: 2,
	0: 2019
};
console.log(userInfoP6.for);
console.log(userInfoP6.let);
console.log(userInfoP6[0]);
console.log(userInfoP6['0']);

console.log('//Пример 7 Символ');
let id = Symbol("id")
let userInfoP7 = {
	name: "Вася",
	age: 30,
	[id]: "Некое значение",
};
console.log(userInfoP7);

console.log('//Пример 8 Вложенность объектов');
let userInfoP8 = {
	name: "Вася",
	age: 30,
	address: {//объект внутри другого объекта
		sity: "Красноярск",
		street: "Менжинского"
	}
};
console.log(userInfoP8);//видны только свойства первого обьекта
console.log(userInfoP8.address);//возвращает свойства вложенного объекта
console.log(userInfoP8.address.siti);//возвращает свойство вложенного объекта

console.log('//Пример 9 Получение значения свойств объекта');
function makeUserInfo(name, age) {//получаем значения...
	return {
		name: name,//...присваиваем полученные значение
		age: age,
	};
}
let user = makeUserInfo("Вася", 30);
console.log(user);

console.log('//Пример 10 Добавление свойств объекту');
let userInfoP10 = {
	name: "Вася",
};
console.log(userInfoP10);
userInfoP10.age = 30;//добавляем свойство и присваиваем ему значение
console.log(userInfoP10);
userInfoP10["likes javascript"] = true;
console.log(userInfoP10);
userInfoP10.address = {
	siti: "Красноярск",
	street: "Менжинского",
};
console.log(userInfoP10);

console.log('//Пример 11 Удаление из объекта');
console.log("До удаления:");
console.log(userInfoP10);
delete userInfoP10.age;
console.log("После удаления age:");
console.log(userInfoP10);
delete userInfoP10["likes javascript"];
console.log(userInfoP10);

console.log('//Пример 12 Изменение свойства');
userInfoP10.age = 30;//добавляем свойство
console.log(userInfoP10);
userInfoP10.age = 18;//изменяем значение свойства
console.log(userInfoP10);

console.log('//Пример 13 Копирование объекта в переменную');
let userP13 = userInfoP10;//присвоим второй переменной значение объекта...
console.log(userP13);
console.log(userInfoP10);
console.log(userP13.address);
userP13.age = 25;//...при изменении свойства во втором объекте, меняется и первый объект
console.log(userP13);
console.log(userInfoP10);

console.log('//Пример 14 Дублирование объекта');
let object1 = {
	name: "Полина",
	age: 2,
}
let object2 = Object.assign({}, object1);//создаем второй объект - копия первого...
//...выводим оба объекта они идентичны
console.log(object1);
console.log(object2);
console.log(` меняем свойство object2`);
object2.age = 5;//...меняя свойство второго объекта...
console.log(object1);//...при этом первый остаётся прежним
console.log(object2);

console.log('//Пример 15 Добавление свойств с помощью Object.assign');
Object.assign(object1, { ['likes java']: true, sity: 'Красноярск' });
console.log(object1);

console.log('//Пример 16 Проверка наличия свойства');
console.log(object1.street);//пробуем вывести свойство которого нет - undefined
if (object1.street) {//проверяем существует ли значение
	console.log(object1.street);//...выводим если существует
}
if (object1.age) {//проверяем существует ли значение
	console.log(object1.age);//...выводим если существует
}
console.log('//Пример 17 Проверка наличия свойства во вложенном объекте');
console.log(userInfoP8);
console.log(userInfoP8.address.house);//если вложеный объект есть но нет свойства то вернет undefined
//но если вложенного объекта с таким названием нет то выдаст ошибку:
//console.log(userInfoP8?.ADDRESS?.house);
console.log(userInfoP8?.ADDRESS?.house);// чтобы избежать ошибки добавим "?", тогда получим undefined



console.log('//Пример 18 Проверка наличия свойства с помощью оператора "in"');
if ('name' in userInfoP8) {//проверяем есть ли свойство с именем name...
	console.log(userInfoP8.name);//если истина то выводем в консоль
}
if ('ADDress' in userInfoP8) {//проверяем есть ли объект с именем ADDress...
	console.log(userInfoP8.ADDress);
}
if ('address' in userInfoP8) {
	console.log(userInfoP8.address);
}
if ('sity' in userInfoP8.address) {//также можно прверить свойства во вложенных объектах
	console.log(userInfoP8.address.sity);//выводим если истина
}

console.log('//Пример 19 Отлтчие проверок с помощью "if" и "in"');
objectP19 = {
	name: 'Лена',
	age: undefined,
}
console.log(objectP19);
if ('age' in objectP19) {//если свойство с таким именем есть...
	console.log(objectP19.age);//...то выводим его значение в консоль...
}
if (objectP19.age) {//если свойство не равно undefined...
	console.log(objectP19.age);//...то выводим его значение в консоль...
}

console.log('//Пример 20 Цикл "for in" для перебот=ра всех свойств объекта ');
let userInfoP20 = {//объе
	name: "Вася",
	age: 30,
	address: {
		sity: " Красноярск",
		street: "Менжинского",
		house: "10а"
	}
}
for (let key in userInfoP20) {//цикл перебора свойств объекта
	console.log(key);//выводим имя свойства
	console.log(userInfoP20[key]);//выводим значение свойства
}
for (let key in userInfoP20.address) {//цикл перебора свойств вложенного объекта
	console.log(key);//выводим имя свойства
	console.log(userInfoP20.address[key]);//выводим значение свойства
}
console.log('//Пример 21 методы объекта');
Object.assign(userInfoP20, {//добавляем объекту новое свойство - функцию
	showInfo: function () {
		console.log(`${userInfoP20.name}, ${userInfoP20.age} лет. Адрес: г. ${userInfoP20.address.sity}, ул.${userInfoP20.address.street}, д.${userInfoP20.address.house}.`);
	}
});

userInfoP20.showInfo();

console.log('//Пример 21 Использование this в методах объекта');
Object.assign(userInfoP20, {//добавляем объекту новое свойство - еще одну функцию
	showInfoThis: function () {
		console.log(`${this.name}, ${this.age} лет. Адрес: г. ${this.address.sity}, ул.${this.address.street}, д.${this.address.house}.`);
	}
});
console.log('showInfoThis():');
userInfoP20.showInfoThis();

console.log('//Пример 22 Функция - конструктор объектов');
function UserInfoP22(name) {
	// this = {};создается пустой объект - неявно
	this.name = name;
	this.age = 30;
	//return this; Возвращается объект - неявно
}
console.log(new UserInfoP22("Вася"));
console.log(new UserInfoP22("Лена"));
let userInfoPolya = new UserInfoP22("Поля");
console.log(userInfoPolya);