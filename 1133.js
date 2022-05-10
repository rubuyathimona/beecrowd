var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines[0]);
let y = parseInt(lines[1]);
let max = x > y ? x : y;
let min = x < y ? x : y;

for(i = min + 1; i < max; i++){
    if(i % 5 === 2 || i % 5 === 3){
        console.log(i);
    }
}
