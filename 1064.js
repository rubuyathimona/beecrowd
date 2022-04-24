var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let arr = lines.map((e)=> parseFloat(e));
// let count = lines.map((e) => parseFloat(e))
//                 .filter((e) => e > 0).length;
                
// let sum = lines.map((e) => parseFloat(e))
//                 .filter((e) => e > 0)
//                 .reduce((a, b) => a + b, 0);


let count = 0;
let sum = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        count = count + 1
        sum = sum + arr[i];
    }
}
// let count = 0;
// for(let number of arr){
//     if(number > 0){
//         count++;
//     }
// }
console.log(count + " valores positivos");
console.log((sum / count).toFixed(1));
