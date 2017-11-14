'use strict';

const KarmaServer = require('karma').Server;

new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
}).start();

console.log();