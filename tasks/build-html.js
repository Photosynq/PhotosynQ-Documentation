/**
 * Task: Build HTML from markdown
 */

const {src,dest} = require('gulp');
const rename = require('gulp-rename');
const through2 = require('through2');
const jetpack = require('fs-jetpack');

const {Remarkable} = require('remarkable');
const {linkify} = require('remarkable/linkify');
const katex = require('remarkable-katex');
const hljs = require('highlight.js');
const hljsLinenums = require('code-highlight-linenums');
const sizeOf = require('image-size');

const mdToHTML = function(md){
    var mdParser = new Remarkable({
        html: true,
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
                    lang: 'auto',
                    start: 1
                });
            } catch (err) { }

            return ''; // use external default escaping
        }
    }).use(linkify);

    mdParser.use(katex);

    var html = mdParser.render(md);
    html = html.split('\n');
    html = html.map(function (element) {
        var src = element.match(/(img\s?src\s?=\s?\")(.*?)(\")/im);
        if (src) {
            if (jetpack.exists(src[2])) {
                var dimensions = sizeOf(src[2]);
                if (dimensions.height > 800 && (dimensions.width / dimensions.height) < 0.6) {
                    element = element.replace('<img', '<img style="max-width:50%" ');
                }
            }
        }

        if(element.match(/:{3,4}\s+(tip|warning|danger)\s?(.*)/)){
            var m = element.match(/:{3,4}\s+(tip|warning|danger)\s?(.*)/);
            var header = "";
            if(m[2] != "" && m[2] != "<br>"){
                header = `<p class="title-${m[1]}">${m[2].trim()}</p>`;
                element = `<div class="custom-block ${m[1]}">${header}<p>`;
            }
            else
                element = `<div class="custom-block ${m[1]}"><p>`;
        }

        if (element.match(/:::<\/p>/)){
            element = "</p></div>";
        }

        if (element.match(/(<Badge\s+text=\")([\d\w\s]+)(\"\s+type=\")(tip|warn|error)(\"\/>)/i)) {
            element = element.replace(/(<Badge\s+text=\")([\d\w\s]+)(\"\s+type=\")(tip|warn|error)(\"\/>)/i, `<span class="badge $4">$2</span>`) || element;
        }

        if (element.match(/(<h1)(.+)(\{main\-chapter\})(<\/h1>)/i)) {
            element = element.replace(/(<h1)(.+)(\{main\-chapter\})(<\/h1>)/i, `$1 class="chapter"$2$4`) || element;
        }

        if (element.match(/<img\/?[^>]+(>|$)/g)) {
            var img = element.match(/<img\/?[^>]+(>|$)/)[0].replace(/(img\s?src\s?=\s?\")(.*?)(\")/im, `$1file://$2$3`);
            if (!jetpack.exists(element.match(/<img\/?[^>]+(>|$)/)[0].match(/(img\s?src\s?=\s?\")(.*?)(\")/im)[2]))
                console.log(chalk.red(`Error - Missing file: `) + element.match(/<img\/?[^>]+(>|$)/)[0].match(/(img\s?src\s?=\s?\")(.*?)(\")/im)[2] + '\n');
            if( !element.match(/<td>/g) ){
                var fig = '<figure>';
                fig += img;
                fig += '<figcaption>';
                fig += mdParser.render(element.match(/(alt=)(\"([^>]+)(\"|$))/)[3].replace(/<\/?p>/g, ''));
                fig += '</figcaption>';
                fig += '</figure>';
                img = fig;
            }
            element = element.replace(/<img\/?[^>]+(>|$)/, img);
        }

        if (element.match(/^<li>/)) {
            element = element.replace(/^(\<li\>\s{0,})(\[x\])/i, `$1`);
        }

        var href = element.match(/(a href\s?=\s?\")(\.{0,2})(\/.*?)(\")/im);
        if (href) {
            element = element.replace(/(a href\s?=\s?\")(\.{0,2})(\/.*?)(\")/im, '$1https://photosynq.org$3$4');
        }
        return element;
    });
    // Clean up to avoid empty pages
    html = html.join('\n'); //.replace(/(<hr>)(\n<h[1-4]>)/gim,'$2'); // h1-4 can lead to a page break
    html = html.replace(/<hr>\n{0,}<hr>/gim, '<hr>'); // Two page breaking <hr> in a row

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
    return html;
};

const buildHTML = function(cb){
    return src('dist/*.md')
        .pipe(through2.obj(function(file, _, cb) {
            var md = file.contents.toString();
            md = md.trim();
            var html = mdToHTML(md);
            // jetpack.write('./dist/'+html.length+'.html',html);
            file.contents = Buffer.from(html, 'utf8');
            cb(null, file);
        }))
        .pipe(rename({ extname: '.html' }))
        .pipe(dest('dist'));
};

module.exports = { buildHTML, mdToHTML } ;