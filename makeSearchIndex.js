/** @ts-ignore */
/** @type {import('flexsearch')['default']} */
const FlexSearch = (require("flexsearch"));
const { existsSync, rmdirSync, readFileSync } = require('fs')
const { poindexter } = require('poindexter')
process.chdir(__dirname)

rmdirSync('output', { recursive: true })
poindexter({
    docs: 'build',
    output: 'public/poindexter.bundle.json', // 要放在static路径下
    title: x => 'title',
    description: x => 'desc',
    keywords: x => ['foo', 'bar'],
    ignoreSelectors: ['.ignored']
});


