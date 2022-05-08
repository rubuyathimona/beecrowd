var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 0;
while(true){
    let[x, y] = lines[i++].split(" ").map(e => parseInt(e));
    if(x === y){
        break;
    }
    
    if(x < y){
        console.log("Crescente");
    }
    else{
        console.log("Decrescente");
    }
}
