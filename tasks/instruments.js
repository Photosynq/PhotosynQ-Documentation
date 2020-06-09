
/**
 * Task: Gather Instrument files from private repo
 */

const jetpack = require('fs-jetpack');
const Mustache = require('mustache');
const natsort = require('natsort').default;

var instruments = function(cb){
    var filePath = jetpack.path('..', 'instrument-definitions', 'docs');
    var templates = jetpack.find('instruments/docs', { matching: ["*.md"] });
    var options = {};
    var content = "";
    templates.map(function(x){
        var file = jetpack.inspect(x);
        options[file.name.slice(0,-3)] = "";
    });

    if(filePath){
        var files = jetpack.find(filePath, {matching: ["settings-*.md","!*-detailed.md"] });
        files = files.sort(natsort({ desc: true, insensitive: true }));
        for(var f in files){
            content = jetpack.read(files[f]);
            var tab = `\n::: tab ${content.match(/^(# Settings -\s?)(.*)/m)[2]}\n`;
            content = content.replace(/^(# Settings -)/gm,'#');
            content = content.replace(/^(#+)/gm,'$1##');
            options["instrument-settings"] += `${tab}\n${content}\n:::\n`;
        }

        files = jetpack.find(filePath, {matching: ["calibrations-*.md","assistants-*.md","!*-detailed.md"] });
        files = files.sort(natsort({ desc: true, insensitive: true }));
        for(f in files){
            var file = jetpack.inspect(files[f]);
            content = jetpack.read(files[f]);
            content = content.replace(/^#\s{0,}(Calibrations|Assistants)(.*)\n\n/gm,'');
            content = content.replace(/^(#+)/gm,'$1#');
            basename = file.name.slice(0,-3).replace(/(calibrations-|assistants-)/g,'');
            var type = file.name.slice(0,-3).split('-')[0];
            if(options[basename] !== undefined && options[basename] == "" )
                options[basename] = {};
            options[basename][type] = content;
        }
        for(var out in options){
            if(options[out] == "")
                continue;
            var tempPath = jetpack.path('instruments', 'docs', `${out}.md`);
            var template = jetpack.read(tempPath);
            var docPath = "";
            var md = "";
            if(out.match(/settings/)){
                options[out] = `:::: tabs type:card\n${options[out]}\n::::`;
                docPath = jetpack.path('docs', 'instruments', `${out}.md`);
                md = Mustache.render(template, options);
            }
            else{
                docPath = jetpack.path('docs', 'calibrations', `${out}.md`);
                md = Mustache.render(template, options[out] );
                console.log(Object.keys(options[out]))
            }
            jetpack.write(docPath, md);
        }
    }
    else{
        console.log("Path to instrument-definitions repo does not exist.");
    }
	cb();
};

module.exports = instruments;