function organizeFn(dirPath) {
    console.log("Organize commnad executed with the path", dirPath ? dirPath : process.cwd());
}

// module.exports = {
//     organizeFn : organizeFn
// }

export {
    organizeFn
}