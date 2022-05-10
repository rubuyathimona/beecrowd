var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');



let i = 0
let sum = 0
let count = 0
while(true) {
    if (count === 2) {
        break;
    }
    let n = parseFloat(lines[i++])
    if (n < 0 || n > 10) {
        console.log('nota invalida');
    }
    else {
        sum = sum + n 
        count = count + 1
    }
}

let media = sum / 2; 
console.log(`media = ${media.toFixed(2)}`)
