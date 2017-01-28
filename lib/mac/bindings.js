var os = require('os');
var osRelease = parseFloat(os.release());

var bindings

if (osRelease < 17 ) {
  bindings = require('./yosemite');
} else {
  bindings = require('./highsierra');
}

bindings.setDeviceName = function (name) {
  console.warn('bleno does not support setDeviceName() on macOS/OSX');
};

module.exports = bindings
