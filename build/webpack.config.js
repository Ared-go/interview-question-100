const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const isPrd = process.NODE_ENV === 'production'
module.exports = {
    mode: isPrd ? 'production' : 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash:8].js'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            // include: path.resolve(__dirname, 'src')
        }]
    },
    devServer: {
        host: 'localhost',
        open: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}