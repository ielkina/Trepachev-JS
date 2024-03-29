"use strict";
/*Введение в язык JavaScript для новичков
Язык JavaScript предназначен для выполнения в браузере наряду с HTML и CSS.
Но, если эти языки предназначены для верстки структуры сайта, то JavaScript
позволяет "оживлять" web-страницы - делать их реагирующими на действия
пользователя или демонстрировать некоторую динамичность (к примеру, смена
картинок в блоке или красивые плавно выпадающие менюшки).
Как запустить JavaScript
JavaScript код пишется прямо на HTML странице внутри тега script:

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Это заголовок тайтл</title>
		<script>
			здесь пишем JavaScript код
		</script>
	</head>
	<body>
		Это основное содержимое страницы.
	</body>
</html>

Тег script можно располагать в любом месте страницы - как в <head>, 
так и в <body>.
Напишем первую программу
Давайте напишем нашу первую программу на JavaScript. Вот она:

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Моя первая программа</title>
		<script>
			alert('Привет, мир!');
		</script>
	</head>
	<body>
		моя первая программа
	</body>
</html>

Скопируйте этот код и разместите в HTML файле. Затем открой этот файл в 
браузере - и вы увидите диалоговое окошко с текстом.
Разберем код программы
Давайте разберем код написанной нами выше программы. Первым понятием, 
которое вам нужно узнать, являются функции. Функции позволяют выполнять 
некоторые действия. В нашем примере есть функция alert(), которая выводит
текст на экран в виде диалогового окошка.
Функция состоит из имени (в нашем случае это alert) и круглых скобок, написанных
после этого имени. В этих круглых скобках следует писать параметры функции. В 
нашем случае параметром является текст, который выводится на экран.
В нашем случае функция имеет один параметр, однако бывают функции, в которые 
нужно передавать несколько параметров. В этом случае эти параметры пишутся 
через запятую.
Замечание
В дальнейшем я не буду расписывать то, как подключается JavaScript, а буду 
просто писать JavaScript код, подразумевая, что вы его будете записывать в 
тегах script. С учетом этого замечания наша программа станет выглядеть вот так:
alert('Привет, мир!');
Строгий режим
Изучите теорию по следующей ссылке: https://learn.javascript.ru/strict-mode.
Перепишем наш код в строгом режиме:
"use strict";
alert('Привет, мир!');
В дальнейшем для простоты я не буду указывать то, что код работает в строгом 
режиме (но подразумевается, что да, и вы всегда первой строчкой пишите
"use strict").
Комментарии
Подобно языкам HTML и CSS в языке JavaScript можно оставлять комментарии. 
Они бывают однострочными и многострочными.

Вот пример однострочного комментария:
alert('Привет, мир!'); // комментарий

Вот пример многострочного комментария:
/*
	комментарий
*/
alert('Привет, мир!');