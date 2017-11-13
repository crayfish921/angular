let testsConfig = require('./webpack.dev.js');

testsConfig.entry = './webpack.tests.js';
testsConfig.plugins = [];

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            './webpack.tests.js'
        ],
        preprocessors: {
            'webpack.tests.js': ['webpack'],
        },
        exclude: [
            'node_modules'
        ],
        webpack: testsConfig,
        browsers: ['PhantomJS'],
    })
};