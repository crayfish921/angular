const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {test: /\.ts$/, use: 'awesome-typescript-loader' },
            {test: /\.js$/, use: ['ng-annotate-loader', 'babel-loader'], exclude: /node_modules/},
            {test: /\.html$/, use: 'html-loader'},
            {test: /\.(ttf|eot|svg|woff|woff(2)?)$/, use: 'file-loader?name=fonts/[name].[ext]'},
            {test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader'},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Production'
        }),
    ]
};
