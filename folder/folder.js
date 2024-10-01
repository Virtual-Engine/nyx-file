const fs = require('fs');
const path = require('path');

const file = require('../file/file')

const folder = {
    create: (dirPath) => {
        return new Promise((resolve, reject) => {
            if (!fs.existsSync(dirPath)) {
                fs.mkdir(dirPath, { recursive: true }, (err) => {
                    if (err) return reject(`Fialed to create folder : ${err}`);
                    resolve(`Folder created : ${dirPath}`);
                });
            } else {
                resolve(`The folder already exists : ${dirPath}`);
            }
        });
    },

    delete: (dirPath) => {
        return new Promise((resolve, reject) => {
            fs.rmdir(dirPath, { recursive: true }, (err) => {
                if (err) return reject(`Failed to delete folder : ${err}`);
                resolve(`Folder Deleted : ${dirPath}`);
            });
        });
    },

    list: (dirPath) => {
        return new Promise((resolve, reject) => {
            fs.readdir(dirPath, (err, files) => {
                if (err) return reject(`Failed to recover folder : ${err}`);
                resolve(files);
            });
        });
    },

    exists: (dirPath) => {
        return fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory();
    },

    copy: (source, destination) => {
        return new Promise((resolve, reject) => {
            fs.mkdir(destination, { recursive: true }, (err) => {
                if (err) return reject(`Error creating destination folder : ${err}`);

                fs.readdir(source, (err, files) => {
                    if (err) return reject(`Error reading source file : ${err}`);

                    Promise.all(files.map(file => {
                        const srcPath = path.join(source, file);
                        const destPath = path.join(destination, file);

                        return fs.promises.lstat(srcPath).then(stats => {
                            if (stats.isDirectory()) {
                                return copy(srcPath, destPath);
                            } else {
                                return file.copy(srcPath, destPath);
                            }
                        });
                    })).then(() => {
                        resolve(`File copied from ${source} to ${destination}`);
                    }).catch(reject);
                });
            });
        });
    },

    move: (source, destination) => {
        return new Promise((resolve, reject) => {
            fileManager.copyDirectory(source, destination)
                .then(() => fileManager.deleteDirectory(source))
                .then(() => resolve(`Folder moved from ${source} to ${destination}`))
                .catch(reject);
        });
    }
};

module.exports = folder;
