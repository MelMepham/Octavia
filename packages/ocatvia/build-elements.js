const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        '../../dist/web/runtime.js',
        '../../dist/web/polyfills.js',
        '../../dist/web/scripts.js',
        '../../dist/web/main.js'
    ];

    await fs.ensureDir('elements');
    await concat(files, 'elements/ocatvia.js');
})();
