/**
 * Create build for Help Manual from documentation menu
 */

const jetpack = require('fs-jetpack');
const config = require('../docs/.vuepress/config.js');

const compilebuild = function(cb){

    var chapters = config.themeConfig.sidebar;
    var md = '# Help Manual\n\n';
        md += '*<span class="text-muted">Modified:</span> {{ date }}\n';
        md += '<span class="text-muted">Version:</span> {{ version }}*\n\n';

    for(var i in chapters){
        if(typeof chapters[i] === 'object'){
            md += `# ${chapters[i].title} {main-chapter}\n\n`;

            var len=chapters[i].children.length;
            for( var c in chapters[i].children){
                md += `{{> docs/${chapters[i].children[c]}.md}}\n\n`;
                if(c < len-1)
                    md += `***\n\n`;
            }
        }
    }

    jetpack.write( './build/PhotosynQ-Help-Manual.md', md );
    cb();
};

module.exports = compilebuild;