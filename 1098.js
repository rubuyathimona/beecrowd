var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i <= 2; i = parseFloat((i + 0.2).toFixed(1))) {
  for (let j = 1 + i; j <= 3 + i; j = j + 1) {
    let x = Number.isInteger(i) ? parseInt(i) : i.toFixed(1);
    let y = Number.isInteger(j) ? parseInt(j) : j.toFixed(1);
    console.log(`I=${x} J=${y}`);
  }
}
