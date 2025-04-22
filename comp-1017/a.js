const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

let strings = input.split('\n')

let output = ''

for (let i = 1; i <= Number(strings[0]); i++) {
    let str = ''
    for (let word of strings[i].split(' ')) {
        str += word[0]
    }
    output += str + '\n'
}

process.stdout.write(output)