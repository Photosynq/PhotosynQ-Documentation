/**
 * Task: Generate new command in latest firmware folder
 */

const jetpack = require('fs-jetpack');
const chalk = require('chalk');
var argv = require('minimist')(process.argv);

const firmwareNewCommand = function (cb) {

    if (argv.version !== undefined && argv.cmd !== undefined) {
        if (!jetpack.exists(`./firmware/${argv.version}`)) {
            console.log(chalk.red(`Version does not exist`));
        }
        else if (jetpack.exists(`./firmware/${argv.version}/${argv.cmd}.json`)) {
            console.log(chalk.red(`Command already exists`));
        }
        else {
            var data = {
                "name": argv.cmd,
                "abstract": "",
                "description": "",
                "alias": [],
                "input": "",
                "values": [],
                "example": "",
                "type": "",
                "compatibility": [],
                "deprecated": false,
                "dependencies": [],
                "parent": "",
                "access": "public"
            };
            jetpack.write(`./firmware/${argv.version}/${argv.cmd}.json`, data, { jsonIndent: 2 });
            console.log(chalk.green(`Command created: ./firmware/${argv.version}/${argv.cmd}.json`));
        }
    }
    else {
        console.log(chalk.red(`Parameter missing`));
    }
    cb();
};

module.exports = firmwareNewCommand;