"use strict";
/*Преобразование логического типа в JavaScript
Сейчас мы с вами рассмотрим, как ведут себя специальные значения true и false
при преобразовании их к строкам или числам. Эти знания вам потребуются в 
следующих уроках.

Итак, попробуем выполнить преобразование к строке, используя функцию String:
     alert(String(true));  // выведет 'true'
     alert(String(false)); // выведет 'false'
Как вы видите, значение true преобразуется в строку 'true', а значение false - 
в строку 'false'. То есть при попытке сложения строки и логического значения, это 
логическое значение преобразуется в строку и произойдет сложение строк:
     alert('a' + true);    // выведет 'atrue'
При приведении к числу значение true преобразуется в число 1, а значение false - 
в число 0:
     alert(Number(true));  // выведет 1
     alert(Number(false)); // выведет 0
Во всех математических операциях логические значения вначале преобразуются к числу.
 Пример:
     alert(true + 1);     // выведет 2
     alert(true + true);  // выведет 2
Задача 1
Не запуская код, определите, что выведется на экран:*/
console.log(true + 3); //4
/*Задача 2
Не запуская код, определите, что выведется на экран:*/
console.log(true + true); //2
/*Задача 3
Не запуская код, определите, что выведется на экран:*/
console.log(true - true); //0
/*Задача 4
Не запуская код, определите, что выведется на экран:*/
console.log(true + false); //1
/*Задача 5
Не запуская код, определите, что выведется на экран:*/
console.log('1' + true); //1true
/*Задача 6 
Не запуская код, определите, что выведется на экран:*/
console.log(String(true) + 1); //true1
/*Задача 7
Не запуская код, определите, что выведется на экран:*/
console.log(String(true) + Number(true)); //true1