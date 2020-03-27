/**
 * Task: Compile master markdown files
 */

const {src,dest} = require('gulp');
const through2 = require('through2');
const jetpack = require('fs-jetpack');
const Mustache = require('mustache');
const moment = require('moment-timezone');

const {getGitTag} = require('./tag');

const compileMD = function(cb){
    return src('build/*.md')
        .pipe(through2.obj(function(file, _, cb) {
            var input = file.contents.toString();
            var src_path = './';
            var files = input.match(/(\{+\s?\>\s)([\w\d\.\/-]+)(\}+)/g);
            
            var content = {};

            for (var i in files) {
                // Path for reading the file
                var path_rel = files[i].replace(/(\{+\s?\>\s)([\w\d\.\/-]+)(\}+)/, '$2');
                // Path for mustache
                var path = jetpack.path(src_path, path_rel );
                // Error if path does not exist
                if(!jetpack.exists(path))    
                    console.log(`File ${path} not found`);

                // Add content to object
                content[path_rel] = jetpack.read(path) + '\n';

                // Update paths for images
                var dir = path_rel.split('/').slice(0, -1).join('/');
                content[path_rel] = content[path_rel].replace(/!\[([^\]]*)\]\((.*?)\s*("(?:.*[^"])")?\s*\)/g, function (match, g1, g2, g3) {
                    var link = '';
                    if(g2.match(/data:image/)){
                        link = g2;
                    }
                    else{
                        link = jetpack.path( dir, g2);
                    }
                    return `![${g1}](${link})`;
                });

                // Remove TOCs
                content[path_rel] = content[path_rel].replace(/(\[\[TOC\]\]\n)/gm, '');

                // Remove Tabs
                content[path_rel] = content[path_rel].replace(/(:{4}\s{1,}tabs.*\n{1,})|(:{3}\n{0,}:{3}\s{1,}tab.*\n{1,})|(:{3}\n{0,}:{4})|(:{3}\s{1,}tab.*\n{1,})|(:{4}\n{1,})/gm, '');
            }

            // Get Tag info
            var tag = getGitTag();

            // compile markdown
            var md = Mustache.render(input, {
                date: moment((tag.date ||  new Date() )).format('LL'),
                version: (tag.name || '--') 
            }, content);

            // Change string to buffer
            file.contents = Buffer.from(md, 'utf8');

            // return buffer
            cb(null, file);
        }))
        .pipe(dest('dist'));
};

module.exports = compileMD;