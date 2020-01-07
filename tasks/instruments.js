
/**
 * Task: Gather Instrument files from private repo
 */

const jetpack = require('fs-jetpack');
const Mustache = require('mustache');

var instruments = function(cb){
    var filePath = jetpack.path('..', 'instrument-definitions', 'docs');
    if(filePath){
        var files = jetpack.find(filePath, {matching: ["*.md"] });
        for(var f in files){
            var info = jetpack.inspect(files[f]);
            var docPath = jetpack.path('instruments', 'docs', `instrument-${info.name}`);
            var content = jetpack.read(files[f]);
            if(docPath){
                var template = jetpack.read(docPath);
                // Change header level here
                content = content.replace(/^(# Settings -)|(# Calibrations - )/gm,'# ');
                content = content.replace(/^(#+)/gm,'$1##');
                var options = { };
                options[`instrument-${info.name.replace(/\.md$/, "")}`] = content;
                var md = Mustache.render(template, options);
	            jetpack.write(`./docs/instruments/instrument-${info.name}`, md);
            }
        }
    }
    else{
        console.log("Path to instrument-definitions repo does not exist.");
    }
	cb();
};

module.exports = instruments;