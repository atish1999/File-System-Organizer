import path from 'path';

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    // shellScript: ['sh', 'zsh', 'fish']
}


function getExtensionName(filePath) {

    // M-1
    // let idx = filePath.lastIndexOf(".");
    // let extension = filePath.slice(idx + 1);

    // M-2
    let extension = path.extname(filePath);
    let extensionName = extension.slice(1); // because dot has to be removed from extension name

    let res = "others"
    for (let key in types) {

        let typeOfExtension = types[key];

        if (typeOfExtension.includes(extensionName)) {
            res = key;
            break;
        }
    }

    return res;
}

// returnFolderName("resume.docx"); //-> document
// returnFolderName("xyz.abc"); //-> others
// returnFolderName("cli.sh")

// organize
// organizedFiles
//         media
//         archives
//         documents
//         app
//         other 

export {
    getExtensionName
}