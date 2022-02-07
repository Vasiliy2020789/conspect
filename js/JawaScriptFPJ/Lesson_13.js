//20211126- ТК 0-ТОЛЬКО JS
//js + html + домашка + задачи + проект(в часах)
//15 + 3 + + +
console.log("//Пример 1 alert");
//alert("Привет!")
console.log("//Пример 2 confirm");
//const confirmResult = confirm("Хочешь научиться верстать?");
//console.log(confirmResult);
console.log("//Пример 3 prompt ");
//const promtResult = prompt("Кто ты по жизни?");//если ничего не ввести = пустая строка, если отмена = null 
//console.log(promtResult);

console.log("//Пример 4 Навигация по DOM элементам ");
const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
console.log(htmlElement);
console.log(headElement);
console.log(bodyElement);

console.log("//Пример 5 .firstChild и .lastChild Получение первого и последнего узлов");
const firstChildNode = bodyElement.firstChild;//заносит в переменную 1й дочерний узел элемента
const lastChildNode = bodyElement.lastChild;//заносит в переменную последний дочерний узел элемента
console.log(firstChildNode);
console.log(lastChildNode);
const childNodes = bodyElement.childNodes;//заносит в переменную список (коллекцию) всех дочерних узлов элемента
console.log(childNodes);

console.log(bodyElement.hasChildNodes());//проверка на наличие дочерних узлов

console.log("//Пример 6 Перебор коллекции");
for (let node of childNodes) {
	console.log(node);//покажет все узлы коллекции
}

console.log("//Пример 7 .prevousSibling .nextSibling ");
const prevousSiblingNode = bodyElement.previousSibling;//заносит в переменную предыдущий узел элемента
const nextSiblingNode = bodyElement.nextSibling;//заносит в переменную следующий узел элемента, если такого нет то null
const parentNode = bodyElement.parentNode;//заносит в переменную непосредственного родителя элемента
console.log(prevousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);


console.log("//Пример 8 .children получение коллекции всех дочерних элементов (тегов)");
const bodyChildren = bodyElement.children;//заносит в переменную коллекцию всех дочерних элементов (тегов)
console.log(bodyChildren);

console.log("//Пример 9 Получение первого и последнего элемента");
const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastChild;
console.log(firstChild);
console.log(lastChild);

console.log("//Пример 10 соседние и родительские элементы");
const prevousSibling = bodyElement.previousElementSibling;//пердыдущий элемент 
const nextSibling = bodyElement.nextElementSibling;//следующий элемент 
const parentElement = bodyElement.parentElement;//элемент непосредственный родитель

console.log(prevousSibling);
console.log(nextSibling);
console.log(parentElement);

console.log("//Пример 11 .Получение произвольного объекта на странице");
console.log("//Поиск по селектору класса:");
const elemsP11_1 = document.querySelectorAll('.lesson__list');
console.log(elemsP11_1);

console.log("//Поиск по селектору тега:");
const elemsP11_2 = document.querySelectorAll('li');
console.log(elemsP11_2);

console.log("//Поиск по смешанному селектору тега и класса:");
const elemsP11_3 = document.querySelectorAll('li.lesson__item-list');
console.log(elemsP11_3);

console.log("//Поиск по тегу первого уровня вложенности:");
const elemsP11_4 = document.querySelectorAll('.lesson__list>li');//выводит дочерние li внутри .lesson__list
console.log(elemsP11_4);

console.log("//Поиск по нескольким классам:");
const elemsP11_5 = document.querySelectorAll('.lesson__list, .lesson__text');//через запятую
console.log(elemsP11_5);

console.log("//Поиск по вложенным классам");
const elemsP11_6 = document.querySelectorAll('.lesson__list .lesson__text');//выводит .lesson__text те что внутри .lesson__list
console.log(elemsP11_6);

console.log("//Поиск по ID:");
const elemsP11_7 = document.querySelectorAll('#listItem');//ID - уникальный атрибут элемента
console.log(elemsP11_7);

console.log("//Поиск по атрибуту");
const elemsP11_8 = document.querySelectorAll("[data-item]");//атрибут - произвольное свойство элемента
console.log(elemsP11_8);

console.log("//Поиск по атрибуту со значением");
const elemsP11_9 = document.querySelectorAll("[data-item='85']");
console.log(elemsP11_9);

console.log("//Пример 12 Вывод 1 объекта из коллекции ");
console.log(elemsP11_4[2]);

console.log("//Пример 13 Перебор полученной коллекции");
for (const item of elemsP11_4) {//перебирает все записи в коллекции...
	console.log(item);//...и выводит их в консоль
}
console.log("//Пример 14 .forEach хоть и коллекция не массив - можно использовать ");
elemsP11_4.forEach(item => {
	console.log(item);
});
console.log("//Пример 15 искать можно не только в document");
const subList = document.querySelectorAll('.lesson__sub-list');
const subItems = subList[0].querySelectorAll('li');
console.log(subList);
console.log(subItems);

console.log("//Пример 16 .querySelectorAll");
const subListP15 = document.querySelectorAll('.lesson__sub-list');
const subItemsP15 = subListP15[0].querySelector('li');//ищет только 1й объект
console.log(subItemsP15);

console.log("//Пример 17 .getElementById поиск по ID");
const elemP17 = document.getElementById('listItem');//ID -уникальный, ищет только в document 
console.log(elemP17);

console.log("//Пример 18  ");
const elemP18_1 = document.getElementsByTagName('li');//ищет по имени тега и возвращает живую коллекцию
console.log(elemP18_1);

const elemP18_2 = document.getElementsByClassName('lesson__item-list');//ищет по имени класса, "." писать не нужно!!!
console.log(elemP18_2);

const elemP18_3 = document.getElementsByName('list');
console.log(elemP18_3);

console.log("//Пример 19 Отличие живой коллекции от статической ");
const listStaticP19 = document.querySelectorAll('.lesson__item-list');//содержит информацию на момент вызова метода
const listLiveP19 = document.getElementsByClassName('lesson__item-list')//содержит актуальную информацию о DOM дереве
console.log(listStaticP19);
console.log(listLiveP19);

//создаем новый html объект
const lessonList = document.querySelector('.lesson__list');
lessonList.insertAdjacentHTML(
	"beforeend",
	'<li class="lesson__item-list">Пункт №5 (добавлен с помощью JS)</li>'
);

console.log("//Пример 19.1 .closest ");
const elem_P19_1 = document.querySelector('.lesson__item-sub-list');
const parentListP19_1 = elem_P19_1.closest('.lesson__list')//ищет ближайшего родителя с указанным css селектором поднимаясь вверх по иерархии
console.log(parentListP19_1);

console.log("//Пример 20 .matches проверка на наличие css-селектора ");
let i = 1;
for (let elem of listStaticP19) {
	if (elem.matches('[class$="lesson__item-list_red"]')) {//проверка на наличие селектора класса lesson__item-list_red
		console.log(`${i} объект - красный`);// если истина то выводит в консоль красный
	} else if (elem.matches('[class$="lesson__item-list_blue"]')) {//проверка на наличие селектора класса lesson__item-list_blue
		console.log(`${i} объект - синий`);//...если истина то выводит в консоль: синий
	}
	i++;
}
//тк 33:40

console.log("//Пример 21 Получив объект в константу можно применять свойство навигации");
const text = document.querySelector('.lesson__text');
console.log(text);
const list = text.nextElementSibling;
console.log(list);
console.log("Изменение документа");

console.log("//Пример 22 .innerHTML получение содержимого объекта");
const textElementP22 = document.querySelector('.lesson__text_P22');//получаем объект
const textElementContentP22 = textElementP22.innerHTML;//Получаем содержимое объекта "как есть" вместе с html
console.log(textElementContentP22);//выводим в консоль содержимое объекта
//дописываем содержимое объекта
textElementP22.innerHTML = `<p>${textElementContentP22}</p> <p>Живи, а работай в свободное время!</p>`;//Перезаписываем содержимое объекта

console.log("//Пример 23 .outerHTML получение объекта целиком ");
const textElementP23 = document.querySelector('.lesson__text_P23');//получаем объект
const textElementContentP23 = textElementP23.outerHTML;
console.log(textElementContentP23);

console.log("//Пример 24 .textContent получение текста элемента, без тегов");
const textElementP24 = document.querySelector('.lesson__text_P24');
const textElementContentP24 = textElementP24.textContent;//...получаем только текст элемента, без тегов
console.log(textElementContentP24);
textElementP24.textContent = '<p>Живи, а работай в свободное время!</p>';//при выводе текста на страгицу преобразует теги в строку

console.log("//Пример 25 .data получение текста коментария ");
const textElementP25 = document.querySelector('.lesson__text_P25');
const getTextP25 = textElementP25.nextSibling;//...получаем перенос строки
const getCommentP25 = getTextP25.nextSibling;//...получаем комментарий
console.log(getCommentP25);//...выводим коммент в консоль
console.log(getCommentP25.data);
getCommentP25.data = 'Привет!';//...меняем текст комментария
console.log(getCommentP25.data);//...текст также меняется в Инструментах разработчика > Elements
//тк 41:19

console.log("//Пример 26 .createElement создание нового элемента (тега) ");
const newElementP26 = document.createElement('div');//создаем элемент div...
console.log(newElementP26);//...выводим его в консоль
//... наполняем новый элеи=мент контентом
newElementP26.innerHTML = `Живи, а работай в  
<span class="yellow">свободное</span> время!`;
console.log(newElementP26);//...выводим его в консоль
//создание нового текстового узла
const newText = document.createTextNode("Привет!");
console.log(newText);

console.log("//Пример 27 Вставляем новый элемент");
const textElementP27 = document.querySelector('.lesson__text_P27 .lesson__text-content');

const newElementBefore_P27 = document.createElement('div');
newElementBefore_P27.innerHTML = `Это элемент добавленный с помощью .before`;

const newElementAfter_P27 = document.createElement('div');
newElementAfter_P27.innerHTML = `Это элемент добавленный с помощью .after`;

const newElementPrepend_P27 = document.createElement('div');
newElementPrepend_P27.innerHTML = `Это элемент добавленный с помощью .prepend`;

const newElementAppend_P27 = document.createElement('div');
newElementAppend_P27.innerHTML = `Это элемент добавленный с помощью .append`;

const newTwoElementBefore_P27 = document.createElement('div');
newTwoElementBefore_P27.innerHTML = "Можно добавлять сразу несколько элементов одновременно!";


textElementP27.before('<h1>Привет</h1>', newTwoElementBefore_P27);//вставляет элемент newElementBefore_P27 перед элементом textElementP27
textElementP27.before(newElementBefore_P27);//вставляет элемент newElementBefore_P27 перед элементом textElementP27
textElementP27.after(newElementAfter_P27);//вставляет элемент newElementAfter_P27 после элемента textElementP27
textElementP27.prepend(newElementPrepend_P27);//вставляет элемент newElementPrepend_P27 внутри элемента textElementP27 перед всем содержимым
textElementP27.append(newElementAppend_P27);//вставляет элемент newElementAppend_P27 внутри элемента textElementP27 после с=всего содержимого

console.log("//Пример 28 .insertAdjacentHTML Вставка элементов с исполнением тегов html");
const textElementP28 = document.querySelector('.lesson__text_P28 .lesson__text-content');

textElementP28.insertAdjacentHTML(
	'beforebegin',
	'<p>Этот элемент вставлен методом .insertAdjacentHTML с атрибутом <span class="yellow"> beforebegin </span></p>'
);

textElementP28.insertAdjacentHTML(
	'beforeend',
	'<p>Этот элемент вставлен методом .insertAdjacentHTML с атрибутом <span class="yellow"> beforeend </span></p>'
);

textElementP28.insertAdjacentHTML(
	'afterbegin',
	'<p>Этот элемент вставлен методом .insertAdjacentHTML с атрибутом <span class="yellow"> afterbegin </span></p>'
);

textElementP28.insertAdjacentHTML(
	'afterend',
	`<p>Этот элемент вставлен методом .insertAdjacentHTML с атрибутом <span class="yellow"> afterend </span></p>
	<p>Вторая строка примера 28</p>`
);

console.log("//Пример 29 .insertAdjacentText");
const textElementP29 = document.querySelector('.lesson__text_P29 .lesson__text-content');

textElementP29.insertAdjacentText(
	'beforebegin',
	'<p>Этот элемент вставлен методом .insertAdjacentText с атрибутом <span class="yellow"> beforebegin </span></p>'
);

console.log("//Пример 30 .insertAdjacentElement");
const textElementP30 = document.querySelector('.lesson__text_P30 .lesson__text-content');
const newElementP30 = document.createElement('div');
newElementP30.innerHTML = '<p>Этот элемент вставлен методом .insertAdjacentElement с атрибутом <span class="yellow"> beforebegin </span></p>';
textElementP30.insertAdjacentElement(
	'beforebegin',
	newElementP30
);

console.log("//Пример 31 Перенос элемента");
const lessonTextContentP31 = document.querySelector('.lesson__text_P31 .lesson__text-content');
const paragraphP31 = document.querySelector('.lesson__text_P31 p');
console.log(`lessonTextContentP31 = 
${lessonTextContentP31}`);
console.log(`paragraph = 
${paragraphP31}`);
console.log('Удаляем параграф из блока с классом lesson__text-content и вставляем его перед этим блоком');
lessonTextContentP31.before(paragraphP31); //удаляет paragraph и вставляет его перед lessonTextContentP31

console.log("//Пример 32 Клонирование элемента");
const lessonTextContentP32 = document.querySelector('.lesson__text_P32 .lesson__text-content');
const paragraphP32 = document.querySelector('.lesson__text_P32 p');
const cloneParagraph = paragraphP32.cloneNode();//клонирует объект без содержимого
const cloneParagraphTrue = paragraphP32.cloneNode(true);//клонирует объект со всем содержимым (глубокое клонирование)
lessonTextContentP32.before(cloneParagraph);//удаляет paragraph и вставляет его перед lessonTextContentP32
lessonTextContentP32.after(cloneParagraphTrue);//удаляет paragraph и вставляет его после lessonTextContentP32

console.log("//Пример 33 .remove() Удаление узлов");
const lessonTextContentP33 = document.querySelector('.lesson__text_P33 .lesson__text-content p');//Получаем объект...
lessonTextContentP33.remove();//...удаляем полученный объект


console.log("//Пример 34 .className Изменение класса");
const elem_P34 = document.querySelector('.lesson__text_P34 .lesson__text-content');//получаем элемент
const elemClassNameP34 = elem_P34.className;//..получаем имена классов
console.log(elemClassNameP34);//выводим изначальные имена классов 
elem_P34.className = 'lesson__text-content_bold';//полностью перезаписывает имена классов
console.log(elem_P34.className);//...проверяем какое имя получилось


console.log("//Пример 35 .classList Изменение класса");
const paragraphs_P35 = document.querySelectorAll('.lesson__text_P35 p');//получаем элемент
console.log(paragraphs_P35);//выводим коллекцию
paragraphs_P35[0].classList.add('aqua');//добавляет класс aqua
paragraphs_P35[1].classList.remove('red');//удаляет класс red
paragraphs_P35[2].classList.toggle('active');//Если клас присутствует удаляет его если нет - добавляет
paragraphs_P35[3].classList.toggle('active');//Если клас присутствует удаляет его если нет - добавляет
console.log(paragraphs_P35[4].classList.contains('red'));//проверяет наличие класса, возвращает true/false

console.log("//Пример 36 for..of перечисление классов ");
for (let className of paragraphs_P35[3].classList) {
	console.log(className);
}

console.log("//Пример 37 .style управление стилями ");
const elementP37 = document.querySelector('.lesson__text_P37 .lesson__text-content');
elementP37.style.color = "cyan";//задаёт CSS свойству color значение cyan
elementP37.style.fontWeight = "bold";//задаёт CSS свойству font-weight значение bold
elementP37.style.marginBottom = '30px';//задаёт отступ снизу 30 пикселей

console.log("//Пример 38 получение CSS - свойства объекта ");
console.log(elementP37.style.marginBottom);
console.log(elementP37.style.color);
console.log(elementP37.style.backgroundColor);//свойство не прописано с style поэтому не отображается
console.log(elementP37.style.fontFamily);

console.log("//Пример 39 Сброс CSS свойства.");
const elementP39 = document.querySelector('.lesson__text_P39 .lesson__text-content');
elementP39.style.padding = '40px';//Устанавливаем паддинг и значение появляется в инструментах разработчика Elements в style...
console.log(elementP39);
elementP39.style.padding = '';//...Полностью удаляет свойство из style в Element в инструментах разработчика

console.log("//Пример 40 .style.cssText - полная перезапись css-свойств");
const elementP40 = document.querySelectorAll('.lesson__text_P40 .lesson__text-content');
elementP40[1].style.paddingBottom = '40px';//Установим внутренний отступ 40 пикселей...
//...Далее перезаписываем все свойства...
elementP40[1].style.cssText = `
margin: 10px;
padding: 15px;
color: #135;
`;//...видим что свойства заданные ранее перезаписались

console.log("//Пример 41 getComputedStyle(element) Вычисление стилей CSS");
const elementP41 = document.querySelectorAll('.lesson__text_P41 .lesson__text-content')
console.log(elementP41[1].style.fontSize);//Если свойства нет в style то получим пустую строку
const elementStyleP41 = getComputedStyle(elementP41[1]);//Заносим в переменную все стили элемента...
console.log(elementStyleP41.fontSize);//...достаем из переменной значение свойства fontSize
console.log(elementStyleP41.backgroundColor);//...достаем из переменной значение свойства backgroundColor

console.log("//Пример 42 getComputedStyle(element) Вычисление стилей псевдоэлемента");
const elementP42 = document.querySelector('.lesson__text_P41 .lesson__text-content ul li')
const elementBeforeStyleP42 = getComputedStyle(elementP42, "::before");//...достаем из переменной значение свойства псевдоэлемента before
console.log(elementP42);//...выводим сам элемент
console.log(elementBeforeStyleP42.backgroundColor);//Выводим его цвет фона

console.log("//Пример 43 Лаив хаки по работе со стилями.");
console.log('//Пример 43.1 ');
const elementP43 = document.querySelector('.lesson__text_P43 .lesson__text-content')
const elementStyle = getComputedStyle(elementP43);
console.log(elementStyle.paddingLeft);//возвращает свойство как оно есть с единицами измерений
console.log(parseInt(elementStyle.paddingLeft));//возвращает только числовое значение свойства

console.log("//Пример 44 атрибуты и свойства");
const linkP44 = document.querySelector('.lesson__link');
const inputP44 = document.querySelector('.lesson__input');
console.log(linkP44.href);
console.log(inputP44.href);

console.log(linkP44.value);
console.log(inputP44.value);
console.log("//Пример 44.1 Получение всех доступных свойств");
console.dir(linkP44);
console.dir(inputP44);

console.log("//Пример 45 Произвольные атрибуты");
const lessonTextP45 = document.querySelector('.lesson__text_P45 .lesson__text-content');


console.log('до установки значения атрибута проверка наличия / вывод значения в консоль');
console.log(lessonTextP45.hasAttribute('name'));
console.log(lessonTextP45.getAttribute('name'));

lessonTextP45.hasAttribute('name');//Проверяет наличие атрибута
lessonTextP45.getAttribute('name');//Получение значения атрибута
lessonTextP45.setAttribute('name', 'value');//Устанавливает значение value атрибуту name 

console.log('После установки значения атрибута');
console.log(lessonTextP45.hasAttribute('name'));
console.log(lessonTextP45.getAttribute('name'));
lessonTextP45.removeAttribute('name');//Удаляет атрибут

console.log("//Пример 45.1 Зададим произвольный атрибут элементу lesson__text-content");
lessonTextP45.setAttribute('some-atribute', 'some-value');
if (lessonTextP45.hasAttribute('some-atribute')) {
	console.log('some-atribute существует!');
}
//тк 1:05:00
console.log("//Пример 45.2 Синхронизация между атрибутами и свойствами");

inputP44.setAttribute('id', '123');//устанавливаем атрибут id 
console.log(inputP44.id);//...выводим его в консоль
inputP44.id = '321';//...меняем значение атрибута
console.log(inputP44.id);//...убеждаемся что значение поменялось
console.log(inputP44.getAttribute('id'));//...убеждаемся что значение поменялось

console.log("//Пример 45.3 свойство value");

inputP44.setAttribute('value', 'Привет!')
console.log(inputP44.value);

inputP44.value = "Как дела?";//...меняем значение
console.log(inputP44.value);//...эта команда вернет Как дела
console.log(inputP44.getAttribute('value'));//...эта конманда вернет Привет

console.log("//Пример 45.4 .dataset - доступ к атрибутам с префиксом data-");

const lessonTextP45_4 = document.querySelector('.lesson__text_P45 .lesson__text-content');//берем первый элемент соответствующий условию в скобках

console.log(lessonTextP45_4.dataset.size);//...выводим значение атрибута data-size 

lessonTextP45_4.dataset.size = "5810";//...меняем значение свойства
console.log(lessonTextP45_4.dataset.size);//...выводится новое значение
//если значение атрибута состит из нескольких слов: например data-size-value то в javascript следует употреблять lowerCamelCace: элемент.dataset.sizeValue

console.log("//Пример 46 Несколько полезных свойств");

console.log(lessonTextP45_4.tagName);//возвращает тег элемента
console.log(lessonTextP45_4.hidden);//видимость объекта true - невидим, false - видим
lessonTextP45_4.hidden = true;//скрываем элемент
