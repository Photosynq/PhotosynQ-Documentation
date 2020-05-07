
/**
 * Task: Build PDF from HTML
 */

const through2 = require('through2');
const jetpack = require('fs-jetpack');

const epub = require('epub-gen');
const Entities = require('html-entities').XmlEntities;
const moment = require('moment-timezone');
const {getGitTag} = require('./tag');


const {mdToHTML} = require('./build-html');

const buildEPUB = function(cb){
    var cwd = jetpack.cwd();
    var input = ['./dist/PhotosynQ-Help-Manual.md'];

    var md = "";
    for(var f in input){
        md += jetpack.read(input[f]);
    }

    var cssString = jetpack.read(jetpack.path(cwd, 'src', 'css', 'epub.css'));
    cssString += jetpack.read(jetpack.path(cwd, "node_modules", "highlight.js", "styles", "github.css"));
    cssString += jetpack.read(jetpack.path(cwd, "src", "css", "linenumbers.css"));
    cssString += jetpack.read(jetpack.path(cwd, 'node_modules', 'font-awesome', 'css', 'font-awesome.css')).replace(/\.\.\/fonts\/fontawesome/g, './fonts/fontawesome');
    cssString += jetpack.read(jetpack.path(cwd, "node_modules", "katex", "dist", "katex.min.css")).replace(/fonts\/KaTeX/g, './fonts/KaTeX');

    var option = {
        title: "PhotosynQ Documentation", // *Required, title of the book.
        author: "PhotosynQ, Inc", // *Required, string or array.
        // publisher: "", // optional
        version: 3, // or 2
        css: cssString, // sting with css
        fonts: [
            jetpack.path(cwd, 'node_modules', 'font-awesome', 'fonts', 'fontawesome-webfont.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_AMS-Regular.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_Caligraphic-Bold.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_Caligraphic-Regular.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_Fraktur-Bold.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_Fraktur-Regular.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_Main-Bold.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_Main-Italic.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_Main-Regular.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_Math-BoldItalic.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_Math-Italic.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_Math-Regular.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_SansSerif-Bold.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_SansSerif-Italic.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_SansSerif-Regular.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_Script-Regular.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_Size1-Regular.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_Size2-Regular.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_Size3-Regular.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_Size4-Regular.ttf'),
            jetpack.path(cwd, 'node_modules', 'katex', 'dist', 'fonts', 'KaTeX_Typewriter-Regular.ttf')
        ],
        lang: 'en',
        tocTitle: 'Contents',
        customHtmlTocTemplatePath: jetpack.path(cwd, 'src', 'templates', 'toc.xhtml.ejs'),
        customOpfTemplatePath: './src/templates/content.opf.ejs',
        cover: jetpack.path(cwd, 'src', 'css', 'epub-cover.png'), // Url or File path, both ok.
        content: [],
        verbose: true
    };

    const entities = new Entities();
    var html = mdToHTML(md);
    html = html.trim().split('\n');

    var chapters = {};
    var chapterTitle = null;

    for (var i in html) {
        if (html[i].match(/^<h1/)) {
            if (html[i].match(/(class="chapter")/) || html[parseInt(i) + 1].match(/<span class="text-muted">Modified/)) {
                continue;
            }
            chapterTitle = html[i].replace(/<\/?[^>]+(>|$)/g, "");
            chapters[chapterTitle] = "";
            continue;
        }
        if (chapterTitle) {
            if (html[i].match(/<span class="text-muted">Modified/) || html[i].match(/<span class="text-muted">Version/))
                continue;
            chapters[chapterTitle] += html[i] + '\n';
        }
    }
    var date = moment((option.date === undefined) ? new Date() : option.date).format('LL') || moment().format('LL');
    var version = (option.version === undefined) ? "unknown" : option.version;

    // Get Tag info
    var tag = getGitTag();

    var header = '<div style="margin-top:45%; text-align:center">';
    header += '<p>PhotosynQ Documentation</p>';
    header += '<small>' + moment((tag.date ||  new Date() )).format('LL') + '</small><br>';
    header += '<small>Version: ' + (tag.name || '---') + '</small>';
    header += '</div>';

    option.content.push({
        data: header,
        excludeFromToc: true,
        beforeToc: false
    });

    for (var c in chapters) {
        option.content.push({
            title: entities.decode(c),
            data: chapters[c]
        });
    }

    new epub(option, "./dist/PhotosynQ-Documentation.epub");
    cb();
};

module.exports = buildEPUB;