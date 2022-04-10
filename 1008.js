var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines[0]);
let worked_hours = parseInt(lines[1]);
let amount_per_hour = parseFloat(lines[2]);
let salary = worked_hours * amount_per_hour ;

console.log("NUMBER = " + number);
console.log("SALARY = U$ " + salary.toFixed(2));
