var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let arr = lines.map(e => parseInt(e));
let count = 0;
for(i = 0; i < arr.length ; i++){
    if(arr[i] % 2 === 0){
        count++;
    }
}
console.log(`${count} valores pares`);
