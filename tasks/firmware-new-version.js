/**
 * Task: Generate a documentation for a new firmware version
 */

const jetpack = require('fs-jetpack');
const moment = require('moment-timezone');
const chalk = require('chalk');
var argv = require('minimist')(process.argv);

const firmwareNewVersion = function(cb){
    var versions = jetpack.read('./firmware/versions.json', 'json' );
    var latest = versions[versions.length-1];
    var newversion = parseFloat(argv.version);
    if(!jetpack.exists(`./firmware/${newversion}`)){
        jetpack.copy(`./firmware/${latest.version}`, `./firmware/${newversion}`, { matching: '*.json' });
        versions.push({
            "version": newversion,
            "instruments": [],
            "releaseDate": moment()
        });
        versions.sort(function(a,b){ 
            return a.version-b.version;
        });
        jetpack.write('./firmware/versions.json', versions, {jsonIndent: 2} );
        console.log(chalk.green(`Version ${newversion} created.`));
    }
    else{
        console.log(chalk.red(`Version ${newversion} already exists.`));
    }
    cb();
};

module.exports = firmwareNewVersion;