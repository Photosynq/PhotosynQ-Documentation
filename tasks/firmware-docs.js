/**
 * Task: Build firmware documentation
 */

const jetpack = require('fs-jetpack');
const Mustache = require('mustache');
const moment = require('moment-timezone');
const {spawnSync} = require('child_process');

function file_updated(file){
    let updated = false;
    try {
        updated = parseInt(spawnSync('git', ['log', '-1', '--format=%ct', file]).stdout.toString('utf-8')) * 1000
    } catch (e) { }
    return updated;
}

const docsFromFolder = function(files,version){
    var protocols = [];
    var consolecmds = [];

    var active = [];
    var deprecated = [];

    for (var f in files) {
        var content = jetpack.read(files[f], 'json') || null;
        if (content.deprecated)
            deprecated.push(files[f]);
        else
            active.push(files[f]);
    }

    files = active.concat(deprecated);

    for (var f in files) {
        var content = jetpack.read(files[f], 'json') || null;
        var document = '### ' + content.name.replace(/(\_)/g, '\\$1') + ((content.deprecated) ? ' <Badge text="deprecated" type="error"/>' : '') + '\n\n';
        if (content.description != "")
            document += content.description.replace(/(?<!`)</gm,'&lt;').replace(/>(?!`)/gm,'&gt;') + '\n\n';
        if (content.alias.length > 0)
            document += '**Alias:** ' + content.alias.map(function (a) {
                return '`' + a + '`';
            }) + '\n\n';

        if (content.input != "") {
            document += '**Input:** ';
            if (['array', 'boolean', 'number', 'object', 'string'].indexOf(content.input) > -1)
                document += `[${content.input}]`;
            else
                document += content.input;
            document += '\n\n';
        }

        if (content.values.length > 0)
            document += '**Values:**\n\n' + content.values.map(function (a) {
                return '+ ' + a;
            }).join(' ') + '\n\n';

        if (content.example != "" && content.type == 'console')
            document += '**Example:**\n\n```bash\n' + content.example + '\n```\n\n';

        if (content.example != "" && content.type == 'protocol')
            document += '**Example:**\n\n```javascript\n' + content.example + '\n```\n\n';

        if (content.dependencies.length > 0)
            document += '**Dependencies:**\n\n' + content.dependencies.map(function (a) {
                return `+ ${a}`;
            }).join('\n') + '\n\n';

        if (content.parent != "")
            document += '**Parent:** <' + content.parent + '>\n\n';

        if (Array.isArray(content.compatibility) && content.compatibility.length > 0) {
            document += '**Instruments:**\n\n';
            document += content.compatibility.map(function (a) {
                return `\`${a}\``;
            }).join(' ') + '\n\n';
        }

        document += `*Last Updated: ${ moment( file_updated(files[f]) || null ).format('LL') || 'unknown' }*\n\n`;

        if (content.type == 'console') {
            consolecmds.push(document.trim());
        }

        if (content.type == 'protocol') {
            protocols.push(document.trim());
        }
    }

    consolecmds = consolecmds.join('\n\n***\n\n').trim();
    protocols = protocols.join('\n\n***\n\n').trim();

    protocols += '\n\n';
    protocols += '[array]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array\n';
    protocols += '[number]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number\n';
    protocols += '[object]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object\n';
    protocols += '[string]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String\n';
    protocols += '[boolean]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean\n';

    // Build switch for versions
    if(version == 'latest'){
        var versions = jetpack.read('./firmware/versions.json', 'json' );
        var itmCMD = [];
        var itmP = [];
        for(var i in versions){
            if(i == versions.length-1)
                continue;
            itmCMD.push(`[v${versions[i].version}](./archive/console-commands-${versions[i].version}.md)`);
            itmP.push(`[v${versions[i].version}](./archive/commands-${versions[i].version}.md)`);
        }

        consolecmds = Mustache.render( jetpack.read('./firmware/docs/console-commands.md'), {
            "console-commands": consolecmds,
            "version": versions[i].version,
            "archive": `***\n\n**Previous Versions:** ${itmCMD.reverse().join(', ')}`
        });
        protocols = Mustache.render( jetpack.read('./firmware/docs/protocol-commands.md'), {
            "protocol-commands": protocols,
            "version": versions[i].version,
            "archive": `***\n\n**Previous Versions:** ${itmP.reverse().join(', ')}`
        });

        jetpack.write('./docs/instruments/console-commands.md', consolecmds);
        jetpack.write('./docs/protocols/commands.md', protocols);
    }
    else{
        consolecmds = Mustache.render( jetpack.read('./firmware/docs/console-commands-archive.md'), {
            "console-commands": consolecmds,
            "version": version
        });

        protocols = Mustache.render( jetpack.read('./firmware/docs/protocol-commands-archive.md'), {
            "protocol-commands": protocols,
            "version": version
        });

        jetpack.write(`./docs/instruments/archive/console-commands-${version}.md`, consolecmds);
        jetpack.write(`./docs/protocols/archive/commands-${version}.md`, protocols);
    }
};

const firmwareDocs = function(cb){
    var versions = jetpack.read('./firmware/versions.json', 'json' );
    for(var i in versions){
        var files = jetpack.find(`./firmware/${versions[i].version}`, {matching: ['*.json']});
        if(i == versions.length-1){
            docsFromFolder(files,'latest');
        }
        else{
            docsFromFolder(files,versions[i].version);
        }
    }
    cb();
};

module.exports = firmwareDocs;
