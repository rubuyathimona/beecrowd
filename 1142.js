var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines[0]);
let count = 1;
for(let i = 1; i <= n; i++){
    let seq = "";
    for (let j = 1; j <= 4; j++){
        if(j === 4){
            seq = seq + "PUM";
        }
        else{
            seq = seq + count + " ";
        }
        count++;
        
    }
    console.log(seq);
    
}
