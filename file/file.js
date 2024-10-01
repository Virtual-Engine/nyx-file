const fs = require('fs');
const path = require('path');

const file = {
    create: (filePath, content = '') => {
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, content, (err) => {
                if (err) return reject(`Failed to create file : ${err}`);
                resolve(`File Created : ${filePath}`);
            });
        });
    },

    read: (filePath) => {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) return reject(`Failed to read file : ${err}`);
                resolve(data);
            });
        });
    },

    delete: (filePath) => {
        return new Promise((resolve, reject) => {
            fs.unlink(filePath, (err) => {
                if (err) return reject(`Failed to delete file : ${err}`);
                resolve(`File Deleted : ${filePath}`);
            });
        });
    },

    exists: (filePath) => {
        return fs.existsSync(filePath);
    },

    copy: (source, destination) => {
        return new Promise((resolve, reject) => {
            fs.copyFile(source, destination, (err) => {
                if (err) return reject(`Error copying file : ${err}`);
                resolve(`File copied from ${source} to ${destination}`);
            });
        });
    },

    move: (source, destination) => {
        return new Promise((resolve, reject) => {
            fs.rename(source, destination, (err) => {
                if (err) return reject(`Error moving file : ${err}`);
                resolve(`File moved from ${source} to ${destination}`);
            });
        });
    }
};

module.exports = file;