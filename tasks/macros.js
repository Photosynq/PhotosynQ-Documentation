/**
 * Build Macro function chapter
 */

const jetpack = require('fs-jetpack');
const Mustache = require('mustache');

var macros = function (cb) {
	var filePath = jetpack.path('node_modules', 'photosynq-helpers', 'docs', 'documentation.md');
	var content = jetpack.read(filePath) || "";
	// Change header level
	content = content.replace(/^(#+)/gm, '$1#');
	var template = jetpack.read('./templates/macros/provided-functions.md');
	var md = Mustache.render(template, {
		"macro-functions": content
	});
	jetpack.write('./docs/macros/provided-functions.md', md);
	cb();
};

module.exports = macros;