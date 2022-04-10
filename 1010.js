var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let line1 = lines[0].split(" ");
let unit1 = parseFloat(line1[1]);
let price1 = parseFloat(line1[2]);

let line2 = lines[1].split(" ");
let unit2 = parseFloat(line2[1]);
let price2 = parseFloat(line2[2]);

let res = (unit1 * price1) + (unit2 * price2); 
console.log("VALOR A PAGAR: R$ " + res.toFixed(2));
