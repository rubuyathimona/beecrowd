var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let name = (lines[0]);
let fixed_salary = parseFloat(lines[1]);
let sales_total = parseFloat(lines[2]);
let salary = fixed_salary + (sales_total * 15/100);

console.log("TOTAL = R$ " + salary.toFixed(2));
