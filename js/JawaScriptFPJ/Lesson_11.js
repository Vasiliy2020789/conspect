//20211121-6:15-7:45 ТК 0-14:45 ТОЛЬКО JS
//js + html + домашка + задачи + проект(в часах)
//1,5
console.log("//Пример 1 Объявление текстовых переменных ");
let hi = 'Привет!';//'' - просто текст
let name = "Вася";//"" - просто текст
let age = 32;// число
message = `${hi} Меня зовут ${name}, мне ${age}!`//Внутри `` можно использовать переменные
console.log(message);//...как текстовые так и других типов
name = "Лена";
age = 31;
console.log(`${hi} Меня зовут ${name}, мне ${age}!`);
function someSum(a, b) {
	return a + b;
}
console.log(`Сумма: ${someSum(4, 8)}`);//внутри `` можно вызывать функцию
//внутри `` можно писать многострочный текст
let text = `Привет! 
Вы на канале:
Фрилансер по жизни!`
console.log(text);

console.log("//Пример 2 Всё что внутри кавычек будет строкой (string)");
let someString = "158";
let someNumber = 158;
console.log(someString);
console.log(typeof someString);
console.log(someNumber);
console.log(typeof someNumber);
console.log(someString + someNumber);//сложение со строкой даёт строку
console.log(someNumber + someString);



console.log(`//Пример 3 Спецсимволы \\n \\t \\\\ \\"\ \" `);
text = 'Привет! \nВы на канале: \nФрилансер по жизни!'//перевод строки
console.log(text);
console.log('Привет! \n\tВы на канале: \n\t\tФрилансер по жизни!');//nf,ekzwbz
text = 'Привет! \\ Вы на канале: Фрилансер по жизни!'//показать \
console.log(text);
text = "Привет! Вы на канале: \"Фрилансер по жизни!\""//использовать кавычки ""
console.log(text);
console.log("Иконки и символы UTF-16 \\uКОД UTF-32 \\u{КОД}");
text = "Живи, а работай в свободное время! \u00A9 \u{1F60D}"
console.log(text);


console.log("//Пример 4 Символы строк");
let textP4 = "Привет!";
console.log(textP4.length);// возвращает количество символов в строке
console.log(textP4[0]);//возвращает 1й символ строки
console.log(textP4[textP4.length - 1]);//возвращает последний символ строки

for (const char of textP4) {
	console.log(char);
}

console.log("//Пример 5 Регистр");
console.log(textP4.toUpperCase());
console.log(textP4.toLowerCase());



console.log("//Пример 6 Поиск в строке");
console.log(textP4.indexOf('рив'));//выводит номер символа в строке с которого начинается совпадение
console.log(textP4.indexOf('рив', 3));//начинает поиск совподения с 3 символа
console.log(text.includes('бод'));// если есть - возвращает true 
console.log(text.includes('бод', 33));//...регистр имеет значение

console.log(text.startsWith('рив'));//ищет вначале строки регистр имеет значение
console.log(textP4.endsWith('!'));//ищет с конца строки
console.log('// Поиск без учета регистра');
text = `Привет! 
Вы на канале:
Фрилансер по жизни!`
let searchText = "фР"
console.log(text.toLowerCase().includes(searchText.toLowerCase()));//переводим обе строки в нижний регистр и сразу ищем

console.log("//Пример 7 Взять часть строки");
console.log(textP4);
console.log(textP4.slice(1, 2));
console.log(textP4.slice(-2, -1));
console.log(textP4.slice(1));


console.log("//Пример 8 Сравнени строк ");
console.log("А" > "Б");//Алфавитный порядок
console.log("а" > "Б");//Алфавитный порядок
console.log("Скрипт" > "Скрипка");//Алфавитный порядок
console.log("Слайдер" > "Слайд");//Кол-во символов
console.log("Фрилансер" > "фрилансер");//Регистр
