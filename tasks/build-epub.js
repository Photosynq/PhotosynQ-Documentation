
/**
 * Task: Build PDF from HTML
 */

const jetpack = require('fs-jetpack');
const config = require('../docs/.vuepress/config.js');
const epub = require('epub-gen');
const Entities = require('html-entities').XmlEntities;
const moment = require('moment-timezone');
const { getGitTag } = require('./tag');
const { mdToHTML } = require('./build-html');

const entities = new Entities();

const buildEPUB = function (cb) {
    var cwd = jetpack.cwd();

    /* Adding styles to the styles string */
    var cssString = jetpack.read(jetpack.path(cwd, 'src', 'css', 'epub.css'));
    cssString += jetpack.read(jetpack.path(cwd, "node_modules", "highlight.js", "styles", "github.css"));
    cssString += jetpack.read(jetpack.path(cwd, "src", "css", "linenumbers.css"));
    cssString += jetpack.read(jetpack.path(cwd, 'node_modules', 'font-awesome', 'css', 'font-awesome.css')).replace(/\.\.\/fonts\/fontawesome/g, './fonts/fontawesome');
    cssString += jetpack.read(jetpack.path(cwd, "node_modules", "katex", "dist", "katex.min.css")).replace(/fonts\/KaTeX/g, './fonts/KaTeX');

    /* Katex font files and Font Awesome ttf */
    var fontsPath = jetpack.path(cwd, 'node_modules', 'katex', 'dist','fonts');
    var fontFiles = jetpack.find(fontsPath,{matching:["*.ttf"]});
    fontFiles = fontFiles.map(function(file){
        return jetpack.path(cwd, file);
    });
    fontFiles.push( jetpack.path(cwd, 'node_modules', 'font-awesome', 'fonts', 'fontawesome-webfont.ttf') );

    var option = {
        title: "PhotosynQ Documentation", // *Required, title of the book.
        author: "PhotosynQ, Inc", // *Required, string or array.
        publisher: "PhotosynQ, Inc", // optional
        version: 3, // or 2
        css: cssString, // sting with css
        fonts: fontFiles,
        lang: 'en',
        tocTitle: 'Contents',
        customHtmlTocTemplatePath: jetpack.path(cwd, 'src', 'templates', 'toc.xhtml.ejs'),
        customOpfTemplatePath: './src/templates/content.opf.ejs',
        cover: jetpack.path(cwd, 'src', 'css', 'epub-cover.png'), // Url or File path, both ok.
        content: [],
        verbose: true
    };

    // Get Tag info
    var tag = getGitTag();

    var header = '<div style="margin-top:45%; text-align:center">';
    header += '<p>PhotosynQ Documentation</p>';
    header += '<small>' + moment((tag.date || new Date())).format('LL') + '</small><br>';
    header += '<small>Version: ' + (tag.name || '---') + '</small>';
    header += '</div>';

    option.content.push({
        data: header,
        excludeFromToc: true,
        beforeToc: false
    });

    var chapters = config.themeConfig.sidebar;

    for (var i in chapters) {

        // Make sure to skip the landing page
        if (typeof chapters[i] !== 'object')
            continue;

        // Add parent chapter
        option.content.push({
            title: entities.decode(chapters[i].title),
            groupBy: entities.decode(chapters[i].title),
            data: "",
            excludeFromToc: false,
            beforeToc: false
        });

        for (var c in chapters[i].children) {

            var path = `docs/${chapters[i].children[c]}.md`;
            var chapter = jetpack.read(path);

            // Update paths for images
            var dir = jetpack.path(path.replace(jetpack.inspect(path).name, ""));
            chapter = chapter.replace(/!\[([^\]]*)\]\((.*?)\s*("(?:.*[^"])")?\s*\)/g, function (match, g1, g2, g3) {
                var link = '';
                if (g2.match(/data:image/)) {
                    link = g2;
                }
                else {
                    link = jetpack.path(dir, g2);
                }
                return `![${g1}](${link})`;
            });

            // Remove TOCs
            chapter = chapter.replace(/(\[\[TOC\]\]\n)/gm, '');

            // Remove Tabs
            chapter = chapter.replace(/(:{4}\s{1,}tabs.*\n{1,})|(:{3}\n{0,}:{3}\s{1,}tab.*\n{1,})|(:{3}\n{0,}:{4})|(:{3}\s{1,}tab.*\n{1,})|(:{4}\n{1,})/gm, '');

            // Get Chapter title
            var chapterTitle = chapter.match(/^(#\s.*)/)[0].slice(2) || "";
            chapterTitle = chapterTitle.replace(/\s?<badge.*/i, "");

            // Remove Title since it is added by the 
            chapter = chapter.replace(/[-\n]{0,4}#\s+(.*)/,"");

            // Convert markdown to html
            var html = mdToHTML(chapter);

            option.content.push({
                title: entities.decode(chapterTitle),
                groupBy: entities.decode(chapters[i].title),
                data: html,
                excludeFromToc: false,
                beforeToc: false
            });
        }
    }

    new epub(option, "./dist/PhotosynQ-Documentation.epub");
    cb();
};

module.exports = buildEPUB;