import fs from 'fs';
import {yarg} from './config/plugins/yargs.plugin';

const {b: base, l: limit, s: showTable} = yarg;

let outputMessage = '';
let headerMessage = `
==============================
        Tabla del ${base}
==============================\n
`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

const multiplication = headerMessage + outputMessage;

showTable && console.log(multiplication);

const outputPath = `outputs`;

fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, multiplication);
console.log(`tabla-${base}.txt creado`);
