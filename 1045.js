var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let line = lines[0].split(" ");
let c = parseFloat(line[0]);
let b = parseFloat(line[1]);
let a = parseFloat(line[2]);

if((a >= b + c) || (b >= a + c) || (c >= a +c)){
    console.log("NAO FORMA TRIANGULO");
}
if((a * a) === ((b * b) + (c * c)) || (b * b) === ((c * c) + (a * a)) || (c * c) === ((a * a) + (b * b))){
    console.log("TRIANGULO RETANGULO");
}
if((a * a) > ((b * b) + (c * c)) || (b * b) > ((c * c) + (a * a)) || (c * c) > ((a * a) + (b * b))){
    console.log("TRIANGULO OBTUSANGULO");
}
if((a * a) < ((b * b) + (c * c)) || (b * b) < ((c * c) + (a * a)) || (c * c) < ((a * a) + (b * b))){
    console.log("TRIANGULO ACUTANGULO");
}
if(a === b && b === c && c === a){
    console.log("TRIANGULO EQUILATERO");
}
if((a === b && a !== c) || (b === c && b !== a) || (c === a && c !== b)){
     console.log("TRIANGULO ISOSCELES");   
}
