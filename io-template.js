/* 
Take in a number 
*/

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

const n = Number(input);

if (n % 2 === 0 && n > 2) console.log('YES')
else console.log('NO')