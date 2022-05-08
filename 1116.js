var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines[0]);
let i = 1;
for(i = 1; i <= n; i++){
    let[x, y] = lines[i].split(" ").map(e => parseFloat(e));
    
    if(y === 0){
        console.log("divisao impossivel");
        continue;
        }
        let div = x / y;
        console.log(div.toFixed(1));
    
}
