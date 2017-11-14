import 'angular';
import 'angular-mocks';
import './index.ts';

const testsContext = require.context("./services", true, /spec\.ts$/);
testsContext.keys().forEach(testsContext);