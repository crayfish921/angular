const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {test: /\.js$/, use: ['ng-annotate-loader', 'babel-loader']},
            {test: /\.html$/, use: 'html-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    }
};