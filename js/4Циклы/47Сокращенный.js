"use strict";
/*Сокращенный синтаксис циклов в JavaScript
Сейчас мы с вами рассмотрим сокращенный синтаксис циклов.
Речь идет о том, что в циклах, подобно конструкциям if, фигурные скобки не 
обязательны. Если их опустить, то цикл выполнит только одну строку под ним.
Давайте посмотрим на примере. Пусть у нас есть некоторый цикл с фигурными скобками:*/
for (let i = 0; i <= 9; i++) {
    console.log(i); // выведет числа от 0 до 9
}
//Опустим фигурные скобки - и результат от этого не изменится:
for (let i = 0; i <= 9; i++)
    console.log(i); // выведет числа от 0 до 9
/*Я очень не рекомендую так делать, так как такой код часто приводит к ошибкам.
Посмотрим на примере. Внесу маленькое исправление в приведенный выше код 
(найдите какое) - и он перестанет работать:*/
for (let i = 0; i <= 9; i++);
console.log(i); // выдаст ошибку
/*Итак, что же я исправил?
Проблема возникла из-за того, что я поставил точку с запятой после скобки ) 
от цикла. В таком случае получится так называемый цикл без тела: он просто прокрутится 
внутри, а следующая строчка уже не будет к нему относится.
Поэтому, во избежание проблем, я всегда рекомендую ставить фигурные скобки в циклах.
Кстати, цикл без тела иногда используется, вы увидите примеры его применения при разборах 
задач на циклы.*/