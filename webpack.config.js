const path = require('path') // модуль для работы с путями на платформе
const HTMLWebpackPlugin = require('html-webpack-plugin') // создаём класс плагина
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const babelOptions = preset => {
    const opts = {presets: [],}
    if (preset) {
        opts.presets.push(preset)
    }
    return opts
}

module.exports = {
    context: path.resolve(__dirname, 'src'), // тут можно указать, где у нас лежат исходники
    mode: 'development', // собираем в режиме разработки
    entry: { // точка входа, может быть одна строкой или несколько объектом
        main: './index.jsx',
        analytics: './analytics.ts'
    },
    output: { // куда стоит выкладывать результат работы webpack
        filename: '[name].[contenthash].js', // на выходе мы получим единственный файл bundle.js. С паттерном [name] мы будем динамически создавать файлы из чанков (точек входа). contenthash - будет создавать имя файла в зависимости от контента файла.
        path: path.resolve(__dirname, 'dist') // __dirname - системная директория
    },
    resolve: {
        extensions: ['.js', '.json', '.png', '.css', '.xml', '.csv'], // позволяет указать расширения, которые webpack должен понимать по умолчанию. Чтобы мы не писали их в импортах.
        alias: { // позволяет исправить относительный путь в импортах на абсолютный
            '@modules' : path.resolve(__dirname, 'src/modules'),
            '@' : path.resolve(__dirname, 'src')
        }
    },
    optimization: {
        splitChunks: {
            chunks: "all" // с помощью этой настройки вебпак находит общие библионтеки, и вообще библиотеки, и выносит их в отдельный файл
        }
    },
    devServer: {
        static: {
            directory: './src',
        },
        port: 4200
    },
    plugins: [ // список всех плагинов, которые есть у нас в webpack. Чтобы плагин работал, надо добавить новый инстанс класса плагина.
        new HTMLWebpackPlugin({ // Плагин сам подключит скрипты.
            template: './index.html' // Копирует наш index
        }),
        new CleanWebpackPlugin(), // Чистит dist
        new CopyWebpackPlugin({ // позволяет копировать из одной папки в другую. При этом пустой путь в to указывает на корень
            patterns: [
                {from: 'assets/favicon.ico', to: ''}
            ]
        })
    ],
    module: { // Лоадеры позволяют вебпаку работать с другими типами файлов
        rules: [
            {
                test: /\.css$/, // Регулярное выражение. Если вебпаку попадаются файлы, которые соответствуют данному патерно, то ему надо использовать различные типы ладеров в use[]
                use: ['style-loader', 'css-loader'], // вебпак идёт справа налево, поэтому порядок важен. Вначале он пропускает всё через css-loader, а потом через style-loader.
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource'
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-env')
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-typescript')
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react')
                }
            },
        ]
    }
}