/**
 * Compile PDFs and documentation for a release
 */

const jetpack = require('fs-jetpack');
const chalk = require('chalk');
const {spawnSync} = require('child_process');

// Script Start Message
console.log(chalk.green('Build Master Documents for PhotosynQ'));

// Empty dist folder
console.log(chalk.grey(`[${new Date().toISOString().slice(11,-5)}] Remove previous distribution files`));
jetpack.find('./dist', {matching: ['*']}).forEach(jetpack.remove);

// Get current tag from local repo
var tag = spawnSync('git', ['describe', '--abbrev=0', '--tags']);
tag = String(tag.stdout).trim();

// Get current tag date from current repo
var tag_date = spawnSync('git', ['log', '--tags', '--simplify-by-decoration', '--pretty="%aI"', '--max-count=1']);
tag_date = String(tag_date.stdout).trim();

// Compile master markdown files
console.log(chalk.blue(`Compile files for Github tag ${tag} (${tag_date})`));
var masterFiles = jetpack.find('./build', {matching: ['*.md']});
for(var file in masterFiles){
    var output = masterFiles[file].split('/').slice(-1).join('/');
    output = jetpack.path('dist', output);
    spawnSync('node', ['index', 'compile', '-i', masterFiles[file], '-o', output, '-t', tag, '-d', tag_date]);
    console.log(chalk.grey(`[${new Date().toISOString().slice(11,-5)}] ${output}`));
}

// Build pdfs from compiled markdown files
console.log(chalk.blue(`Generate pdf files for previous compiled master files`));
var mdFiles = jetpack.find('./dist', {matching: ['*.md']});
for(var file in mdFiles){
    var output = mdFiles[file].split('/').slice(-1).join('/').replace(/\.md$/i,'.pdf');
    output = jetpack.path('dist', output);
    spawnSync('node', ['index', 'pdf', '-i', mdFiles[file], '-o', output]);
    console.log(chalk.grey(`[${new Date().toISOString().slice(11,-5)}] ${output}`));
}

console.log(chalk.blue(`Generate ebook`));
spawnSync('node', ['index', 'epub', '-t', 'PhotosynQ Documentation', '-a', 'PhotosynQ', '-v', tag, '-d', tag_date, '-o', './dist/PhotosynQ-Documentation.epub', '-i', './dist/PhotosynQ-Help-Manual.md', './dist/PhotosynQ-Getting-Started.md', './dist/PhotosynQ-Firmware.md' ]);
console.log(chalk.grey(`[${new Date().toISOString().slice(11,-5)}] ./dist/PhotosynQ-Documentation.epub`));

// Build Firmware file
console.log(chalk.blue(`Generate firmware commands description file for server`));
spawnSync('node', ['index', 'cmd', '--merge']);
console.log(chalk.grey(`[${new Date().toISOString().slice(11,-5)}] ./dist/firmware-commands.json`));

// Clean up unnecessary files
console.log(chalk.blue(`Clean up folder`));
jetpack.find('./dist', {matching: ['*.md']}).forEach(jetpack.remove);
console.log(chalk.grey(`[${new Date().toISOString().slice(11,-5)}] Temporary files removed`));

// Script done
console.log(`${chalk.green('Done')}`);