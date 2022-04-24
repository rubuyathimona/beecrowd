var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let arr = lines.map((e) => parseFloat(e));
let count = 0;
for(let i = 0; i <= arr.length; i++){
    if(arr[i] > 0){
        count++;
    }
}
console.log(count + " valores positivos")
