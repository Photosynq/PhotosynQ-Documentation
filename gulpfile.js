/**
 * Build all additional files for the documentation
 * including pdfs and ebook as well as the firmware
 * command file.
 */

const {series, parallel, watch} = require('gulp');

// Require gulp tasks
const cleanAll = require('./tasks/clean-all');
const clean = require('./tasks/clean');
const compileMD = require('./tasks/compile-md');
const {showTag} = require('./tasks/tag');
const {buildHTML} = require('./tasks/build-html');
const buildPDF = require('./tasks/build-pdf');
const buildEPUB = require('./tasks/build-epub');
const macros = require('./tasks/macros');
const testLinks = require('./tasks/test-links');

const firmwareNewCommand = require('./tasks/firmware-new-command');
const firmwareDocs = require('./tasks/firmware-docs');
const firmwareNewVersion = require('./tasks/firmware-new-version');
const firmwareCompile = require('./tasks/firmware-compile');

const instruments = require('./tasks/instruments');
const compilebuild = require('./tasks/compile-build');

exports.cleanAll = series (cleanAll);
exports.compileMD = series (compileMD);
exports.buildHTML = series (buildHTML);
exports.buildPDF = series (buildPDF);
exports.buildEPUB = series (buildEPUB);
exports.macros = series (macros);
exports.testLinks = series (testLinks);
exports.showTag = series (showTag);

exports.firmwareNewCommand = series (firmwareNewCommand);
exports.firmwareDocs = series (firmwareDocs);
exports.firmwareNewVersion = series (firmwareNewVersion);
exports.firmwareCompile = series (firmwareCompile);

exports.instruments = series (instruments);
exports.compilebuild = series ( compilebuild );

exports.build  = series( cleanAll, showTag, compilebuild, compileMD, buildHTML, parallel(buildPDF, buildEPUB, firmwareCompile), clean );

exports.default = function() {
  watch('./firmware/**/*.json', series(firmwareDocs));
};