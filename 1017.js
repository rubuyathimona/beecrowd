var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const time = parseFloat(lines[0]);
const speed = parseFloat(lines[1]);

const liter = (time * speed) / 12;

console.log(liter.toFixed(3));
