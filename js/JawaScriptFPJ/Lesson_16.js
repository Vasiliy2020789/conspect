//20220310 - ТК 0- ТОЛЬКО JS
//js + html + домашка + задачи + проект(в часах)
//0 + 0 + 0 + 0 + 0

//Свойства и методы форм
//Коллекция всех форм на странице
//document.forms



console.log("// Пример 1 cвойства и методы форм");
console.log("// Пример 1.1 получаем все формы document.forms ");
console.log(document.forms);//возвращает живую коллекцию всех форм на странице
console.log("// Пример 1.1 получаем конкретную форму document.forms[i] ");
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
console.log("// Пример 2.1 получаем элементы форм mainForm");
const formItems = mainForm.elements;//получаем все элементы формы в переменную
console.log(formItems);
//console.log(mainForm.elements);//выводим в консоль все элементы формы

console.log("// Пример 2.2 получаем элементы форм mainForm");
//у каждого элемента формы есть атрибут 'name', по нему передаются значения после отправки формы
const mainFormInput = mainForm.elements.nameInput;//Получаем в переменную элемент формы...
const mainFormInput2 = mainForm.nameInput;//...или так(упрощенно)
console.log(mainFormInput);
console.log(mainFormInput2);

console.log("// Пример 2.3 получаем коллекцию радио кнопок:");
const mainFormRadioButtons = mainForm.nameRadio;//получаем коллекцию радио кнопок
console.log(mainFormRadioButtons);
console.log(mainFormRadioButtons[1]);

console.log("// Пример 2.4 получаем родительскую форму в которой находится элемент someElement.form:");
console.log(mainFormInput.form);

console.log("// Пример 3 получаем значение (содержимое) полей someElement.value :");

console.log("// Пример 3.1 получаем значение input mainFormInput.value:");
//mainFormInput получили в примере 2.2

console.log(mainFormInput.value);

console.log("// Пример 3.2 получаем значение Textarea mainFormTextarea.value :");

const mainFormTextarea = mainForm.nameTextarea;//получаем в переменную поле для ввода текста
console.log(mainFormTextarea.value);

console.log("// Пример 3.3 присваиваем значение Textarea mainFormInput.value = :");

document.body.insertAdjacentHTML(
	"beforeend",
	`	<div class="lesson__text lesson__text_P_3">
		<h3>Пример 3.3 </h3>
		<h4>Присвоение значения полю</h4>
		<div tabindex="-1" class="lesson__text-content lesson__text-content_noDecore">
			<button class="button button_P3_3_1">Присвоить значение input</button>
			<button class="button button_P3_3_2">Присвоить значение textarea </button>
		</div>
	</div>`
);

const buttonP3_3_1 = document.querySelector('.button_P3_3_1');
const buttonP3_3_2 = document.querySelector('.button_P3_3_2');

buttonP3_3_1.addEventListener("click", function (e) {//при событии "click" выполняем функцию
	mainFormInput.value = "Пока !";//присваиваем значение
});

buttonP3_3_2.addEventListener("click", function (e) {//при событии "click" выполняем функцию
	mainFormTextarea.value = "До встречи !";//присваиваем значение
});

console.log("// Пример 3.4 получение значения поля type radio someElement.value и someElement.checked :");

//const mainFormRadioButtons = mainForm.nameRadio;//получаем в переменную коллекцию переключателей получили в примере 2.3
const mainFormCheckBox = mainForm.nameCheck;
const mainFormFile = mainForm.nameFile;

//Получение значений radio:
console.log(mainFormRadioButtons[0].value);//показывает включен ли переключатель
console.log(mainFormRadioButtons[1].value);//показывает включен ли переключатель
console.log(mainFormRadioButtons[0].checked);//показывает выбран ли переключатель
console.log(mainFormRadioButtons[1].checked);//показывает выбран ли переключатель

//Получение значений CheckBox:
console.log(mainFormCheckBox.value);//показывает включен ли флажок
console.log(mainFormCheckBox.checked);//показывает выбран ли флажок

//Получение значений File:
console.log(mainFormFile.value);

console.log("// Пример 3.5 присвоение значения поля type radio someElement.value и someElement.checked :");

document.body.insertAdjacentHTML(
	"beforeend",
	`	<div class="lesson__text lesson__text_P3_5">
		<h3>Пример 3.5 </h3>
		<h4>Присвоение значения полям radio и check box </h4>
		<div tabindex="-1" class="lesson__text-content lesson__text-content_noDecore">
			<button class="button button_P3_5_1">Изменить значение radio</button>
			<button class="button button_P3_5_2">Изменить выбор radio</button>
		</div>
	</div>`
);

const buttonP3_5_1 = document.querySelector('.button_P3_5_1');
const buttonP3_5_2 = document.querySelector('.button_P3_5_2');

buttonP3_5_1.addEventListener("click", function (e) {//при событии "click" выполняем функцию
	mainFormRadioButtons[0].value = "left";
	mainFormRadioButtons[1].value = "right";
});

buttonP3_5_2.addEventListener("click", function (e) {//при событии "click" выполняем функцию
	mainFormRadioButtons[1].checked = true

});