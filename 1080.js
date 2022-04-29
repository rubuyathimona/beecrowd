var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let arr = lines.map(e => parseInt(e));

let greatest = arr[0];
let position = 1;

for(i = 1; i < arr.length; i++){
    if(arr[i] > greatest){
        greatest = arr[i];
        position = i + 1;
    }
}

console.log(greatest);
console.log(position);
