const request = require('request-promise');

module.exports = async function getExternalFile(url) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await request({
                url,
                headers: {
                    'accept': '*/*',
                    'user-agent': 'node-require-external/1.0'
                },
                encoding: null // Ensures we get raw file
            });

            resolve(response);
        } catch(e) {
            reject(e);
        }
    });
}