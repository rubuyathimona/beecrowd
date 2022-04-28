var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines[0]);

for (i = 1; i < 10000; i++){
    if(i % n === 2){
        console.log(i);
    }
}
