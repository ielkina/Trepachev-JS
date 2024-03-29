"use strict";
/*Инструкция return в JavaScript
Пусть у нас есть функция, которая выводит на экран квадрат переданного числа:*/

function func(num) {
	alert(num * num);
}
func(3); // выведет 9

/*Пусть мы хотим не выводить значение на экран, а записать в какую-нибудь 
переменную, вот так:*/
let result = func(3); // в переменной result теперь 9

/*Для этого в JavaScript существует специальная инструкция return, которая позволяет
указать значение, которое возвращает функция. Под словом "возвращает" понимают то значение, 
которое запишется в переменную, если ей присвоить вызванную функцию.
Итак, давайте перепишем нашу функцию так, чтобы она не выводила результат на экран, 
а возвращала его в переменную:*/

function func(num) {
	return num * num;
}
let result = func(3); // в переменной result теперь 9

//После того, как данные записаны в переменную, их можно, например, вывести на экран:

function func(num) {
	return num * num;
}
let result = func(3);
alert(result); // выведет 9

//А можно сначала как-то изменить эти данные, а затем вывести их на экран:

function func(num) {
	return num * num;
}
let result = func(3);
result = result + 1;
alert(result); // выведет 10

//Можно сразу выполнять какие-то действия с результатом работы функции перед записью в переменную:

function func(num) {
	return num * num;
}
let result = func(3) + 1;
alert(result); // выведет 10

//А можно не записывать результат в переменную, а сразу вывести его на экран:

function func(num) {
	return num * num;
}
alert(func(3)); // выведет 9

/*Задача 1
Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью 
этой функции найдите куб числа 3 и запишите его в переменную result.*/

function name(num) {
	return num * num;
}
let result = name(3) * 3;
alert(result);

/*Использование функций в выражении
В следующем примере с помощью функции func мы сначала найдем квадрат числа 2, а затем - 3 квадрат
числа, сложим эти значения и запишем в переменную:*/

function func(num) {
	return num * num;
}
let result = func(2) + func(3);//4+9=13
alert(result); // выведет 13

/*Задача 2
Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого 
числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. 
Просуммируйте полученные результаты и выведите их на экран.*/

function func(num) {
	return Math.sqrt(num);
}
let result = func(3) + func(4);
alert(result);

/*Функции в функциях
Можно также результат работы одной функции передать параметром в другую, например, вот так мы 
сначала найдем квадрат числа 2, а затем квадрат результата:*/

function func(num) {
	return num * num;
}
let result = func(func(2));
alert(result); // выведет 16

/*Функции, конечно же, не обязательно должны быть одинаковыми. Пусть, например, у нас есть 
функция, возвращающая квадрат числа, и функция, возвращающая куб числа:*/

function square(num) {
	return num * num;//2*2=4
}
function cube(num) {
	return num * num * num;
}
/*Давайте с помощью этих функций возведем число 2 в квадрат, а затем результат этой операции 
возведем в куб:*/

let result = cube(square(2));//4*4*4=64
alert(result);

/*Пусть теперь у нас есть функция, возвращающая квадрат числа, и функция, находящая сумму двух 
чисел:*/

function square(num) {
	return num * num;
}
function sum(num1, num2) {
	return num1 + num2;
}

//Найдем с помощью этих функций сумму квадрата числа 2 и сумму квадрата числа 3:

let result = sum(square(2), square(3));
alert(result);

/*Задача 3
Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, 
округляющая дробь до трех знаков в дробной части:*/

function sqrt(num) {
	return Math.sqrt(num);
}
function round(num) {
	return num.toFixed(3);
}
/*С помощью этих функций найдите квадратный корень из числа 2 и округлите его до 
трех знаков в дробной части.*/
let result = round(sqrt(2));//1.414
alert(result);


/*Задача 4
Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, 
возвращающая сумму трех чисел:*/

function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
//С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.
let result = sum(sqrt(2, 3, 4));
alert(result);


/*Задача 5
Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:*/

function round(num) {
	return num.toFixed(3);
}
function sqrt(num) {
	return Math.sqrt(num);
}
function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
let result = round(sum(sqrt(2, 3, 4)));
/*С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную 
result записывалась дробь, округленная до 3-х знаков в дробной части.

Тонкое место return
После того, как выполнится инструкция return - функция закончит свою работу и никакой код 
дальше не выполнится. Смотрите пример:*/

function func(num) {
	return num * num;
	alert('!'); // этот код никогда не выполнится
}
let result = func(3);

/*Это не значит, что в функции должен быть один return. Но выполнится только один из них. 
В следующем примере в зависимости от значения параметра выполнится либо первый, 
либо второй return:*/

function func(num) {
	if (num >= 0) {
		return '+';
	} else {
		return '-';
	}
}
alert(func(3)); // выведет '+'
alert(func(-3)); // выведет '-'

/*Задача 6
Что выведется на экран в результате выполнения следующего кода:*/

function func(num) {
	return num;
	let result = num * num;
	return result;
}
alert(func(3));//3
//Объясните почему.

/*Задача 7
Что выведет каждый из алертов в результате выполнения следующего кода:*/

function func(num) {
	if (num <= 0) {//если num < 0 то возвращает положительно 
		return Math.abs(num);// из отрицательного делает положительное
	} else {
		return num * num; // в ином случае умножает
	}
}
alert(func(10));// умножает
alert(func(-5)); //возвращает в положительно
//Объясните почему.

/*Задача 8
Что выведет каждый из алертов в результате выполнения следующего кода:*/

function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	}
	return num * num;
}
alert(func(10));//100
alert(func(-5));//5
//Объясните почему.

/*Цикл и return
Пусть у нас есть функция, возвращающая сумму чисел от 1 до 5:*/

function func() {
	let sum = 0;
	for (let i = 1; i <= 5; i++) {
		sum += i;
	}
	// console.log(sum);//15
	return sum;
}
let result = func();
alert(result); // выведет 15!!!!!!!!!!!

//Пусть теперь мы расположим return внутри цикла, вот так:

function func() {
	let sum = 0;

	for (let i = 1; i <= 5; i++) {
		sum += i;
		return sum;
	}
}
let result = func();
alert(result);//1

/*В этом случае цикл прокрутится лишь одну итерацию и произойдет автоматический выход из 
функции (ну и заодно из цикла). А за одну итерацию цикла в переменной sum окажется лишь число 
1, а не вся нужная сумма.

Задача 9
Что выведется на экран в результате выполнения следующего кода:*/

function func(num) {
	let sum = 0;
	for (let i = 1; i <= num; i++) {
		sum += i;
		return sum;
	}
}
console.log(func(5));//1 цикл выполниться 1 раз

function func(num) {
	let sum = 0;
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
}
console.log(func(5));//15 !!!!!!!!!
//Объясните почему.Что хотел сделать автор данного кода ? Исправьте ошибку автора.

/*Применение return в цикле
То, что return расположен внутри цикла, не всегда может быть ошибкой.В следующем примере 
сделана функция, которая определяет, сколько первых элементов массива нужно сложить, чтобы 
сумма стала больше или равна 10:*/

function func(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		// Если сумма больше или равна 10:
		if (sum >= 10) {
			return i + 1; // выходим из цикла и из функции
		}
	}
}
let result = func([1, 2, 3, 4, 5]);
console.log(result);//4!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*А в следующем примере сделана функция, которая вычисляет, сколько целых чисел, начиная с 1, 
нужно сложить, чтобы результат был больше 100:*/

function func() {
	let sum = 0;
	let i = 1;
	while (true) { // бесконечный цикл
		sum += i;
		if (sum >= 100) {
			return i; // цикл крутится пока не выйдет тут
		}
		i++;
	}
}
console.log(func());//цикл вернется 14 раз!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*Задача 10
Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока 
результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось 
для достижения результата.*/

function func(num) {
	let i = 0;
	while (true) {
		if (num <= 10) return i;
		num /= 2;
		i++;
	}
}
console.log(func(300));//5!!!!!!!!!!!!!11


/*Приемы работы с return
Существуют некоторые приемы работы с return, упрощающие код.Рассмотрим, к примеру, следующий код:*/

function func(num) {
	let result;
	if (num >= 0) {
		result = Math.sqrt(num);
	} else {
		result = 0;
	}
	return result;
}
console.log(func(3));//1.7320508075688772

/*Как вы видите, в данном коде в зависимости от условия в переменную result будет попадать либо 
одно, либо другое значение.А последней строкой функции содержимое переменной result возвращается 
через return.
Давайте перепишем этот код в более сокращенной форме, избавившись от ненужной здесь переменной 
result:*/

function func(num) {
	if (num >= 0) {
		return Math.sqrt(num);
	} else {
		return 0;
	}
}
console.log(func(3));//1.7320508075688772

/*Задача 11
Дана следующая функция:*/

function func(num1, num2) {
	let result;
	if (num1 > 0 && num2 > 0) {
		result = num1 * num2;
	} else {
		result = num1 - num2;
	}
	return result;
}
console.log(func(3, 4));//12

// function func(num1, num2) {
// 	if (num1 > 0 && num2 > 0) {
// 		result = num1 * num2;
// 	} else {
// 		return result;
// 	}
// }
// console.log(func(3, 4));

function func(num1, num2) {
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;//3*4=12
	} else {
		return num1 - num2;
	}
}
console.log(func(3, 4));//12

/*Перепишите ее в сокращенной форме согласно изученной теории.*/