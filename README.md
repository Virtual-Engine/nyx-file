# nyx-file

Nyx File is a lightweight JavaScript module designed to simplify file management in your Node.js applications. This module offers a series of robust features for manipulating files and folders, making it easy to work with the file system.

# Features
- Create files: Create files with specified initial content.
- Read files: Read the contents of text files.
- Delete files: Securely delete files.
- Check existence: Check whether a file exists.
- Copy files: Copy files to a new location.
- Move files: Move files to a new location, with the option of renaming.
- and same for folder

# Installation
- To install Nyx File, use npm (Node Package Manager). Run the following command in your terminal:

``` npm install nyx-file ```

# Manager

```js
// Import the module
const { file_manager } = require('nyx-file');

//Create main folder its not necessary 
file_manager.create_main_folder('documents', 'Mainfolder');
//or
file_manager.create_main_folder('appdata', 'Mainfolder');

//Get Base dir
file_manager.get_base_dir('documents');
//or
file_manager.get_base_dir('appdata');
```
# File

```js
//Create File
file_manager.file.create('./file.txt', 'File');

//Read File
file_manager.file.read('./file.txt');

//Delete File
file_manager.file.delete('./file.txt');

//File Exists
const filePath = './file.txt';

if (file_manager.file.exists(filePath)) {
    console.log(`The file exists : ${filePath}`);
} else {
    console.log(`The file does not exist : ${filePath}`);
}

//File Copy
file_manager.file.copy('./file.txt', './file_copie.txt');

//File Move
file_manager.file.move('./file.txt', './new_folder/file_move.txt');
```

# Folder
```js
//Create Folder
file_manager.folder.create('./folder', 'Folder');

//Delete Folder
file_manager.folder.delete('./folder');

//Folder Exists
const folderPath = './folder';

if (file_manager.folder.exists(folderPath)) {
    console.log(`The folder exists : ${folderPath}`);
} else {
    console.log(`The folder does not exist : ${folderPath}`);
}

//Folder Copy
file_manager.folder.copy('./folder', './folder_copie');

//Folder Move
file_manager.folder.move('./folder', './new_folder/folder_move');

//Folder List
file_manager.folder.list('./folder');
```

# Contributions
Contributions are welcome! If you'd like to improve the module, don't hesitate to submit a pull request.

License
This project is licensed under the MIT license. See the LICENSE file for more information.
