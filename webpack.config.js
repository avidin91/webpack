const path = require('path') // модуль для работы с путями на платформе
const HTMLWebpackPlugin = require('html-webpack-plugin') // создаём класс плагина
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'), // тут можно указать, где у нас лежат исходники
    mode: 'development', // собираем в режиме разработки
    entry: { // точка входа, может быть одна строкой или несколько объектом
        main: './index.js',
        analytics: './analytics.js'
    },
    output: { // куда стоит выкладывать результат работы webpack
        filename: '[name].[contenthash].js', // на выходе мы получим единственный файл bundle.js. С паттерном [name] мы будем динамически создавать файлы из чанков (точек входа). contenthash - будет создавать имя файла в зависимости от контента файла.
        path: path.resolve(__dirname, 'dist') // __dirname - системная директория
    },
    plugins: [ // список всех плагинов, которые есть у нас в webpack. Чтобы плагин работал, надо добавить новый инстанс класса плагина.
        new HTMLWebpackPlugin({ // Плагин сам подключит скрипты.
            template: './index.html' // Копирует наш index
        }),
        new CleanWebpackPlugin() // Чистит dist
    ]
}