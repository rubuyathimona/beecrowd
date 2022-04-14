var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines[0]);
console.log(Math.floor(n/365) + " ano(s)");
n = n - Math.floor(n/365) * 365 ;
console.log(Math.floor(n/30) + " mes(es)");
n = n - Math.floor(n/30) * 30;
console.log(n + " dia(s)");
