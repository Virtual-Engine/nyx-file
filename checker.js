const axios = require('axios');
const { version: currentVersion } = require('./package.json');

async function checkForUpdates() {
    const response = await axios.get(`https://registry.npmjs.org/nyx-file`);
    const latestVersion = response.data['dist-tags'].latest;

    if (latestVersion !== currentVersion) {
        console.log(`[nyx-file] Update available ${currentVersion} → ${latestVersion} : npm i nyx-file@latest`);
    }
}


module.exports = checkForUpdates;