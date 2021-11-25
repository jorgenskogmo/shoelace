import { readFileSync, writeFileSync } from 'fs';

const file = './dist/react/index.js';

console.log('Generating compat React exports');

const out = readFileSync(file).toString().replace(new RegExp(' as Klik', 'g'), ' as ');

writeFileSync(file, out);
