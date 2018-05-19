/**
 * Flag management
 * print flag for debugging.
 * @param {String} type: type of log
 * @param {String} text: log content
 */

exports.yellow = function printFlagAtStart(type, text) {
  console.log('\x1b[33m%s\x1b[0m', '[' + type + '] ' + text);
};

exports.green = function printFlagAtFinish(type, text) {
  console.log('\x1b[32m%s\x1b[0m', '[' + type + '] ' + text);
};

exports.blue = function printFlagAtFinish(type, text) {
  console.log('\x1b[36m%s\x1b[0m', '[' + type + '] ' + text);
};

exports.magenta = function printFlagAtFinish(type, text) {
  console.log('\x1b[35m%s\x1b[0m', '[' + type + '] ' + text);
};

