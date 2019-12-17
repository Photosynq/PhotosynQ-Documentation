/**
 * Build all additional files for the documentation
 * including pdfs and ebook as well as the firmware
 * command file.
 */

const {series, watch} = require('gulp');

// Require gulp tasks
const cleanAll = require('./tasks/clean-all');
const clean = require('./tasks/clean');
const compile = require('./tasks/compile');
const tag = require('./tasks/tag');
const {buildHTML} = require('./tasks/build-html');
const buildPDF = require('./tasks/build-pdf');
const buildEPUB = require('./tasks/build-epub');
const macros = require('./tasks/macros');
const testLinks = require('./tasks/test-links');

const firmwareNewCommand = require('./tasks/firmware-new-command');
const firmwareDocs = require('./tasks/firmware-docs');
const firmwareNewVersion = require('./tasks/firmware-new-version');
const firmwareCompile = require('./tasks/firmware-compile');

exports.buildEPUB = series (buildEPUB);
exports.macros = series (macros);
exports.testLinks = series (testLinks);

exports.firmwareNewCommand = series (firmwareNewCommand);
exports.firmwareDocs = series (firmwareDocs);
exports.firmwareNewVersion = series (firmwareNewVersion);
exports.firmwareCompile = series (firmwareCompile);

exports.default = function() {
  watch('./firmware/**/*.json', series(firmwareDocs));
};

exports.build  = series( cleanAll, compile, buildHTML, buildPDF, buildEPUB, firmwareCompile, clean );
