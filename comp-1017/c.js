const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

let strings = input.split('\n')

let output = ''

let i = 0
let element = 1


// for (let line of strings) { console.log(line) }

while (i < Number(strings[0])) {
    let n = Number(strings[element])
    let grid = Array.from({ length: n }, () => Array(n).fill(0))
    let curRow = 0
    for (let idx = element + 1; idx <= element + n; idx++) {
        let nums = strings[idx].split(' ')
        for (let col = 0; col < n; col++) {
            grid[curRow][col] = nums[col]
        }
        curRow++
    }
    element = element + n + 1
    console.log(grid)
    i++
}