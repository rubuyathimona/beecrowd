var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines[0]);

if(x % 2 === 0){
    x = x + 1;
}
for(let i = 0; i < 6; i++){
    console.log(x);
    x = x + 2;
    
}
