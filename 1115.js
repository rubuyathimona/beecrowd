var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 0;
while(true){
    let[x, y] = lines[i++].split(" ").map(e => parseInt(e));
    if(x === 0 || y === 0){
        break;
    }
    if(x > 0 && y > 0){
        console.log("primeiro");
    }
    else if(x < 0 && y > 0){
        console.log("segundo");
    }
     else if(x < 0 && y < 0){
        console.log("terceiro");
    }
     else if(x > 0 && y < 0){
        console.log("quarto");
    }
}
