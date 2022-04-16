var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var line = lines[0].split(" ");

let x = parseInt(line[0]);
let y = parseFloat(line[1]);

const snack = {
    1: 4.00, 
    2: 4.50,
    3: 5,
    4: 2,
    5: 1.5
}
let result = snack[x] * y;

console.log("Total: R$ " + result.toFixed(2));

