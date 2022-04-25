var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let odd = parseInt(lines[0]);

for(i = 1; i <= odd; i = i + 2){
    console.log(i);
}
