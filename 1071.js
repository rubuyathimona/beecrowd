var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines[0]);
let y = parseInt(lines[1]);

let max = 0;
let min = 0;

if(x >= y){
    max = x;
    min =y;
}
else{
    min = x;
    max = y;
}
let sum = 0;
for(let i = min + 1; i <= max - 1; i++){
    if(i % 2 === 1 || i % 2 === -1){
        sum = sum + i;
    }
}

console.log(sum);
