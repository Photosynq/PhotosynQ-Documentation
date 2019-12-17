/**
 * Task: Get required tag information
 */

const {spawnSync} = require('child_process');

const tag = function(cb){
    // Get current tag from local repo
    var tag = spawnSync('git', ['describe', '--abbrev=0', '--tags']);
    tag = String(tag.stdout).trim();

    // Get current tag date from current repo
    var tag_date = spawnSync('git', ['log', '--tags', '--simplify-by-decoration', '--pretty="%aI"', '--max-count=1']);
    tag_date = String(tag_date.stdout).trim();
    return new Promise(function(resolve, reject){
        resolve({tag: tag, data: tag_date});
    });
};

module.exports = tag;