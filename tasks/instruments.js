
/**
 * Task: Gather Instrument files from private repo
 */

const jetpack = require('fs-jetpack');
const Mustache = require('mustache');

var instruments = function(cb){
    var filePath = jetpack.path('..', 'instrument-definitions', 'docs');
    var options = {"instrument-settings": "", "instrument-calibrations": ""};
    if(filePath){
        var files = jetpack.find(filePath, {matching: ["*.md"] });
        for(var f in files){
            var info = jetpack.inspect(files[f]);
            var content = jetpack.read(files[f]);

            // Check if settings
            if(info.name && info.name.match(/^settings/)){
                var tab = `\n::: tab "${content.match(/^(# Settings -\s?)(.*)/m)[2]}"\n`;
                content = content.replace(/^(# Settings -)/gm,'#');
                content = content.replace(/^(#+)/gm,'$1##');
                options["instrument-settings"] += `${tab}\n${content}\n:::\n\n`;
            }
            if(info.name && info.name.match(/^calibrations/)){
                var tab = `\n::: tab "${content.match(/^(# Calibrations -\s?)(.*)/m)[2]}"\n`;
                content = content.replace(/^(# Calibrations -)/gm,'#');
                content = content.replace(/^(#+)/gm,'$1##');
                options["instrument-calibrations"] += `${tab}\n${content}\n:::\n\n`;
            }
        }
        for(var out in options){
            if(options[out] == "")
                continue;
            options[out] = `:::: tabs\n${options[out]}\n::::\n`;
            var tempPath = jetpack.path('instruments', 'docs', `${out}.md`);
            var template = jetpack.read(tempPath);
            var md = Mustache.render(template, options);
            var docPath = jetpack.path('docs', 'instruments', `${out}.md`);
            jetpack.write(docPath, md);                
        }
    }
    else{
        console.log("Path to instrument-definitions repo does not exist.");
    }
	cb();
};

module.exports = instruments;