//20211121-21:00-23:00 ТК 0-12:00 ТОЛЬКО JS
//js + html + домашка + задачи + проект(в часах)
//2,5+
console.log("//Пример 1 Число и десятичное число");
let x = 458;
console.log(x);

let y = 4.58;//десятичные числа строго через точку
console.log(y);

console.log("//Пример 2");
let xBig = 1000000;//Милион можно записать так...
let xBigE = 1e6;//...а можно так т.е. 1*10^6
console.log(xBig);
console.log(xBigE);//при выводе числа одинаковые 
let yLitt = 0.000001;//одну милионную можно записать так...
let yLittE = 1e-6;//...а можно так
console.log(yLitt);
console.log(yLittE);//при выводе числа одинаковые 


console.log("//Пример 3 Шестнадцатеричные, восьмеричные и двоичные числа");
console.log(0xFF);// регистр не важен =0xff =255
console.log(0b11111111);//255
console.log(0o377);//255


console.log("//Пример 4 Метод toString(base)");
let num = 255;
console.log(num.toString(16));//переведет в шестнадцатеричную систему исчисления
console.log(num.toString(8));//переведет в восьмеричную систему исчисления
console.log(num.toString(2));//переведет в двоичнуй систему исчисления
console.log(num.toString());//переведет в двоичнуй систему исчисления

console.log("//Пример 5 Округление чисел до целых Math.floor(число) Math.ceil(число)");
x = 5.8449;
y = 2.2;
z = -2.2;

console.log(`Возьмем числа ${x}, ${y}, ${z}, и округлим их.`);
//Округление в меньшую сторону
let xP5 = Math.floor(x);
let yP5 = Math.floor(y);
let zP5 = Math.floor(z);
console.log(xP5, yP5, zP5);
//Округление в большую сторону
let xxP5 = Math.ceil(x);
let yyP5 = Math.ceil(y);
let zzP5 = Math.ceil(z);
console.log(xxP5, yyP5, zzP5);
//Округление до ближайщего целого
let xxxP5 = Math.round(x);
let yyyP5 = Math.round(y);
let zzzP5 = Math.round(z);
console.log(xxxP5, yyyP5, zzzP5);

console.log("//Пример 6 Округление до десятых и сотых");
//до десятых
let x10 = Math.round(x * 10) / 10;
console.log(x10);
//до сотых
let x100 = Math.round(x * 100) / 100;
console.log(x100);
//до тысячных
let x1000 = Math.round(x * 1000) / 1000;
console.log(x1000);
let xToFixed = x.toFixed(1);//округляет до десятых - выдаёт строку
console.log(xToFixed);
console.log(+xToFixed);
console.log(Number(xToFixed));
console.log(+(x.toFixed(3)));

console.log("//Пример 7 Проблема неточных вычислений");

let num1P7 = 1.005;
mum1P7To100 = Math.round(num1P7 * 100) / 100;//Хотим получить 1.01..
console.log(num1P7 * 100);
console.log(mum1P7To100);//...а получаем 1

console.log(`//Исправляется прибавлением Number.EPSILON`);
num1P7 = num1P7 + Number.EPSILON;
mum1P7To100 = Math.round(num1P7 * 100) / 100;//Хотим получить 1.01..
console.log(num1P7 * 100);
console.log(mum1P7To100);//...1.01, теперь работает


let num2P7 = 12.35;
console.log(num2P7.toFixed(1));//Хотим получить 12.4 а получаем 12.3

let problem = 0.1 + 0.2 === 0.3;//Ожидаем true 
console.log(problem);// Получаем false
console.log(0.1 + 0.2);


console.log("//Пример 8 Проверка на infinity и NaN. isFinite isNaN  ");
console.log(Number(25 + "Привет"));//возвращает NaN 
console.log(isNaN(25 + "Привет"));//возвращает true если NaN 
//Интересная особенность:
console.log(NaN === NaN);//NaN не равен самому себе!...
console.log(NaN !== NaN);//...это true
console.log('//isFinite');
console.log(isFinite('25'));
console.log(isFinite('25 '));// пробелы не считаются строкой!
console.log(isFinite('Привет'));
console.log(isFinite(10 / 0));

//20211121 5:00-5:30 12:00-15:00только JS
console.log("//Пример 9 parseInt и parseFloat");

let value1 = +"150";
console.log(value1);
console.log(typeof (value1));

let value2 = +"150px";
console.log(value2);
console.log(typeof value2);

value2 = "150.58px";
let value2Int = parseInt(value2);//возвращает целое число до символов
let value2Float = parseFloat(value2);//возвращает число с "," до символов
console.log(value2Int);
console.log(value2Float);
console.log('//Если первый символ не число:');
console.log(parseFloat("a150.56px"));
console.log(typeof (parseFloat("a150.56px")));
console.log('//Чтение 16ричных чисел из строк');
console.log(parseInt('ff kio', 16));//считает числами только 0123456789abcdef
console.log(parseInt('1111111123654', 2));//считает числами только 0 и 1


console.log("//Пример 10 Объект Math - математические функции и константы");
console.log(Math.random());//Генератор случайного числа от 0 до 1
console.log(Math.random());
console.log(Math.random());
console.log(Math.max(5, 85, -49, 33, 199));//максимальное число из списка
console.log(Math.min(5, 85, -49, 33, 199));//минимальное число из списка
console.log(Math.abs(-58));//модуль числа
console.log(Math.pow(2, 10));//возводит 2 в степень 10

