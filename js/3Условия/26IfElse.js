"use strict";
/*Конструкция if-else в JavaScript
Сейчас мы с вами изучим специальную конструкцию if-else, которая позволяет выполнять 
некоторый код в зависимости от выполнения какого-либо условия.
С помощью конструкции if-else мы можем задать программе, к примеру, вопрос "больше 
ли переменная a, чем переменная b", и в зависимости от ответа выполнить или один код, 
или другой.
Синтаксис конструкции выглядит так:*/
if (операция сравнения) {
    /*
    	расположенный здесь код выполниться,
    	если результат операция сравнения верный
    */
} else {
    /*
    	расположенный здесь код выполниться,
    	если результат операция сравнения неверный
    */
}
/*Для операций сравнения в JavaScript существует много операторов.Давайте 
приступим к их изучению.
Операторы больше и меньше
Для проверки того, которое из значений больше, а которое меньше, используются 
операторы больше > , больше или равно >= , меньше < , меньше или равно <= .
Изучим их работу на практическом примере.Пусть у нас есть переменная test с каким - 
то значением:*/
let test = 1;
//Давайте проверим, значение этой переменной больше нуля или нет:
let test = 1;
if (test > 0) {
    alert('верно'); // сработает этот alert
} else {
    alert('неверно');
}
//А теперь поменяем значение переменной на отрицательное:
let test = -1; // поменяем значение переменной
if (test > 0) {
    alert('верно');
} else {
    alert('неверно'); // сработает этот alert
}
/*Пусть теперь значение переменной равно 0. В этом случае мы попадем в блок
else, так как в нашем условии написано, что переменная test должна быть строго 
больше нуля:*/
let test = 0;
if (test > 0) {
    alert('верно');
} else {
    alert('неверно'); // сработает этот alert
}
//Давайте поменяем условие на больше или равно:
let test = 0;
if (test >= 0) {
    alert('верно'); // сработает этот alert
} else {
    alert('неверно');
}
/*Операторы меньше < и меньше или равно <= работают аналогично.

Задача 1
Если переменная test больше 10, то выведите на экран слово 'верно', иначе выведите 
слово 'неверно'.*/
let test = 9;
if (test > 10) {
    console.log('Верно');
} else {
    console.log('Не верно'); //не верно
}

/*Задача 2
Если переменная test меньше 10, то выведите на экран слово 'верно', иначе выведите 
слово 'неверно'.*/
let test = 10;
if (test <= 10) {
    console.log('Верное');
} else {
    console.log('Не верное');
} //Верно

/*Задача 3
Если переменная test больше или равна 10, то выведите на экран слово 'верно', 
иначе выведите слово 'неверно'.*/
let test = 10;
if (test >= 10) {
    console.log('Верно');
} else {
    console.log('Не верно'); //верно
}

/*Задача 4
Если переменная test меньше или равна 10, то выведите на экран слово 'верно', иначе 
выведите слово 'неверно'.*/
let test = 10;
if (test <= 10) {
    console.log('Верно'); //
} else {
    console.log('Неверно');
}
/*Проверка на равенство
Для проверки двух значений на равенство используется оператор == (не путайте его с 
оператором = , который используется для присваивания).
Давайте для примера проверим, что test переменная равна 0:*/
let test = 0; // пусть значение переменной равно 0
if (test == 0) {
    alert('верно'); // сработает этот alert, так как переменная равна 0
} else {
    alert('неверно');
}
//Поменяем значение переменной так, чтобы условие не выполнялось:
let test = 1; // пусть значение переменной равно 1
if (test == 0) {
    alert('верно');
} else {
    alert('неверно'); // сработает этот alert, так как переменная НЕ равна 0
}

/*Задача 5 
Если переменная test равна 10, то выведите на экран слово 'верно', иначе выведите 
слово 'неверно'.*/
let test = 10;
if (test == 10) {
    console.log('Right'); //
} else {
    console.log('Not right');
}

/*Проверка на неравенство
Существует также оператор != , который наоборот, проверяет на неравенство.Давайте 
для примера проверим, что test переменная не равна 0:*/
let test = 1; // пусть значение переменной равно 1
if (test != 0) {
    alert('верно'); // сработает этот alert, так как переменная НЕ равна 0
} else {
    alert('неверно');
}
//Поменяем значение переменной:
let test = 0; // пусть значение переменной равно 0
if (test != 0) {
    alert('верно');
} else {
    alert('неверно'); // сработает этот alert, так как переменная равна 0
}

/*Задача 6 
Если переменная test не равна 10, то выведите на экран слово 'верно', иначе выведите 
слово 'неверно'.*/
let test = 10;
if (test != 10) {
    console.log('True');
} else {
    console.log('Not true'); //
}

/*Сравнение переменных
В примерах выше мы сравнивали переменную с каким - то числом.Но никто не запрещает
нам сравнивать две переменные.Смотрите пример:*/
let test1 = 1;
let test2 = 2;
if (test2 > test1) {
    alert('верно'); // сработает этот alert, так как test2 больше test1
} else {
    alert('неверно');
}

/*Задача 7 
Даны переменные test1 и test2.Проверьте, что значение какой из этих переменных
больше и выведите соответствующее сообщение на экран.*/
let test1 = 5,
    test2 = 9;
if (test1 > test2) {
    console.log('Холодно');
} else if (test1 < test2) {
    console.log('В точку'); //Выведет этот вариант
} else if (test1 != test2) {
    console.log('Неверно');
} else if (test1 >= test2) {
    console.log('Возможно и так!');
} else if (test1 == test2) {
    console.log('Спорно!');
} else if (test1 <= test2) {
    console.log('Как знать!');
}