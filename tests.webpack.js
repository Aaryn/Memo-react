require('core-js/es5');

var context = require.context('./js', true, /-spec\.js$/);
context.keys().forEach(context);