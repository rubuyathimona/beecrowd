var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);
let M = (A * 2 + B * 3 + C * 5)/(2 + 3 + 5) ;
console.log("MEDIA = " + M.toFixed(1));
