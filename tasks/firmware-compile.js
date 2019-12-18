/**
 * Task: Generate new command in latest firmware folder
 */

const jetpack = require('fs-jetpack');
const chalk = require('chalk');

const firmwareCompile = function(cb){

    var output = {};
    
    var dirs = jetpack.find('./firmware', {matching: ['!docs'], files:false, directories: true });
    for(var i in dirs){
        var version = parseFloat( jetpack.inspect(dirs[i]).name );
        output[version] = {};
        var files = jetpack.find(dirs[i], {matching: ['*.json'], files:true, directories: false });
        for(var f in files){
            var file = jetpack.read(files[f], 'json');
            output[version][file.name] = file;
        }
    }
    jetpack.write('./dist/firmware-commands.json', output, { jsonIndent: 0 });
    cb();
};

module.exports = firmwareCompile;