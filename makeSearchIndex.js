/** @ts-ignore */
/** @type {import('flexsearch')['default']} */
const FlexSearch = require('flexsearch');
const {existsSync, rmdirSync, readFileSync, copyFile} = require('fs');
const {poindexter} = require('poindexter');
process.chdir(__dirname);

// rmdirSync('output', {recursive: true});
poindexter({
    docs: 'build',
    output: 'public/poindexter.bundle.json', // 要放在public路径下
    // title: x => 'title',
    // description: x => 'desc',
    keywords: ($) => {
        const match = $('meta[name=keywords]').attr('content');
        return match ? match.split(',') : '';
    },
    ignoreSelectors: ['.ignored']
});

copyFile(
    'public/poindexter.bundle.json',
    'build/poindexter.bundle.json',
    (err) => {
        if (err) throw err;
        console.log(
            'output/poindexter.bundle.json was copied to public/poindexter.bundle.json'
        );
    }
);
