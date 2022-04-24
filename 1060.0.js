var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let count = lines.map((e) => parseFloat(e))
                .filter((e) => e > 0).length;
// let count = 0;
// for(let number of arr){
//     if(number > 0){
//         count++;
//     }
// }
console.log(count + " valores positivos");
