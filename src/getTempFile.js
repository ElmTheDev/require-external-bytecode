const tmp = require('tmp');
const fs = require('fs');

module.exports = async function getTempFile() {
    return new Promise((resolve, reject) => {
        tmp.file({
            prefix: 'extmodule-',
            postfix: '.jsc',
            keep: false
        }, function (err, path, fd, cleanupCallback) {
            if (err) return reject(err);

            resolve({
                path,
                cleanup: cleanupCallback
            });
        });
    });
}