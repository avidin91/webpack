# Webpack
> https://www.youtube.com/watch?v=eSaF8NXeNsA

Урок по вебпаку с данным проектом

## Установка webpack
> npm i -D webpack webpack-cli

webpack-cli позволяет работать с вебпаком в консоли
-D это dev-зависимость - только для разработки.

> webpack.config.js

Правильное название конфига. По умолчанию вебпак ищет его, но его можно изменить.

> npm i -D html-webpack-plugin

Сам подключает скрипты в html.

> npm i -D clean-webpack-plugin

Чистит dist.

## Лоадеры
Лоадеры помогают вебпаку работать с другими типами файлов. По умолчанию вебпак понимает только JS и JSON.

> npm i -D style-loader css-loader

Css-loader поозволяет вебпаку понимать импорты и ипортировать в js различные стили. Style-loader добавляет стили в секцию head в html. Этих пакетов по умолчанию в вебпак нет.

> npm i -D file-loader

Позволяет работать с файлами, с картинками.

> npm i -D xml-loader

Для работы с xml.

>  npm i -D csv-loader

Для работы с csv.

## Полезные команды
> "watch": "webpack --mode development --watch"

Позволяет вебпаку следить за изменениями в файлах, не прерывает процесс dev, и постоянно обновляет файлы.

## Дополнительно
1) Вебпак по умолчанию работает с JSON. Он сам обернёт JSON в JSON.parse.
2) "main": "index.jsx", в package.json меняем на "private": "true", так как мы не публикуем данный пакет как npm пакет. Указываем, что у нас приватный пакет, который не нужно публиковать.
3) npm i -D webpack-dev-server - следит за изменениями в коде, и обновляет браузер при изменениях. В package.json добавляем "start": "webpack-dev-server --mode development --open", где -- open автоматически открывает окно в браузере. Он не добавляет в папку dist файлы, а сохраняет сразу в оперативку, чтобы быстрее обновлялось. Потом надо остановить процесс, и запустить билд, и папка будет наполнятся контентом. Webpack Dev Server используется только в режиме разработки.
4) npm i -D copy-webpack-plugin 
5) npm install css-minimizer-webpack-plugin --save-dev минимизирует CSS

## Подключение библиотек
> CSS-библиотеки

npm install normalize.css - библиотека для примера

@import '~normalize.css'; - через тильду подключаем в стили. Тильда говорит, что искать надо в нод модулях.

> JS-библиотеки

npm i -S jquery
import * as $ from 'jquery';


