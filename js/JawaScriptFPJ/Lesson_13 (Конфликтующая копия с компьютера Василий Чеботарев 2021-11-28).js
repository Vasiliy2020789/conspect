//20211126- ТК 0-ТОЛЬКО JS
//js + html + домашка + задачи + проект(в часах)
//4 + 
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

console.log("//Пример 5 Получение первого и последнего узлов");
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


console.log("//Пример 8 .children получение коллекции всех дочерних элементов");
const bodyChildren = bodyElement.children;
console.log(bodyChildren);

console.log("//Пример 9  ");






console.log("//Пример 1 ");
console.log("//Пример 1 ");
console.log("//Пример 1 ");
console.log("//Пример 1 ");
console.log("//Пример 1 ");
console.log("//Пример 1 ");
console.log("//Пример 1 ");
console.log("//Пример 1 ");
console.log("//Пример 1 ");
console.log("//Пример 1 ");
console.log("//Пример 1 ");
console.log("//Пример 1 ");
console.log("//Пример 1 ");












