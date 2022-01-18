"use strict";
/*Оператор in в JavaScript
С помощью оператора in можно проверять наличие свойства в объекте. 
Давайте посмотрим на примере. Пусть у нас дан вот такой объект:*/
let obj = { a: 1, b: 2, c: 3 };
//Давайте проверим наличие в нашем объекте какого-нибудь свойства:
console.log('b' in obj); // выведет true
//А теперь выполним проверку для несуществующего свойства:
console.log('x' in obj); // выведет false
/*Задача 1
Скажите, что выведется в консоль в результате выполнения следующего кода:*/

let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
console.log('e' in obj); //true
console.log('f' in obj); //false