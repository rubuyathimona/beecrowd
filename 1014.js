var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseFloat(lines[0]);
var y = parseFloat(lines[1]);

var avg = x/y;
console.log(avg.toFixed(3) + " km/l");
