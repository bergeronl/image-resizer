const parser = require('minimist');
const path = require('path');

const cwd = process.cwd();

function parse() {
    const arguments = parser(process.argv.slice(2));

    return {
        src: cwd,
        dest: path.join(cwd, 'resized'),
        height: arguments.height || 1200,
        width: arguments.width || 1200,
        progress: arguments.progress
    };
}

module.exports = parse;
