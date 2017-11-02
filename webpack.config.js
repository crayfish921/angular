const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {test: /\.js$/, use: ['ng-annotate-loader', 'babel-loader'], exclude: /node_modules/},
            {test: /\.html$/, use: 'html-loader'},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(ttf|eot|svg|woff|woff(2)?)$/, use: 'file-loader?name=fonts/[name].[ext]'},
            {test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader'}
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new UglifyJSPlugin()
    ]
};