const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const {app} = require("./main-setup");
const http = require("http");


/**
 * Set vercell to NextJS, set Root Directory to "vercel-deployment"
 * OR
 * There are two separate repository:
 * This files will be stored at Portfolio repository, and vercel-deployment/ will be stored at Immanuel01 repository.
 * We will deploy Immanuel01 repository to vercell. Immanuel01 will contains a next js,
 * where the files will be stored at vercel-deploy/public
 * @type {string}
 */

const defaultDestinationRoot = "vercel-deployment/public";
copyDirectoryIfNewer();
renderIndexHtml();


async function renderIndexHtml(){
    const port = 8081;
    const server = app.listen(port);
    const url = `http://localhost:${port}`;

    console.log(url);
    console.log("sleeping");

    http.get("http://localhost:8080", {}, (response) => {
        response.on("data", function(chunk) {
            const chunkAsString = '' + chunk;
            writeToIndexHtml(defaultDestinationRoot, chunkAsString);
            server.close();
            console.log("written to index.html successfully");
        });
    });
}

function copyDirectoryIfNewer(sourceRoot = "public", sourcePath="",
                              destinationRoot=null){
    if (destinationRoot == null)
        destinationRoot = defaultDestinationRoot;

    const sourceWorkDir = path.join(sourceRoot, sourcePath);
    const childrenFileOrFolders = fs.readdirSync(sourceWorkDir);

    for (const childFileOrFolderName of childrenFileOrFolders) {
        const subPath = path.join(sourceWorkDir, childFileOrFolderName);

        if (fs.lstatSync(subPath).isDirectory()){
            copyDirectoryIfNewer(sourceRoot, path.join(sourcePath, childFileOrFolderName), destinationRoot);
            continue;
        }

        copyFileIfNewer(subPath, path.join(destinationRoot, sourcePath, childFileOrFolderName))
    }
}

function copyFileIfNewer(sourceFile, targetPath){
    if (fs.existsSync(targetPath) && compareLastModifiedTime(sourceFile, targetPath) <= 0){
        console.log(`not newer. skip: ${sourceFile}`);
        return;
    }
    console.log(sourceFile);
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    copyOrOverwriteFile(sourceFile, targetPath);
}

function getFileLastModifiedTime(fileName){
    const stats = fs.statSync(fileName);
    return stats.mtime;
}

function compareLastModifiedTime(fileName1, fileName2){
    return getFileLastModifiedTime(fileName1) - getFileLastModifiedTime(fileName2);
}

function copyOrOverwriteFile(sourceFile, targetPath){
    if (fs.existsSync(targetPath))
        fs.unlinkSync(targetPath);
    fs.copyFileSync(sourceFile, targetPath);
}





function writeToIndexHtml(destinationRoot, content){
    const targetPath = path.join(destinationRoot, "index.html");
    fs.writeFileSync(targetPath, content);
}

function sleep(ms){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, ms);
    });
}