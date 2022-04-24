var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseFloat(lines[0]);

if(x >= 0.00 && x <= 2000.00){
    console.log("Isento");
}
else if(x >= 2000.01 && x <= 3000.00){
    let tax = (x - 2000.00) * (8 / 100);
    console.log("R$ " + tax.toFixed(2));
}
else if(x >= 3000.01 && x <= 4500.00){
    let tax = 1000.00 * (8 / 100) + (x - 3000.00) * (18 /100)
    console.log("R$ " + tax.toFixed(2));
}
else {
    let tax = 1000.00 * (8 / 100) + 1500.00 * (18 / 100) + (x - 4500.00) * (28 / 100);
    console.log("R$ " + tax.toFixed(2));
}
