var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(let i = 1; i <= 9; i = i + 2){
    for(let j = 7; j >=5 ; j = j - 1){
        console.log(`I=${i} J=${j}`);
    }
}
