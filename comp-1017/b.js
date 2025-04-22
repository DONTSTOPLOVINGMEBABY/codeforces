const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

let strings = input.split('\n')

let output = ''

for (let i = 1; i <= Number(strings[0]); i++) {
    let left = 0, right = 0, total_days = 0
    let [n, m, l, r] = strings[i].split(' ')

    while (Math.abs(left) + right < m) {
        if (left > l && Math.abs(left) + right < m) {
            left--
        }
        if (right < r && Math.abs(left) + right < m) {
            right++
        }
    }

    output += `${left} ${right}\n`
}

process.stdout.write(output)

