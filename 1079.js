var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines[0]);
for (i = 1; i <= n; i++){
    let [a, b, c] = lines[i].split(" ").map(e => parseFloat(e));
    let avg = ((a * 2) + (b * 3) + (c * 5)) / (2 + 3 + 5);
    console.log(avg.toFixed(1));
}
