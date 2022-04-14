var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let line = lines[0].split(" ");
let a = parseFloat(line[0]);
let b = parseFloat(line[1]);
let c = parseFloat(line[2]);

let d = b * b - 4 * a * c;
// console.log("!! d: " + d);
if(d < 0 || a === 0){
    console.log("Impossivel calcular");
}
else{
let R1 = (-b + Math.sqrt(d))/(2 * a);
let R2 = (-b - Math.sqrt(d))/(2 * a);

console.log("R1 = " + R1.toFixed(5));
console.log("R2 = " + R2.toFixed(5));
}
