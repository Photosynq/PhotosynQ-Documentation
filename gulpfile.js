/**
 * Build all additional files for the documentation
 * including pdfs and ebook as well as the firmware
 * command file.
 */

const { series, watch } = require('gulp');

// Require gulp tasks
const cleanAll = require('./tasks/clean-all');
const macros = require('./tasks/macros');
const testLinks = require('./tasks/test-links');

const firmwareNewCommand = require('./tasks/firmware-new-command');
const firmwareDocs = require('./tasks/firmware-docs');
const firmwareNewVersion = require('./tasks/firmware-new-version');
const firmwareCompile = require('./tasks/firmware-compile');
const instruments = require('./tasks/instruments');

exports.cleanAll = series(cleanAll);
exports.macros = series(macros);
exports.testLinks = series(testLinks);

exports.firmwareNewCommand = series(firmwareNewCommand);
exports.firmwareDocs = series(firmwareDocs);
exports.firmwareNewVersion = series(firmwareNewVersion);
exports.firmwareCompile = series(firmwareCompile);

exports.instruments = series(instruments);

exports.build = series(cleanAll, firmwareCompile);

exports.default = function () {
  watch('./firmware/**/*.json', series(firmwareDocs));
};