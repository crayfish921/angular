let testsConfig = require('./webpack.dev.js');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: ['components/todo-app.controller.spec.ts'],
        preprocessors: {
            'components/todo-app.controller.spec.ts': ['webpack'],
        },
        webpack: testsConfig,
        mime: {
            'text/x-typescript': ['ts']
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    })
};