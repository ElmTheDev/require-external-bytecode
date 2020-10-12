const fs = require('fs');

const getExternalFile = require('./src/getExternalFile');
const getTempFile = require('./src/getTempFile');

async function requireModule(url) {
    const file = await getTempFile();
    const data = await getExternalFile(url);

    fs.writeFileSync(file.path, data);

    const loadedModule = require(file.path);

    file.cleanup();
    return loadedModule;
}

module.exports = requireModule;