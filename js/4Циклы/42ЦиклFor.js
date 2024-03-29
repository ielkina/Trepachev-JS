"use strict";
/*Цикл for в JavaScript
Цикл for является альтернативой while. Он более сложен для понимания, но чаще 
всего его любят больше, чем while за то, что он занимает меньше строчек.
Вот синтаксис цикла for:*/
for (начальные команды; условие окончания; команды после прохода) {
    тело цикла
}
/*Начальные команды - это то, что выполнится перед стартом цикла. Они выполнятся 
только один раз. Обычно там размещают начальные значения счетчиков, например: i = 0.
Условие окончания цикла - это условие, при котором цикл будет крутится, пока оно 
истинное, например: i <= 10.
Команды после прохода цикла - это команды, которые будут выполнятся каждый раз при 
окончании прохода цикла. Обычно там увеличивают счетчики, например: i++.
Давайте с помощью цикла for выведем последовательно числа от 1 до 9:
/*
	В начале цикла i будет равно нулю,
	цикл будет выполнятся пока i <= 9,
	после каждого прохода к i прибавляется единица:
*/
for (let i = 1; i <= 9; i++) {
    console.log(i); // выведет 1, 2... 9
}
/*Задача 1
С помощью цикла for выведите в консоль числа от 1 до 100.*/
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

/*Задача 2
С помощью цикла for выведите в консоль числа от 11 до 33.*/
for (let i = 11; i <= 33; i++) {
    console.log(i);
}

/*Задача 3 
С помощью цикла
for выведите в консоль четные числа в промежутке от 0 до 100.*/
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

/*Задача 4 
С помощью цикла
for выведите в консоль нечетные числа в промежутке от 1 до 99.*/
for (let i = 1; i <= 99; i += 2) {
    console.log(i);
}

/*Задача 5 
С помощью цикла
for выведите в консоль числа от 100 до 0. */
for (let i = 100; i >= 0; i--) {
    console.log(i);
}