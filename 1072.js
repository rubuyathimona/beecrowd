var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines[0]);
let inn = 0;
let out = 0;
for(let i = 1; i <= n; i++){
    let x = parseInt(lines[i]);
    if(x >= 10 && x <= 20){
        inn = inn + 1;
        
    }
    else{
        out = out + 1;
    }
}
console.log(`${inn} in`);
console.log(`${out} out`);
