// const chalk = require('chalk');
// let fs = require('fs');
// let path = require('path');

import chalk from 'chalk';
import fs from 'fs';
import path from 'path';


function treeFn(dirPath) {
    // console.log("Tree commnad executed with the path", dirPath ? dirPath : process.cwd());

    dirPath = (!dirPath) ? process.cwd() : dirPath;


    let dirName = path.basename(dirPath);

    console.log("📁", chalk.blue(dirName));

    let content = fs.readdirSync(dirPath);

    for (let i = 0; i < content.length; ++i) {

        let contentName = content[i];
        let childPath = path.join(dirPath, "" + content[i]);

        if (isDirectory(childPath)) {
            console.log("\t", chalk.blue(">"), chalk.cyan(contentName));
        } else {
            if (contentName.charAt(0) == '.') {
                // it is a hidden file
                console.log("\t", chalk.yellow(contentName));
            } else {
                console.log("\t", chalk.magenta(contentName));
            }
        }

    }
}

function isDirectory(dirpath) {
    return fs.lstatSync(dirpath).isDirectory();
}

export {
    treeFn
}
// module.exports = {
//     treeFn: treeFn
// }