/**
 * Task: Test links in Markdown files
 */

const jetpack = require('fs-jetpack');
const markdownLinkCheck = require('markdown-link-check');
const chalk = require('chalk');

var testLinks = function (cb) {
	var list = jetpack.find('.', { matching: ['docs/*/*.md'] });
	var files = {};
	var linkList = [];
	var localList = [];
	var deadLinks = [];
	for (var i in list) {
		var content = jetpack.read(list[i]);
		files[list[i]] = { 'links': [], 'local': [] }
		var links = content.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim)
		var internalLinks = content.match(/[^!]\[(.*?)\]\((\.{0,2}\/.*?)\)/gm);
		var images = content.match(/!\[(.*?)\]\((.*?)\)/gm);
		if (links) {
			for (var l in links) {
				files[list[i]].links.push(links[l]);
				if (linkList.indexOf(links[l]) == -1)
					linkList.push(links[l]);
			}
		}
		if (internalLinks) {
			internalLinks = internalLinks.map(function (x) {
				return x.match(/[^!]\[(.*?)\]\((\.{0,2}\/.*?)\)/m)[2];
			});
			for (var l in internalLinks) {
				files[list[i]].local.push(internalLinks[l]);
				if (localList.indexOf(internalLinks[l]) == -1)
					localList.push(internalLinks[l]);
			}
		}
		if (images) {
			images = images.map(function (x) {
				return x.match(/(!\[(.*?)\]\()(.*?)(\))/m)[3];
			});
			for (var l in images) {
				files[list[i]].local.push(images[l]);
				if (localList.indexOf(images[l]) == -1)
					localList.push('../' + images[l]);
			}
		}
	}

	markdownLinkCheck(linkList.join('\n'), {
		baseUrl: 'https://photosynq.org',
		showProgressBar: true
	}, function (err, results) {
		if (err) {
			console.error('Error', err);
			return;
		}
		results.forEach(function (result) {
			if (result.status == 'dead')
				deadLinks.push(result.link);
		});
		var errors = false;
		for (var file in files) {
			var toCheck = false;
			if (files[file]['links'] !== undefined) {
				for (var l in files[file]['links']) {
					toCheck = true;
					if (deadLinks.indexOf(files[file]['links'][l]) > -1) {
						console.log(`\n${chalk.cyan(file)}`);
						console.log(`[${chalk.red('✖')}] ${chalk.yellow('LINK')} ${files[file]['links'][l]}`);
						errors = true;
					}
				}
			}
			if (files[file].local !== undefined) {
				for (var l in files[file].local) {
					toCheck = true;
					if (jetpack.exists(files[file].local[l])) {
						console.log(`\n${chalk.cyan(file)}`);
						console.log(`[${chalk.red('✖')}] ${chalk.yellow('LOCAL')} ${files[file].local[l]}`);
						errors = true;
					}
				}
			}
		}
		if (errors)
			console.log(chalk.red(`\nError: ${deadLinks.length} Dead links or missing files found`));
		cb();
	});
};

module.exports = testLinks;