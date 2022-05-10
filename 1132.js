var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines[0]);
let y = parseInt(lines[1]);
let max = x > y ? x : y;
let min = x < y ? x : y;

let sum = 0;

for(let i = min; i <= max; i++ ){
    
    if(i % 13 !== 0){
        sum = sum + i;
    }
}
console.log(sum);
