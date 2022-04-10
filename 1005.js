var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let M = (A * 3.5 + B * 7.5)/(3.5 + 7.5) ;
console.log("MEDIA = " + M.toFixed(5));
