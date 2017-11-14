import 'angular';
import 'angular-mocks';
import '../src/index.ts';

const testsContext = require.context("./../src", true, /spec\.ts$/);
testsContext.keys().forEach(testsContext);