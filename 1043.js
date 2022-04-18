var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let line = lines[0].split(" ");
let a = parseFloat(line[0]);
let b = parseFloat(line[1]);
let c = parseFloat(line[2]);

function checkValidity(a, b, c){
    if((a + b <= c) || (a + c <= b) || (b + c <= a)){
        return false;
    }
    else{
        return true;
    }
}
if (checkValidity(a, b, c)){
    console.log("Perimetro = " + (a + b + c).toFixed(1));
}
else{
    console.log("Area = " + (((a + b) /2) *c ).toFixed(1));
}
