let testsConfig = require('./webpack.dev.js');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            {pattern: './**/*.spec.ts'}
        ],
        preprocessors: {
            './**/*.spec.ts': ['webpack'],
        },
        exclude: [
            'node_modules'
        ],
        webpack: testsConfig,
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        concurrency: Infinity
    })
};