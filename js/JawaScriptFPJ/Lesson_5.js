console.log('//Операторы в Javascript');
console.log('//Унарный оператор пример 1');
let x = -800
console.log(x);
console.log('//Бинарный оператор 30 - 6 пример 2');
let y = 30 - 6;
console.log(y);
console.log('//Примеры 3 - 8');
x = 5 + 8
console.log(`Результат 5 + 8 = ${x}`);
x = 5 - 8
console.log(`Результат 5 - 8 = ${x}`);
x = 5 * 8
console.log(`Результат 5 * 8 = ${x}`);
x = 5 / 8
console.log(`Результат 5 / 8 = ${x}`);
x = 42 % 8
console.log(`Результат взятия остатка от деления 42 % 8 = ${x}`);
x = 5 ** 3
console.log(`Результат возведения в степень 5 ** 3 = ${x}`);
//Специальные возможности операторов
console.log('//пример 9 сложение строк ');
let result_1 = 'Фрилансер' + ' ' + 'по' + ' ' + 'жизни';
console.log(result_1);
console.log(typeof result_1);
console.log('//пример 10 сложение строки и числа возвращает строку порядок операндов значения не имеет:');
let result_2 = 'Фрилансер ' + 58;
console.log(result_2);
console.log(typeof result_2);
let result_2_1 = 58 + ' Фрилансер';
console.log(result_2_1);
console.log(typeof result_2_1);
//Казусы 
console.log('//пример 11 сложение числа и строки содержащей число');
let result_3 = 2 + '2';
console.log(result_3);
console.log(typeof result_3);
console.log('//пример 12 операции до сложения со строкой и после');
let result_4 = 1 + 2 + ' Фрилансер ' + 3 + 4;
console.log(result_4);
console.log(typeof result_4);
console.log('//пример 12.1 унарный +');
let result_4_1 = +'20';
console.log(result_4_1);
console.log(typeof result_4_1);
console.log('//пример 12.2 простое сложение слепит строки');
let string_1 = '25';
let string_2 = '10';
console.log(string_1 + string_2);
console.log('//используя унарный + сработает преобразование в число');
console.log(+string_1 + +string_2);
console.log('//более длинная запись');
console.log(Number(string_1) + Number(string_2)); //более длинная запись

console.log('//пример 13');
x = '25' - 5;
console.log(x);
console.log(typeof x);
console.log('//пример 14');
x = '25' * 5;
console.log(x);
console.log(typeof x);
console.log('//пример 15');
x = 'Фрилансер' * 5;
console.log(x);
console.log(typeof x);

console.log('//пример 16 приоритет как в математике');
x = 4 - 3 * 2
console.log(`4 - 3 * 2 = ${x}`);
console.log('//скобки');
x = (4 - 3) * 2
console.log(`(4 - 3) * 2 = ${x}`);
console.log('//одинаковый приоритет');
x = 4 - 3 + 2
console.log(`4 - 3 + 2 = ${x}`);
//оператор присвоения
console.log('//пример 17 = оператор присвоения рассмотрим пример: 8 - (a = b +3)');
let a = 1 + 2;
let b = 2;
x = 8 - (a = b + 3);// не рекомендуется, низкая читаемость кода!
console.log('Результат в скобках ' + a);
console.log('Общий результат ' + x);
//Пример 18 присвоение по цепочке
console.log('//Пример 18 присвоение по цепочке');
let result_5 = result_6 = result_7 = 1 + 2;
console.log(result_5);
console.log(result_6);
console.log(result_7);
//Пример 19. Сокращенная запись вычисления с присвоением
console.log('Пример 19. Сокращенная запись вычисления с присвоением');
let d = 5;
d = d + 3;
console.log(d);
d = d * 2;
console.log(d);
console.log('//сокращенная запись');
let e = 5;
e += 3;
console.log(e);
e *= 2;
console.log(e);
console.log('//Пример 20. Инкримент (++) и дикримент(--)');
d++;
console.log(d);
e--;
console.log(e);
console.log('//Пример 20.1 Постфиксная (x++) и префиксная форма (++x).');
let userCounter = 0;
let newUsers = userCounter++ //Постфиксная. Сначала исполняется = а потом ++
console.log(newUsers);
let userCounter1 = 0;
let newUsers1 = ++userCounter1 //Префиксная. Сначала исполняется ++ а потом =
console.log(newUsers1);
console.log('//Пример 20.2 применение ++ и -- в выражениях.');
userCounter = 0;
newUsers = 2 * ++userCounter; //порядок выполнения: 1++ 2* 3=
console.log(newUsers);
console.log('//Пример 21 оператор запятая')
userCounter = (8 + 2, 19 + 1);
console.log(userCounter);
//Операторы сравнения
//Пример 22. Сравнение чисел
console.log('//Пример 22. Сравнение чисел');
console.log(2 > 1);
console.log(2 < 1);
console.log(58 == 36);
console.log(2 > 1);
console.log(8 != 9);
result = 11 > 10; //присвоение результата переменной
console.log(`11 > 10 is ${result}`);
console.log('//Пример 23. Сравнение строк.');
console.log("А" < "Б");
console.log("А" > "а");
console.log("//Код ASCII для А и а соответственно:");
console.log("Aа".charCodeAt(0));//преобразует 0й символ в код ASCII 
console.log("Аа".charCodeAt(1));//преобразует 1й символ в код ASCII
console.log("Скрипт" > "Скрипка");//т > к, остальные одинаковые
console.log("Слайдер" > "Слайд");//Длинна первого больше чем второго
console.log("Фрилансер" > "фрилансер");//ф > Ф
console.log('//Пример 23.1. Сравнение разных типов данных.');
console.log("58" > 10);//строка 58 преобразуется в число
console.log("007" == 7);//строка 007 преобразуется в число
console.log(true == 1);//true преобразуется в 1, false в 0
console.log(false == 0);//true преобразуется в 1, false в 0
console.log('//Пример 23.2. Интересные ситуации.');
let itemA = 0;
let itemB = "0";
console.log(`Boolean(0) преобразуется в ${Boolean(itemA)}`);
console.log(`Boolean('0') преобразуется в ${Boolean(itemB)} т.к. строка не пуста`);
console.log(itemA == itemB);//Однако при сравнении будет работать преобразование строки в число
console.log(' //Пример 23.3 Оператор строгого равенства ===');
console.log(0 === false);
console.log('007' === 7);
console.log('58' !== 58);
x = 33;
console.log(x === 33);
console.log('Пример 24 Сравнение null undefined и 0');
console.log('null === undefined');
console.log(null === undefined);//Строгое равенство
console.log('null == undefined');
console.log(null == undefined);//Не строгое равенство
console.log('Сравнение null и 0');
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log('Сравнение undefined и 0');
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log('//Пример 25. Логические операторы.');
console.log('//Пример 25.1 ИЛИ ||. Булевые значения');
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);
console.log('//Пример 25.2 ИЛИ ||. Разные типы данных');
console.log(1 || 0);
console.log(true || 'Фрилансер');
console.log(null || 58);
console.log(null || 'Фрилансер' || 0);
console.log(undefined || '' || null || 0);
//20211107-15:00 ТК19:27
console.log('//Пример 25.3 Присвоение значения в переменную');
userName = '';
userNickName = 'Фрилансер';
user = userName || userNickName || "Без имени";//userNickName вернет true поэтому в user запишится 'Фрилансер'
console.log(user);
console.log('//Пример 25.4 Сокращенные вычисления. Условия.');
let admins = 0;
let users = 5;
admins > users || users++; //при admins = 0 admins > users будет false и инкримент сработает
//при admins = 10 admins > users будет true и инкримент не сработает
console.log(users);
console.log('//Пример 26.1 И &&. Булевые значения');
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);
console.log('//Пример 26.2 И &&. Разные типы данных');
console.log(' Фрилансер' && 0 && 2 && 3);//0 - false результат 0
console.log(1 && 2 && null && 3);//null - false результат null
console.log(15 && 42);//0 - false результат 42
//20211107-16:00 ТК23:15 перерыв
//20211107-16:45 ТК23:15
console.log('//Пример 26.4 Приоритет && больше чем ||');
console.log(1 && 0 || 1 && 2);
console.log('//Пример 26.5 Подобие условия');
user = 0;
(user > 0) && console.log(`Пользователей ${user}`);
console.log('//Пример 27.1 НЕ ! . Булевые значения');
console.log(!true);
console.log('//Пример 27.1 НЕ ! . Разные типы данных');
console.log(!null);//true 
console.log(!1);//false
console.log(!'');//true 
console.log(!' Фрилансер');//false
console.log('//Пример 27.3 Приоритет  у НЕ наивысший.');
console.log(!true && 58 || 18 && !1);//false
//20211107-17:20 ТК25:15 перерыв
//20211108-23:00-23:30
console.log('//Пример 27.4 Испоьзуется для преобразования в boolean');
console.log(!!'99');
console.log(' то же что и:');
console.log(Boolean('99'));
//20211109-22:00 ТК26:10
console.log('//Пример 28 ?? Оператор сравнения с null / undefined.');
let myName;
console.log(myName ?? "Без имени");
myName = 'Вася';
console.log(myName ?? "Без имени");
console.log(undefined ?? null);
console.log(null ?? undefined);
console.log(null ?? undefined ?? 2);