/**
 * Task: Remove files after distribution files are created
 */

const jetpack = require('fs-jetpack');

const clean = function(cb){
    jetpack.find('./dist', {matching: ['*.html','*.md']}).forEach(jetpack.remove);
    cb();
};

module.exports = clean;