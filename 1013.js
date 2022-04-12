var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines[0].split(" ");
const a = parseInt(line[0]);
const b = parseInt(line[1]);
const c = parseInt(line[2]);

function max(x,y){
    return (x+y+Math.abs(x-y))/2;
}

const ans =max(max(a,b), c);
console.log(ans + " eh o maior");
