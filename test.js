const bytenode = require('bytenode');
const requireBytenode = require('./index');

(async () => {
    const testModule = await requireBytenode('https://rawcdn.githack.com/ElmTheDev/require-external-bytecode/5ef16900fc1ebf6ecbef773d9eb944e85e5a769b/test.jsc');
    console.log(testModule)
})();
