const path = require('path');

module.exports = {
    entry: 'app.js',
    output: {
        filename: '[filename].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {test: /\.js$/, use: ['ng-annotate-loader', 'babel-loader']},
        ]
    }
};