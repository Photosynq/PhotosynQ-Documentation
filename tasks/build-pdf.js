/**
 * Task: Build PDF from HTML
 */

const {src,dest} = require('gulp');
const rename = require('gulp-rename');
const through2 = require('through2');
const jetpack = require('fs-jetpack');

const puppeteer = require('puppeteer-1.10.0');

const buildPDF = function(cb){
    return src('dist/*.html')
        .pipe(through2.obj(function(file, _, cb) {

            var html = file.contents.toString();
            var out = `${file.history[0].split('.').slice(0,-1).join(".")}.pdf`;

            (async () => {
                const browser = await puppeteer.launch({
                    headless: true,
                    args: ["--disable-web-security", "--allow-file-access-from-files", "--enable-local-file-accesses", "--no-sandbox"]
                });

                const page = await browser.newPage();

                await page.setContent(html);

                await page.addStyleTag({
                    content: jetpack.read(jetpack.path(__dirname, "..", "src", "css", "print.css")).replace(/(url\(\s?\')(\.{1,2})/g, `$1file://${__dirname}`)
                });

                await page.addStyleTag({
                    path: jetpack.path(__dirname, "..", "src", "css", "linenumbers.css")
                });

                await page.addStyleTag({
                    path: jetpack.path(__dirname, "..", "node_modules", "highlight.js", "styles", "github.css")
                });

                /** Make sure to install all katex fonts into your font library! */
                await page.addStyleTag({
                    path: jetpack.path(__dirname, "..", "node_modules", "katex", "dist", "katex.min.css")
                });

                /** Make sure to install font-awesome into your font library! */
                await page.addStyleTag({
                    path: jetpack.path(__dirname, "..", "node_modules", "font-awesome", "css", "font-awesome.css")
                });

                await page.pdf({
                    displayHeaderFooter: true,
                    headerTemplate: `
                        <div class="text center"></div>`,
                    footerTemplate: `
                        <div class="text center" style="font-size:10px; font-family: Arial, Helvetica, sans-serif;">
                        <span class="pageNumber"></span> of <span class="totalPages"></span>
                        </div>`,
                    format: 'Letter',
                    margin: {
                        top: "20mm",
                        right: "20mm",
                        bottom: "20mm",
                        left: "20mm"
                    },
                    path: out,
                    printBackground: true,
                    scale: 1
                }).then(function () {
                    console.log(`PDF created. ${out}`);
                }, function (error) {
                    console.log(error);
                });

                await browser.close();
                cb();
        })();
    }));
};

module.exports = buildPDF;