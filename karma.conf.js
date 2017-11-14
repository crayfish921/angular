let testsConfig = require('./webpack/webpack.dev.js');

testsConfig.entry = './webpack/webpack.tests.js';
testsConfig.plugins = [];

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            './webpack/webpack.tests.js'
        ],
        preprocessors: {
            'webpack/webpack.tests.js': ['webpack'],
        },
        exclude: [
            'node_modules'
        ],
        webpack: testsConfig,
        browsers: ['PhantomJS'],
    })
};