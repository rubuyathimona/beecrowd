var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var R = parseFloat(lines[0]);
var V = (4.0/3) * 3.14159 * R * R * R;

console.log("VOLUME = " + V.toFixed(3));
