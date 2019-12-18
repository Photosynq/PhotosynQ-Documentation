/**
 * Task: Empty the distribution folder
 */

const jetpack = require('fs-jetpack');

const clean = function(cb){
    jetpack.find('./dist', {matching: ['*']}).forEach(jetpack.remove);
    cb();
};

module.exports = clean;