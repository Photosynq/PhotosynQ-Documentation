/**
 * Task: Get required tag information
 */

const { spawnSync } = require('child_process');

const getGitTag = function () {
    // Get current tag name from current repo
    var tag_name = spawnSync('git', ['describe', '--abbrev=0', '--tags']);

    // Get current tag date from current repo
    var tag_date = spawnSync('git', ['log', '--tags', '--simplify-by-decoration', '--pretty="%aI"', '--max-count=1']);

    return {
        name: tag_name = tag_name.stdout.toString().trim(),
        date: tag_date.stdout.toString().trim().slice(1, -1)
    };
};

const showTag = function (cb) {
    // Get current tag from local repo
    var tag = getGitTag();
    console.log(`Name: ${tag.name}\nName: ${tag.date}\n`);
    cb();
};

module.exports = { showTag, getGitTag };