
/**
 * Task: Gather Instrument files from private repo
 */

const jetpack = require('fs-jetpack');
const Mustache = require('mustache');
const natsort = require('natsort').default;

var instruments = function (cb) {
    /* Get templates from instruments documentation folder */
    var filePath = jetpack.path('..', 'instrument-definitions', 'docs');
    var templates = jetpack.find('instruments/docs', { matching: ["*.md"] });
    var options = {};
    var content = "";
    templates.map(function (x) {
        var file = jetpack.inspect(x);
        options[file.name.slice(0, -3)] = "";
    });

    /* Check if instrument-definitions repo exists */
    if (filePath) {

        /* Get all the instrument settings files */
        var files = jetpack.find(filePath, { matching: ["settings-*.md", "!*-detailed.md"] });
        files = files.sort(natsort({ desc: true, insensitive: true }));

        /* Read files and create content for tabs in documentation settings */
        for (var f in files) {
            content = jetpack.read(files[f]);
            var tab = `\n::: tab ${content.match(/^(# Settings -\s?)(.*)/m)[2]}\n`;
            content = content.replace(/^(# Settings -)/gm, '#');
            content = content.replace(/^(#+)/gm, '$1##');
            content = content.replace(/!\[([^\]]*)\]\((.*?)\s*("(?:.*[^"])")?\s*\)/g, function (match, g1, g2, g3) {
                return `![${g1}](${g2.substr(1)})`;
            });
            options["instrument-settings"] += `${tab}\n${content}\n:::\n`;
        }

        /* Read files and add calibrations to calibration settings */
        files = jetpack.find(filePath, { matching: ["calibrations-*.md", "assistants-*.md", "!*-detailed.md"] });
        files = files.sort(natsort({ desc: true, insensitive: true }));
        for (f in files) {
            var file = jetpack.inspect(files[f]);
            content = jetpack.read(files[f]);
            content = content.replace(/^#\s{0,}(Calibrations|Assistants)(.*)\n\n/gm, '');
            content = content.replace(/^(#+)/gm, '$1#');
            content = content.replace(/!\[([^\]]*)\]\((.*?)\s*("(?:.*[^"])")?\s*\)/g, function (match, g1, g2, g3) {
                return `![${g1}](${g2.substr(1)})`;
            });
            basename = file.name.slice(0, -3).replace(/(calibrations-|assistants-)/g, '');
            var type = file.name.slice(0, -3).split('-')[0];
            if (options[basename] !== undefined && options[basename] == "")
                options[basename] = {};
            options[basename][type] = content;
        }
        for (var out in options) {
            if (options[out] == "")
                continue;
            var tempPath = jetpack.path('instruments', 'docs', `${out}.md`);
            var template = jetpack.read(tempPath);
            var docPath = "";
            var md = "";
            if (out.match(/settings/)) {
                options[out] = `:::: tabs type:card\n${options[out]}\n::::`;
                docPath = jetpack.path('docs', 'instruments', `${out}.md`);
                md = Mustache.render(template, options);
                /* find images in settings and copy them */
                var imgs = options[out].match(/\!\[([^\]]*)\]\((.*?)\s*("(?:.*[^"])")?\s*\)/gm);
                if (imgs) {
                    imgs = imgs.map(function (x) {
                        var img = x.match(/\!\[([^\]]*)\]\((.*?)\s*("(?:.*[^"])")?\s*\)/)[2];
                        var p = jetpack.path(filePath, '..',  img);
                        if (jetpack.exists(p))
                            jetpack.copy(p, jetpack.path('docs', 'instruments', img), { overwrite: true });
                        else
                            console.log(`Error (Instruments): ${p}`);
                    });
                }
            }
            else {
                docPath = jetpack.path('docs', 'calibrations', `${out}.md`);
                md = Mustache.render(template, options[out]);
                Object.keys(options[out]).forEach(function (l) {
                    var imgs = options[out][l].match(/\!\[([^\]]*)\]\((.*?)\s*("(?:.*[^"])")?\s*\)/gm);
                    if (imgs) {
                        imgs = imgs.map(function (x) {
                            var img = x.match(/\!\[([^\]]*)\]\((.*?)\s*("(?:.*[^"])")?\s*\)/)[2];
                            /* find images in settings and copy them */
                            var p = jetpack.path(filePath, '..', img);
                            if (jetpack.exists(p)) {
                                jetpack.copy(p, jetpack.path('docs', 'calibrations', img), { overwrite: true });
                            }
                            else
                                console.log(`Error (Calibrations): ${p}`);
                        });
                    }
                });
            }
            jetpack.write(docPath, md);
        }
    }
    else {
        console.log("Path to instrument-definitions repo does not exist.");
    }
    cb();
};

module.exports = instruments;