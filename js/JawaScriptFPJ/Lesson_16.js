//20220310 - ТК 0- ТОЛЬКО JS
//js + html + домашка + задачи + проект(в часах)
//0 + 0 + 0 + 0 + 0

//Свойства и методы форм
//Коллекция всех форм на странице
//document.forms
const lesson = document.querySelector('.lesson')


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

lesson.insertAdjacentHTML(
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

lesson.insertAdjacentHTML(
	"beforeend",
	`	<div class="lesson__text lesson__text_P3_5">
		<h3>Пример 3.5 </h3>
		<h4>Присвоение значения полям radio, check box file</h4>
		<div tabindex="-1" class="lesson__text-content lesson__text-content_noDecore">
			<button class="button button_P3_5_1">Изменить значение radio</button>
			<button class="button button_P3_5_2">Изменить выбор radio</button>
			<button class="button button_P3_5_3">Изменить значение и выбрать чекбокс</button>
			<button class="button button_P3_5_4">поставить / убрать галочку</button>
			</div>
	</div>`
);

const buttonP3_5_1 = document.querySelector('.button_P3_5_1');
const buttonP3_5_2 = document.querySelector('.button_P3_5_2');
const buttonP3_5_3 = document.querySelector('.button_P3_5_3');
const buttonP3_5_4 = document.querySelector('.button_P3_5_4');

buttonP3_5_1.addEventListener("click", function (e) {//при событии "click" выполняем функцию
	mainFormRadioButtons[0].value = "left";
	mainFormRadioButtons[1].value = "right";
});

buttonP3_5_2.addEventListener("click", function (e) {//при событии "click" выполняем функцию
	mainFormRadioButtons[1].checked = true;//меняем выбор радиокнопки
});


buttonP3_5_3.addEventListener("click", function (e) {//при событии "click" выполняем функцию
	mainFormCheckBox.value = "save";//присваиваем своё значение чекбоксу
	mainFormCheckBox.checked = true;//выбираем чекбокс
});

buttonP3_5_4.addEventListener("click", function (e) {//при событии "click" выполняем функцию
	mainFormCheckBox.checked = !mainFormCheckBox.checked;//инвертируем чекбокс
});

//назначить значение поля type file неполучится, можно только присвоить пустую строку
mainFormFile.value = "";

console.log("// Пример 3.6 Работа с select и options:");

const mainFormSelect = mainForm.nameSelect;//получаем элемент options
console.log(mainFormSelect);

lesson.insertAdjacentHTML(
	"beforeend",
	`	<div class="lesson__text lesson__text_P3_6">
		<h3>Пример 3.6 </h3>
		<h4>Работа с select и options</h4>
		<div tabindex="-1" class="lesson__text-content lesson__text-content_noDecore">
		<p>Элемент select имеет 3 важных свойства:</br>
		someSelect.options - коллекция из подэлементов options,</br>
		someSelect.selectedIndex - номер выбранного в данный момент options (0, 1....),</br>
		someSelect.value - значение выбранного в данный момент options (атрибут указанный в теге html),</br>
		</p>
		<p>Подэлементы select - options имеют свойства:</br>
		someOptions.selected - выбрана ли опция (t или f),</br>
		someOptions.index - номер опции среди других в списке select (0, 1....),</br>
		someOptions.text - содержимое options (ато что видит посетитель),</br>
		</p>
		</div>
		<div tabindex="-1" class="lesson__text-content lesson__text-content_noDecore">
			<button class="button button_P3_6_1">получить все options</button>
			<button class="button button_P3_6_2">получить индекс выбранного options</button>
			<button class="button button_P3_6_3">получить значение выбранного options</button>
			<button class="button button_P3_6_4">получить текст выбранного options</button>
			<div tabindex="-1" class="lesson__text-content lesson__text-value"> </div>
	</div>`
);

const buttonP3_6_1 = document.querySelector('.button_P3_6_1');
const buttonP3_6_2 = document.querySelector('.button_P3_6_2');
const buttonP3_6_3 = document.querySelector('.button_P3_6_3');
const buttonP3_6_4 = document.querySelector('.button_P3_6_4');
const getValue = document.querySelector('.lesson__text-value')

buttonP3_6_1.addEventListener("click", function (e) {//при событии "click" выполняем функцию
	console.log(mainFormSelect.options);
	getValue.insertAdjacentHTML(
		"beforeend",
		`Живая коллекция всех options: ${mainFormSelect.options} (смотреть в консоль!!!)</br>`
	)
});

buttonP3_6_2.addEventListener("click", function (e) {//при событии "click" выполняем функцию
	console.log(mainFormSelect.selectedIndex);//число от 0,1,2...
	getValue.insertAdjacentHTML(
		"beforeend",
		`индекс выбранного options: ${mainFormSelect.selectedIndex}</br>` //число от 0,1,2...
	)
});

buttonP3_6_3.addEventListener("click", function (e) {//при событии "click" выполняем функцию	
	console.log(mainFormSelect.value);//позиция выбранного options 1,2,3...
	getValue.insertAdjacentHTML(
		"beforeend",
		`значение выбранного options: ${mainFormSelect.value}</br>`//позиция выбранного options 1,2,3...
	)
});

buttonP3_6_4.addEventListener("click", function (e) {//при событии "click" выполняем функцию
	console.log(mainFormSelect.options[mainFormSelect.selectedIndex].text);//то что видит в options пользователь
	getValue.insertAdjacentHTML(
		"beforeend",
		`текст выбранного options: ${mainFormSelect.options[mainFormSelect.selectedIndex].text}</br>`//то что видит в options пользователь
	)
});

lessonTextP3_6 = document.querySelector(".lesson__text_P3_6");
lessonTextP3_6.insertAdjacentHTML(
	"beforeend",
	`	<h3>Пример 3.6.2 </h3>
		<h4>Выбрать некий options из JavaScript</h4>
		<p>Есть 3 способа выбрать options:</br>
			1. установить true на нужный индекс options</br>
			2. изменить someSelect.selectedIndex
			3. изменить someSelect.value
		</p>
		<button class="button button_P3_6_5">первый options</button>
		<button class="button button_P3_6_6">последний options</button>
		<button class="button button_P3_6_7">следующий options</button>
		`
);
const buttonP3_6_5 = document.querySelector('.button_P3_6_5');
const buttonP3_6_6 = document.querySelector('.button_P3_6_6');
const buttonP3_6_7 = document.querySelector('.button_P3_6_7');

console.log("Пример 3.6.5 выбрать некий options");

buttonP3_6_5.addEventListener("click", function (e) {//при событии "click" выполняем функцию
	console.log('выбираем первый options');
	mainFormSelect.options[0].selected = true;// присваиваем true options с индексом 0
});

buttonP3_6_6.addEventListener("click", function (e) {//при событии "click" выполняем функцию
	console.log('выбираем последний options');
	mainFormSelect.value = mainFormSelect.options.length; //значению options присваиваем длинну коллекции элементов options
});
let i;

buttonP3_6_7.addEventListener("click", function (e) {//при событии "click" выполняем функцию
	console.log('выбираем следующий options');
	i = mainFormSelect.selectedIndex;
	if (i >= 0 && i <= mainFormSelect.options.length - 1) {
		i++;
	}
	else { i = 0; }
	mainFormSelect.selectedIndex = i;
});

lessonTextP3_6.insertAdjacentHTML(
	"beforeend",
	`	<h3>Пример 3.6.3 </h3>
		<h4>Добавляем новый options из JavaScript</h4>
		<p>let newOpion("text", "value", defaultSelected, selected);</br>
			Параметры:</br>
			text - текст внутри option</br>
			value - значение</br>
			defaultSelected - если true, то ставится HTML - атрибут selected
			selected - если true, то элемент option будет выбранным
		</p>
		<button class="button button_P3_6_8">добавляем новый options</button>
		<button class="button button_P3_6_9">заменяем существующий 0-й options</button>
		<button class="button button_P3_6_10">следующий options</button>
		`
);
const buttonP3_6_8 = document.querySelector('.button_P3_6_8');
const buttonP3_6_9 = document.querySelector('.button_P3_6_9');
const buttonP3_6_10 = document.querySelector('.button_P3_6_10');

buttonP3_6_8.addEventListener("click", function (e) {//при событии "click" выполняем функцию
	console.log('Добавляем новый options');
	let newOptions = new Option("100", "4", false, false);
	mainFormSelect.append(newOptions);
});
buttonP3_6_9.addEventListener("click", function (e) {//при событии "click" выполняем функцию
	console.log('Добавляем новый options');
	let newOptions = new Option("10", "0", false, false);
	mainFormSelect.append(newOptions);
});