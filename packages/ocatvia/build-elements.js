const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        '../../dist/ocatvia/runtime.js',
        '../../dist/ocatvia/polyfills.js',
        '../../dist/ocatvia/scripts.js',
        '../../dist/ocatvia/main.js'
    ];

    await fs.ensureDir('elements');
    await concat(files, 'elements/ocatvia.js');
})();
