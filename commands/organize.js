import fs from "fs";
import path from "path";
import * as util from "./util.js";

function organizeFn(dirPath) {
    console.log("Organize commnad executed with the path", dirPath ? dirPath : process.cwd());

    organizeHelper(dirPath);
}

function isFile(filePath) {

    return fs.lstatSync(filePath).isFile();
}

function copyToThatType(filePath, type, organizedDirPath) {
    // organize folder ke andar type wala folder create karna hai and content copy karna hai

    let destFolderPath = path.join(organizedDirPath, type);

    if (!fs.existsSync(destFolderPath))
        fs.mkdirSync(destFolderPath);

    let srcFilePath = filePath;
    let originalFileName = path.basename(srcFilePath);

    let destFilePath = path.join(destFolderPath, originalFileName);

    fs.copyFileSync(srcFilePath, destFilePath);


}


function organizeHelper(dirPath) {
    // create an organizee directory in dirPath
    let organizedDirPath = path.join(dirPath, "organized_dir");

    if (!fs.existsSync(organizedDirPath))
        fs.mkdirSync(organizedDirPath);

    // read content of this path
    let contents = fs.readdirSync(dirPath);

    // only get the files

    for (let i = 0; i < contents.length; ++i) {

        let filePath = path.join(dirPath, contents[i]);

        if (isFile(filePath)) {
            // check extname

            let type = util.getExtensionName(filePath);
            // and copy the file from clutter to one of the type folder inside organized directory;

            copyToThatType(filePath, type, organizedDirPath);
        }
    }

}

// module.exports = {
//     organizeFn : organizeFn
// }

export {
    organizeFn
}