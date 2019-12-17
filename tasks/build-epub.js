
/**
 * Task: Build PDF from HTML
 */

const through2 = require('through2');
const jetpack = require('fs-jetpack');

const epub = require('epub-gen');
const Entities = require('html-entities').XmlEntities;
const {linkify} = require('remarkable/linkify');
const katex = require('remarkable-katex');
const moment = require('moment-timezone');

const {mdToHTML} = require('./build-html');

const buildEPUB = function(cb){
        var cwd = jetpack.cwd();
        var input = ['./dist/PhotosynQ-Help-Manual.md', './dist/PhotosynQ-Getting-Started.md', './dist/PhotosynQ-Firmware.md'];

        for(var f in input)
            jetpack.append(jetpack.path(cwd, 'dist', 'temp.md'), jetpack.read(input[f]));
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
            remarkable: {
                html: true,
                plugins: [katex,linkify]
            },
            verbose: true
        };

        const entities = new Entities();
        var output = null;
        var collect = false;
        // for (var i in process.argv) {
        //     if (process.argv[i].match(/^-i|--input/)) {
        //         collect = true;
        //         continue;
        //     }
        //     if (process.argv[i].match(/^-o|--output/)) {
        //         if (process.argv[(parseInt(i) + 1)] !== undefined) {
        //             output = process.argv[(parseInt(i) + 1)];
        //         }
        //         collect = false;
        //         continue;
        //     }
        //     if (process.argv[i].match(/^-d|--date/)) {
        //         if (process.argv[(parseInt(i) + 1)] !== undefined) {
        //             option.date = process.argv[(parseInt(i) + 1)];
        //         }
        //         collect = false;
        //         continue;
        //     }
        //     if (process.argv[i].match(/^-v|--version/)) {
        //         if (process.argv[(parseInt(i) + 1)] !== undefined) {
        //             option.version = process.argv[(parseInt(i) + 1)];
        //         }
        //         collect = false;
        //         continue;
        //     }
        //     if (process.argv[i].match(/^-a|--author/)) {
        //         if (process.argv[(parseInt(i) + 1)] !== undefined) {
        //             option.author = process.argv[(parseInt(i) + 1)];
        //             try {
        //                 option.author = JSON.parse(option.author);
        //             }
        //             catch (e) { }
        //         }
        //         collect = false;
        //         continue;
        //     }
        //     if (process.argv[i].match(/^-t|--title/)) {
        //         if (process.argv[(parseInt(i) + 1)] !== undefined) {
        //             option.title = process.argv[(parseInt(i) + 1)];
        //         }
        //         collect = false;
        //         continue;
        //     }
        //     if (collect) {
        //         var read = jetpack.read(process.argv[i]);
        //         if (read !== undefined)
        //             jetpack.append(jetpack.path(cwd, 'dist', 'temp.md'), read);
        //     }
        // }

        // if (!output) {
        //     console.log('\nNo output file defined\n');
        //     return;
        // }

        // if (!jetpack.exists(jetpack.path(cwd, 'dist', 'temp.md'))) {
        //     console.log('\nNo input file defined\n');
        //     return;
        // }

        var _html = "";

        jetpack.createReadStream(jetpack.path(cwd, 'dist', 'temp.md'))
            .pipe(
                through2(
                    function transform(chunk, enc, cb) {
                        _html += chunk;
                        cb();
                    },
                    function flush(cb) {
                        var self = this;
                        self.push(mdToHTML(_html));
                        self.push(null);
                        cb();
                    }
                )
            )
            .on('data', function (data) {
                _html = data.toString().trim().split('\n');
                var chapters = {};
                var chapterTitle = null;

                for (var i in _html) {
                    if (_html[i].match(/^<h1/)) {
                        if (_html[i].match(/(class="chapter")/) || _html[parseInt(i) + 1].match(/<span class="text-muted">Modified/)) {
                            continue;
                        }
                        chapterTitle = _html[i].replace(/<\/?[^>]+(>|$)/g, "");
                        chapters[chapterTitle] = "";
                        continue;
                    }
                    if (chapterTitle) {
                        if (_html[i].match(/<span class="text-muted">Modified/) || _html[i].match(/<span class="text-muted">Version/))
                            continue;
                        chapters[chapterTitle] += _html[i] + '\n';
                    }
                }
                var date = moment((option.date === undefined) ? new Date() : option.date).format('LL') || moment().format('LL');
                var version = (option.version === undefined) ? "unknown" : option.version;

                var header = '<div style="margin-top:45%; text-align:center">';
                header += '<p>PhotosynQ Documentation</p>';
                header += '<small>Modified: ' + date + '</small><br>';
                header += '<small>Version: ' + version + '</small>';
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
                var output = "./dist/PhotosynQ-Documentation.epub";

                new epub(option, output);
            });
    cb();
};

module.exports = buildEPUB;