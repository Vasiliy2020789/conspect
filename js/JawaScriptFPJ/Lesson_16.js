//20220310 - ТК 0- ТОЛЬКО JS
//js + html + домашка + задачи + проект(в часах)
//0 + 0 + 0 + 0 + 0

//Свойства и методы форм
//Коллекция всех форм на странице
//document.forms



console.log("// Пример 1 cвойства и методы форм");
console.log("// Пример 1.1 получаем все формы document.forms ");
console.log(document.forms);//возвращает живую коллекцию всех форм на странице
console.log("// Пример 1.1 получаем конкретную форму document.forms [i] ");
const formsArr = document.forms;//получение коллекции всех форм
const mainForm = document.forms[0];//получение конкретной формы
console.log(mainForm);
const mainFormName = document.forms.main;//получение конкретной формы по атрибуту "name"
console.log(mainFormName);
console.log(document.querySelectorAll('form'));//получение НЕЖИВОЙ коллекци форм, не получает формы добавленые динамически
console.log(document.forms);

//Добавляем новую форму
document.body.insertAdjacentHTML(
	"beforeend",
	'<form name="some" class="some-form" action="#"></form>'
)
