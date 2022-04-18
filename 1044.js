var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let line = lines[0].split(" ");
let a = parseInt(line[0]);
let b = parseInt(line[1]);

if(b % a === 0 || a % b === 0){
    console.log("Sao Multiplos");
}
else{
    console.log("Nao sao Multiplos");
}
