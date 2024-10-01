const file = require('./file/file');
const folder = require('./folder/folder');

const get_base_dir = (type) => {
    switch (type) {
        case 'appdata':
            return process.env.APPDATA || 
                   (process.platform == 'darwin' 
                        ? path.join(os.homedir(), 'Library', 'Application Support') 
                        : path.join(os.homedir(), '.local', 'share'));
        case 'documents':
            return path.join(os.homedir(), 'Documents');
        default:
            return os.homedir();
    }
};

const create_main_folder = (type, folderName) => {
    return new Promise((resolve, reject) => {
        const baseDir = getBaseDir(type);
        const targetDir = path.join(baseDir, folderName);

        if (!fs.existsSync(targetDir)) {
            fs.mkdir(targetDir, { recursive: true }, (err) => {
                if (err) return reject(`Error creating main folder : ${err}`);
                resolve(`Main folder created : ${targetDir}`);
            });
        } else {
            resolve(`The main folder already exists : ${targetDir}`);
        }
    });
};

const file_manager = {
    ...file,
    ...folder,
    get_base_dir,
    create_main_folder,
};

module.exports = file_manager;
