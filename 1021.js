// not accepted in the OJ
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseFloat(lines[0]);

console.log("NOTAS:")

console.log(Math.floor(n/100.00) + " nota(s) de R$ 100.00");
n = n - Math.floor(n/100.00) * 100.00;

console.log(Math.floor(n/50.00) + " nota(s) de R$ 50.00");
n = n - Math.floor(n/50.00) * 50.00;

console.log(Math.floor(n/20.00) + " nota(s) de R$ 20.00");
n = n - Math.floor(n/20.00) * 20.00;

console.log(Math.floor(n/10.00) + " nota(s) de R$ 10.00");
n = n - Math.floor(n/10.00) * 10.00;

console.log(Math.floor(n/5.00) + " nota(s) de R$ 5.00")
n = n - Math.floor(n/5.00) * 5.00;

console.log(Math.floor(n/2.00) + " nota(s) de R$ 2.00");
n = n - Math.floor(n/2.00) * 2.00;

console.log("MOEDAS:");

console.log(Math.floor(n/1.00) + " moeda(s) de R$ 1.00");
n = n - Math.floor(n/1.00) * 1.00;

console.log(Math.floor(n/0.50) + " moeda(s) de R$ 0.50");
n = n - Math.floor(n/0.50) * 0.50;

console.log(Math.floor(n/0.25) + " moeda(s) de R$ 0.25");
n = n - Math.floor(n/0.25) * 0.25;

console.log(Math.floor(n/0.10) + " moeda(s) de R$ 0.10");
n = n - Math.floor(n/0.10) * 0.10;

console.log(Math.floor(n/0.05) + " moeda(s) de R$ 0.05");
n = n - Math.floor(n/0.05) * 0.05;

console.log(Math.floor(n/0.01) + " moeda(s) de R$ 0.01");
