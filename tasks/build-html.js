/**
 * Task: Build HTML from markdown
 */

const {src,dest} = require('gulp');
const rename = require('gulp-rename');
const through2 = require('through2');
const jetpack = require('fs-jetpack');
const chalk = require('chalk');

const MarkdownIt = require('markdown-it');
const katex = require('markdown-it-katex');
const container = require('markdown-it-container');
const figures = require('markdown-it-implicit-figures');

const hljs = require('highlight.js');
const hljsLinenums = require('code-highlight-linenums');
const sizeOf = require('image-size');

const mdToHTML = function(content){

    var md = new MarkdownIt({
        html: true,
        linkify: true,
        breaks: true,
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljsLinenums(str.trim(), {
                        hljs: hljs,
                        lang: lang,
                        start: 1
                    });
                } catch (err) { }
            }

            try {
                return hljsLinenums(str.trim(), {
                    hljs: hljs,
                    start: 1
                });
            } catch (err) { }

            return ''; // use external default escaping
        }
    })
    .use(container, '', {
        validate: function(params) {
            return params.trim().match(/^(tip|warning|danger|details)\s?(.*)$/);
        },
       
        render: function (tokens, idx) {
            var m = tokens[idx].info.trim().match(/^(tip|warning|danger|details)\s?(.*)$/);
            if (tokens[idx].nesting === 1) {
                // opening tag
                if(m[2] == '')
                    return `<div class="custom-block ${m[1].trim()}">\n`;
                else
                    return `<div class="custom-block ${m[1].trim()}">\n<p class="title-${m[1].trim()}">${m[2].trim()}</p>\n`;

            } else {
                // closing tag
                return '</div>\n';
            }
        }
    })
    .use(figures,{
        figcaption: true
    })
    .use(katex);
    
    var html = md.render(content);

    html = html.replace(/<hr>\n{0,}<hr>/gim, '<hr>'); // Two page breaking <hr> in a row

    html = html.split('\n');
    html = html.map(function (element) {

        if (element.match(/<img\/?[^>]+(>|$)/g)) {
            // Check source
            var src = element.match(/<img\/?[^>]+(>|$)/)[0].match(/(img\s?src\s?=\s?\")(.*?)(\")/im)[2];
            if(src && !jetpack.exists(src))
                console.log(chalk.red(`Error - Missing file: `) + src + '\n');

            // Update source url
            img = element.match(/<img\/?[^>]+(>|$)/)[0].replace(/(img\s?src\s?=\s?\")(.*?)(\")/im, `$1file://$2$3`);
            element = element.replace(/<img\/?[^>]+(>|$)/, img);
            
            // Test dimensions
            if(jetpack.exists(src)){
                var dimensions = sizeOf(src);
                if (dimensions.height > 800 && (dimensions.width / dimensions.height) < 0.6) {
                    element = element.replace('<img', '<img style="max-width:50%" ');
                }
            }
        }

        // Convert badges from vue format to html
        if (element.match(/(<Badge\s+text=\")([\d\w\s]+)(\"\s+type=\")(tip|warn|error)(\"\/>)/i)) {
            element = element.replace(/(<Badge\s+text=\")([\d\w\s]+)(\"\s+type=\")(tip|warn|error)(\"\/>)/i, `<span class="badge $4">$2</span>`) || element;
        }

        // Add chapter class to headers with {main-chapter}
        if (element.match(/(<h1)(.+)(\{main\-chapter\})(<\/h1>)/i)) {
            element = element.replace(/(<h1)(.+)(\{main\-chapter\})(<\/h1>)/i, `$1 class="chapter"$2$4`) || element;
        }

        // Remove Task list items
        if (element.match(/^<li>/)) {
            element = element.replace(/^(\<li\>\s{0,})(\[x\])/i, `$1`);
        }

        // convert relative to absolute url
        var href = element.match(/(a href\s?=\s?\")(\.{0,2})(\/.*?)(\")/im);
        if (href) {
            element = element.replace(/(a href\s?=\s?\")(\.{0,2})(\/.*?)(\")/im, '$1https://photosynq.org$3$4');
        }
        return element;
    });

    html = html.join('\n');
    return html;
};

const buildHTML = function(cb){
    return src('dist/*.md')
        .pipe(through2.obj(function(file, _, cb) {
            var md = file.contents.toString();
            md = md.trim();
            var html = mdToHTML(md);
            html = `<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>PhotosynQ Documentation</title>
                </head>
                <body>
                    ${html}
                </body>
            </html>`;
            file.contents = Buffer.from(html, 'utf8');
            cb(null, file);
        }))
        .pipe(rename({ extname: '.html' }))
        .pipe(dest('dist'));
};

module.exports = { buildHTML, mdToHTML } ;